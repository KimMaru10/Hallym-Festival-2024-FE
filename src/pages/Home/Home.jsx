import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import logo1 from "../../assets/logo1.svg";
const Home = () => {
  return (
    <div className="Home">
      <div className="Home-background">
        <div className="logo1">
          <img src={logo1} alt="logo1" />
        </div>
        <div className="data">
          <div className="title">
            <p>영</p>
            <p>화</p>
          </div>
          <p id="date">2024. 05. 21. - 05. 23.</p>
        </div>
      </div>
      <div className="Home-container">
        <div className="Home-container-wrapper">
          <Link to="/info" className="Home-container-wrapper-info">
            <p>안내</p>
          </Link>
          <Link
            to="/goodAndEvents"
            className="Home-container-wrapper-goodAndEvents"
          >
            <p>굿즈/이벤트</p>
          </Link>
        </div>
        <div className="Home-container-wrapper">
          <div className="Home-container-wrapper-left">
            <Link
              to="/schedule"
              className="Home-container-wrapper-left-schedule"
            >
              <p>축제 일정</p>
            </Link>
            <Link
              to="/community"
              className="Home-container-wrapper-left-community"
            >
              <p>커뮤니티</p>
            </Link>
          </div>
          <div className="Home-container-wrapper-right">
            <Link
              to="/reservation"
              className="Home-container-wrapper-right-reservation"
            >
              <p>주점 예약</p>
            </Link>
          </div>
        </div>
        <div className="Home-container-wrapper">
          <Link
            to="/promotionalVideo"
            className="Home-container-wrapper-promotionalVideo"
          >
            <p>홍보 영상</p>
          </Link>
          <Link to="/lostItem" className="Home-container-wrapper-lostItem">
            <p>분실물</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
