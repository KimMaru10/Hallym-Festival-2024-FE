import React from "react";
import "./Home.scss";
import "../../styles/global.css";
import Background from "../../components/Layout/Background";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Home">
      <Background />
      <div className="Home-container">
        <Link to="/info">안내</Link>
        <Link to="/goodAndEvents">굿즈/이벤트</Link>
        <Link to="/community">커뮤니티</Link>
        <Link to="/schedule">축제 일정</Link>
        <Link to="/reservation">주점 예약</Link>
        <Link to="/promotionalVideo">홍보 영상</Link>
        <Link to="/lostItem">분실물</Link>
      </div>
    </div>
  );
};
export default Home;
