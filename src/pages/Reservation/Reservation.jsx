import React, { useEffect, useState } from "react";
import Background from "../../components/Layout/Background";
import ReservationWait from "../../components/Modal/ReservationWaitModal/ReservationWaitModal.jsx";
import moment from "moment";
import "./Reservation.scss"
import { Header } from "../../components/index.js";
import ReservationPriviteModal from "../../components/Modal/ReservationPriviteModal/ReservationPriviteModal.jsx";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const navigate = useNavigate();
  return (
    <div className="reservation">
      <Background />
      <Header />

      <header className="ReservationWaith2">주점예약</header>

      <div className="btn_wrapper">
        <button className="res_btn" onClick={()=>navigate("/reservationDetail")}>예약하기</button>
        <button className="res_btn" onClick={()=>{navigate("/reservationInfo");}}>예약확인</button>
      </div>


    </div>
  );
};

export default Reservation;
