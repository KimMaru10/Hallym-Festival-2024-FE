import React from "react";
import { Background, Header } from "../../components/index.js";
import "./LineUp.scss";
import lineupImage from "../../assets/lineupImage.webp";
const Lineup = () => {
  return (
    <div className="lineup">
      <Background />
      <Header headerCenter="축제 라인업" />
      <div className="lineup-class">
        <div className="lineup-class-lineup">
          <img src={lineupImage} alt="라인업 이미지" />
        </div>
      </div>
    </div>
  );
};

export default Lineup;
