import React from "react";
import { Background, Header } from "../../components/index.js";
import "./LineUp.scss";
const Lineup = () => {
  return (
    <div className="lineup">
      <Background />
      <Header headerCenter="축제 라인업" />
      <div className="lineup-class"></div>
    </div>
  );
};

export default Lineup;
