import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

if (!navigator.geolocation) {
  console.log("Tu navegador no tiene la opcion de geolocalizacion");
  throw new Error("Tu navegador no tiene la opcion de geolocalizacion");
}

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
