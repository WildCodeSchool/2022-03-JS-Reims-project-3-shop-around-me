import React from "react";
import ReactDOM from "react-dom/client";

import { AuthContextProvider } from "./contexts/AuthContext";

import App from "./App";
import "./index.css";
import { AddressContextProvider } from "./contexts/AddressContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AddressContextProvider>
        <App />
      </AddressContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
