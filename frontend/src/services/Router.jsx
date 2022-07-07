import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "../pages/Home";
import MyAccount from "../pages/MyAccount";
import PersonalData from "../pages/PersonalData";
import ShopList from "../pages/ShopList";
import Fav from "../components/Fav";
import Fund from "../components/Fund";
import InscriptionForm from "../components/InscriptionForm";
import LoginForm from "../components/LoginForm";
import ShopDetails from "../components/ShopDetails";
import Itenary from "../pages/Itenary";
import { useAuthContext } from "../contexts/AuthContext";

// Place all routes here
const protectedRoutes = [
  { path: "/home", component: <Home /> },
  { path: "/account", component: <MyAccount /> },
  { path: "/account/mydata", component: <PersonalData /> },
  { path: "/fav", component: <Fav /> },
  { path: "/funds", component: <Fund /> },
  { path: "/inscription", component: <InscriptionForm /> },
  { path: "/", component: <LoginForm /> },
  { path: "/shops/:id", component: <ShopDetails /> },
  { path: "/shopList", component: <ShopList /> },
  { path: "/itenary/:x/:y", component: <Itenary /> },
];

function Router({ children }) {
  const { loginData } = useAuthContext();

  const protect = (element) => {
    if (!loginData.isLoggedIn) {
      return <Navigate to="/" />;
    }

    return element;
  };

  const protectedRoute = (path, element, key) => (
    <Route key={key} path={path} element={protect(element)} />
  );

  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/inscription" element={<InscriptionForm />} />
        {protectedRoutes.map((route) =>
          protectedRoute(route.path, route.component, route.path)
        )}
      </Routes>
    </BrowserRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Router;
