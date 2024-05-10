import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Start.scss";
import logo1 from "../../assets/logo1.png";

const Start = () => {
  const navigate = useNavigate();
  const [timerStarted, setTimerStarted] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true); // 클릭 이벤트 발생시 clicked 상태를 true로 변경
    setTimerStarted(true);
    console.log("클릭 발생");
    // 3초 뒤에 페이지 전환
    setTimeout(() => {
      navigate("/"); // 전환할 페이지 경로
    }, 2000);
  };

  return (
    <div
      className={`start ${clicked ? "clicked" : ""}`}
      onClick={!timerStarted ? handleClick : null}
    >
      <div className="start-background">
        <p className="infoMessage">화면의 아무곳이나 클릭해주세요</p>
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
    </div>
  );
};

export default Start;
