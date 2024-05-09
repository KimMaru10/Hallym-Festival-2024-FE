import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import logo1 from "../../assets/logo1.png";
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
        <div className="Home-container-wrapper1">
          <Link to="/info" className="Home-container-wrapper1-info">
            <p>안내</p>
          </Link>
          <Link
            to="/goodAndEvents"
            className="Home-container-wrapper1-goodAndEvents"
          >
            <p>굿즈/이벤트</p>
          </Link>
        </div>
        <div className="Home-container-wrapper2">
          <div className="Home-container-wrapper2-left">
            <Link
              to="/schedule"
              className="Home-container-wrapper2-left-schedule"
            >
              <p>축제 일정</p>
            </Link>
            <Link
              to="/community"
              className="Home-container-wrapper2-left-community"
            >
              <p>커뮤니티</p>
            </Link>
          </div>

          <Link
            to="/reservation"
            className="Home-container-wrapper2-reservation"
          >
            <p>주점 예약</p>
          </Link>
        </div>
        <div className="Home-container-wrapper3">
          <Link
            to="/promotionalVideo"
            className="Home-container-wrapper3-promotionalVideo"
          >
            <p>홍보 영상</p>
          </Link>
          <Link to="/lostItem" className="Home-container-wrapper3-lostItem">
            <p>분실물</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
