import React from "react";
import ReactDOM from "react-dom/client";
import { GeolocationContextProvider } from "./contexts/GeolocationContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import App from "./App";
import "./index.css";
import { AddressContextProvider } from "./contexts/AddressContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GeolocationContextProvider>
      <AuthContextProvider>
        <AddressContextProvider>
          <App />
        </AddressContextProvider>
      </AuthContextProvider>
    </GeolocationContextProvider>
  </React.StrictMode>
);
