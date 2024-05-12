import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/fonts/font.css";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </RecoilRoot>
);
