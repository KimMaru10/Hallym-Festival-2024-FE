import React, { useEffect, useState } from "react";
import Background from "../../components/Layout/Background";
import ReservationWait from "../../components/Modal/ReservationWaitModal/ReservationWaitModal.jsx";
import moment from "moment";
import "./Reservation.scss";
import { Header } from "../../components/index.js";
import ReservationPriviteModal from "../../components/Modal/ReservationPriviteModal/ReservationPriviteModal.jsx";

const Reservation = () => {
  const [open, setOpen] = useState(false);
  const [nowTime, setNowTime] = useState(moment().format("HH:mm:ss"));
  useEffect(() => {
    const timeFormated = moment(nowTime, "HH:mm:ss");
    if (
      timeFormated.isAfter(moment("18:00:00", "HH:mm:ss")) &&
      timeFormated.isBefore(moment("23:25:00", "HH:mm:ss"))
    ) {
      console.log("시간");
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [nowTime]);
  return (
    <div className="reservation">
      <Background />
      <Header />
      <button onClick={() => setOpen(true)}>폼 테스트</button>
      <header className="ReservationWaith2">주점예약</header>
      {open ? (
        <ReservationPriviteModal />
      ) : (
        <ReservationWait nowTime={nowTime} />
      )}
    </div>
  );
};
export default Reservation;
