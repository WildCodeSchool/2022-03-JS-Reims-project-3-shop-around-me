import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "../pages/Home";
import PersonalData from "../pages/PersonalData";
import Fund from "../components/Fund";
import LoginForm from "../components/LoginForm";
import MyAccount from "../pages/MyAccount";
// import Fav from "../components/Fav";
import InscriptionForm from "../components/InscriptionForm";
import ShopDetails from "../components/ShopDetails";
import ShopList from "../pages/ShopList";
import Test from "../pages/Test";
import { useAuthContext } from "../contexts/AuthContext";

// Place all routes here
const protectedRoutes = [
  { path: "/home", component: <Home /> },
  { path: "/account", component: <MyAccount /> },
  { path: "/account/mydata", component: <PersonalData /> },
  { path: "/fav", component: <Test /> },
  { path: "/funds", component: <Fund /> },
  { path: "/inscription", component: <InscriptionForm /> },
  { path: "/", component: <LoginForm /> },
  { path: "/shops/:id", component: <ShopDetails /> },
  { path: "/shopList", component: <ShopList /> },
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
