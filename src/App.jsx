import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import HallymFestival from "./pages/HallymFestival.jsx";
import Info from "./pages/Info.jsx";
import GoodsAndEvents from "./pages/GoodsAndEvents.jsx";
import LostItem from "./pages/LostItem.jsx";
import PromotionalVideo from "./pages/PromotionalVideo.jsx";
import Reservation from "./pages/Reservation.jsx";
import Schedule from "./pages/Schedule.jsx";
import Community from "./pages/Community.jsx";
import { Background } from "./components/index.js";
import QR from "./pages/QR.jsx";
const App = () => {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <>
      <QR />
      <div className="content">
        <Background />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/hallymfestival" element={<HallymFestival />} />
          <Route path="/info" element={<Info />} />
          <Route path="/goodAndEvents" element={<GoodsAndEvents />} />
          <Route path="/community" element={<Community />} />
          <Route path="/lostItem" element={<LostItem />} />
          <Route path="/promotionalVideo" element={<PromotionalVideo />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
