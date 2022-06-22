import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "@pages/Home";
import Fav from "../components/Fav";

// Place all routes here
const routes = [
  { path: "/", component: <Home /> },
  { path: "/fav", component: <Fav /> },
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
