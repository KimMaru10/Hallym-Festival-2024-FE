import React from "react";
import { Background, Header } from "../../components/index.js";
import "./LineUp.scss";
import lineupImage from "../../assets/lineup.webp";
const Lineup = () => {
  return (
    <div className="lineup">
      <Background />
      <Header className="header_blur" />
      <div className="lineup-class">
        <div className="lineup-class-lineup">
          <div className="lineup-class-lineup-wrapper">
            <img src={lineupImage} alt="라인업 이미지" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lineup;
