import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "../pages/Home";
import PersonalData from "../pages/PersonalData";
import Fund from "../components/Fund";
import LoginForm from "../components/LoginForm";
import MyAccount from "../pages/MyAccount";
import Fav from "../components/Fav";
import InscriptionForm from "../components/InscriptionForm";
import ShopDetails from "../components/ShopDetails";

// Place all routes here
const routes = [
  { path: "/home", component: <Home /> },
  { path: "/account", component: <MyAccount /> },
  { path: "/account/mydata", component: <PersonalData /> },
  { path: "/fav", component: <Fav /> },
  { path: "/funds", component: <Fund /> },
  { path: "/inscription", component: <InscriptionForm /> },
  { path: "/account", component: <MyAccount /> },
  { path: "/", component: <LoginForm /> },
  { path: "/shopDetails", component: <ShopDetails /> },
];

function Router({ children }) {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Router;
