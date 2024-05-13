import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/fonts/font.css";
import { BrowserRouter } from "react-router-dom";
import PreloadImage from "./PreloadImage.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PreloadImage src="./assets/logo1.png" />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
