import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound.jsx";
const Home = React.lazy(() => import("./pages/Home/Home.jsx"));
const Info = React.lazy(() => import("./pages/Info/Info.jsx"));
const GoodsAndEvents = React.lazy(() =>
  import("./pages/GoodsAndEvents/GoodsAndEvents.jsx")
);
const LostItem = React.lazy(() => import("./pages/LostItem/LostItem.jsx"));
const PromotionalVideo = React.lazy(() =>
  import("./pages/PromotionalVideo/PromotionalVideo.jsx")
);
const Reservation = React.lazy(() =>
  import("./pages/Reservation/Reservation.jsx")
);
const Schedule = React.lazy(() => import("./pages/Schedule/Schedule.jsx"));
const Community = React.lazy(() => import("./pages/Community/Community.jsx"));
const QR = React.lazy(() => import("./pages/QR/QR.jsx"));
const BoothInfo = React.lazy(() => import("./pages/BoothInfo/BoothInfo.jsx"));
const Notice = React.lazy(() => import("./pages/Notice/Notice.jsx"));
const Start = React.lazy(() => import("./pages/Start/Start.jsx"));

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
      <Suspense fallback={<div>Loading...</div>}>
        <QR />
        <div className="content">
          <Routes>
            <Route path="/" exact={true} element={<Start />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/info" element={<Info />} />
            <Route path="/boothinfo" element={<BoothInfo />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/goodAndEvents" element={<GoodsAndEvents />} />
            <Route path="/community" element={<Community />} />
            <Route path="/lostItem" element={<LostItem />} />
            <Route path="/promotionalVideo" element={<PromotionalVideo />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </div>
      </Suspense>
    </>
  );
};

export default App;
