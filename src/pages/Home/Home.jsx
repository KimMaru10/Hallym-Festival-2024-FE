import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import { Background } from "../../components/index.js";
const Home = () => {
  //임시 커밋테스트
  return (
    <div className="Home">
      <Background hasLogo={true} />
      <div className="Home-container">
        <div className="Home-container-wrapper">
          <div className="Home-container-wrapper-item1">
            <Link to="/info" className="Home-container-wrapper-item1-info">
              <p>안내</p>
            </Link>
            <Link
              to="/goodsAndEvents"
              className="Home-container-wrapper-item1-goodAndEvents"
            >
              <p>굿즈/이벤트</p>
            </Link>
          </div>
          <div className="Home-container-wrapper-item2">
            <div className="Home-container-wrapper-item2-left">
              <Link
                to="/lineup"
                className="Home-container-wrapper-item2-left-lineup"
              >
                <p>라인업</p>
              </Link>
              <Link
                to="/community"
                className="Home-container-wrapper-item2-left-community"
              >
                <p>커뮤니티</p>
              </Link>
            </div>

            <Link
              to="/reservation"
              className="Home-container-wrapper-item2-reservation"
            >
              <p>주점 예약</p>
            </Link>
          </div>
          <div className="Home-container-wrapper-item3">
            <Link
              to="/promotionalVideo"
              className="Home-container-wrapper-item3-promotionalVideo"
            >
              <p>홍보 영상</p>
            </Link>
            <Link
              to="/lostItem"
              className="Home-container-wrapper-item3-lostItem"
            >
              <p>분실물</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
