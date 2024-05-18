import React from "react";
import { Background, Header } from "../../components/index.js";
import "./LineUp.scss";
// import lineupImage from "../../assets/lineupImage.webp";
const Lineup = () => {
  return (
    <div className="lineup">
      <Background />
      <Header className="header_blur" />
      <div className="lineup-class">
        <div className="lineup-class-lineup">
          <img
            src="https://sunwoo-img-container.s3.ap-northeast-2.amazonaws.com/front/d4fe424f-214a-44df-b018-7fff0c7874a0_lineuplist.svg"
            alt="라인업 이미지"
          />
        </div>
      </div>
    </div>
  );
};

export default Lineup;
