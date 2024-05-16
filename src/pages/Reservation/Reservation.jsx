import React from "react";
import Background from "../../components/Layout/Background";
import "./Reservation.scss";
import { Header } from "../../components/index.js";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const navigate = useNavigate();

  return (
    <div className="reservation">
      <Background hasLogo={true} />
      <Header headcenter={"주점 예약"} />
      <div className="reservation-container">
        <div className="btn_wrapper">
          <button
            className="res_btn"
            onClick={() => navigate("/reservationdetail")}
          >
            예약하기
          </button>
          <button
            className="res_btn"
            onClick={() => {
              navigate("/reservationinfo");
            }}
          >
            예약확인
          </button>
        </div>
      </div>
    </div>
  );
};
export default Reservation;
