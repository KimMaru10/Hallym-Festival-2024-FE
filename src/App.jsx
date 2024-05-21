import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Info from "./pages/Info/Info.jsx";
import GoodsAndEvents from "./pages/GoodsAndEvents/GoodsAndEvents.jsx";
import LostItem from "./pages/LostItem/LostItem.jsx";
import PromotionalVideo from "./pages/PromotionalVideo/PromotionalVideo.jsx";
import Reservation from "./pages/Reservation/Reservation.jsx";
import Community from "./pages/Community/Community.jsx";
import QR from "./pages/QR/QR.jsx";
import BoothInfo from "./pages/BoothInfo/BoothInfo.jsx";
import Notice from "./pages/Notice/Notice.jsx";
import Start from "./pages/Start/Start.jsx";
import Lineup from "./pages/LineUp/LineUp.jsx";
import PubInfo from "./pages/PubInfo/PubInfo.jsx";
import ReservationInformation from "./pages/ReservationInformation/ReservationInformation.jsx";
import ReservationDetail from "./pages/ReservationDetail/ReservationDetail.jsx";
import Goods from "./pages/Goods/Goods.jsx";
import Events from "./pages/Events/Events.jsx";
import PlaygroundInfo from "./pages/PlaygroundInfo/PlaygroundInfo.jsx";
import HopeGroundInfo from "./pages/HopeGroundInfo/HopeGroundInfo.jsx";
import Gidam from "./pages/Gidam/Gidam.jsx";
import StageInfo from "./pages/StageInfo/StageInfo.jsx";
import Inspection from "./pages/Inspection/Inspection.jsx";
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
        <Routes>
          <Route path="/" exact={true} element={<Start />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/info" element={<Info />} />
          <Route path="/boothinfo" element={<BoothInfo />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/goodsAndEvents" element={<GoodsAndEvents />} />
          <Route path="/community" element={<Community />} />
          <Route path="/lostItem" element={<LostItem />} />
          <Route path="/promotionalVideo" element={<PromotionalVideo />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/lineup" element={<Lineup />} />
          <Route path="/pubInfo" element={<PubInfo />} />
          <Route path="/reservationInfo" element={<ReservationInformation />} />
          <Route path="/reservationDetail" element={<ReservationDetail />} />
          <Route path="/reservationInfo" element={<ReservationInformation />} />
          <Route path="/reservationDetail" element={<ReservationDetail />} />
          <Route path="/goods" element={<Goods />} />
          <Route path="/events" element={<Events />} />
          <Route path="/playgroundInfo" element={<PlaygroundInfo />} />
          <Route path="/hopeGroundInfo" element={<HopeGroundInfo />} />
          <Route path="/gidam" element={<Gidam />} />
          <Route path="/stageInfo" element={<StageInfo />} />
          <Route path="/inspection" element={<Inspection/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
