import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import HallymFestival from "./pages/HallymFestival.jsx";
const App = () => {
  // function setScreenSize() {
  //   let vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty("--vh", `${vh}px`);
  // }
  // useEffect(() => {
  //   setScreenSize();
  // });
  return (
    <>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/hallymfestival" element={<HallymFestival />} />
      </Routes>
    </>
  );
};

export default App;
