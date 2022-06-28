import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "../pages/Home";
import Fund from "../components/Fund";
import MyAccount from "../pages/MyAccount";
import Fav from "../components/Fav";
import InscriptionForm from "../components/InscriptionForm";

// Place all routes here
const routes = [
  { path: "/", component: <Home /> },
  { path: "/fav", component: <Fav /> },
  { path: "/funds", component: <Fund /> },
  { path: "/inscription", component: <InscriptionForm /> },
  { path: "/account", component: <MyAccount /> },
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
