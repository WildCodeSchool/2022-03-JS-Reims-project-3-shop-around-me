import React from "react";
import ReactDOM from "react-dom/client";

import { AuthContextProvider } from "./contexts/AuthContext";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
