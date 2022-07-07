import React from "react";
import ReactDOM from "react-dom/client";

import { AuthContextProvider } from "./contexts/AuthContext";
import { GeolocationContextProvider } from "./contexts/GeolocationContext";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GeolocationContextProvider>
        <App />
      </GeolocationContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
