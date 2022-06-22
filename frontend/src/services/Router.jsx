import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "../pages/Home";
import PersonnalData from "../pages/PersonnalData";
import MyAccount from "../pages/MyAccount";

// Place all routes here
const routes = [
  { path: "/", component: <Home /> },
  { path: "/myaccount", component: <MyAccount /> },
  { path: "/mydata", component: <PersonnalData /> },
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
