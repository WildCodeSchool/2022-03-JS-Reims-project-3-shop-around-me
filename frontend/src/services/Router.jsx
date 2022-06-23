import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "../pages/Home";
import PersonnalData from "../pages/PersonnalData";
import MyAccount from "../pages/MyAccount";
import Fund from "../components/Fund";
import Fav from "../components/Fav";
import InscriptionForm from "../components/InscriptionForm";

// Place all routes here
const routes = [
  { path: "/", component: <Home /> },
  { path: "/myaccount", component: <MyAccount /> },
  { path: "/mydata", component: <PersonnalData /> },
  { path: "/fav", component: <Fav /> },
  { path: "/funds", component: <Fund /> },
  { path: "/inscription", component: <InscriptionForm /> },
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
