import React, { useEffect, useState } from "react";
import { Board } from "../../components/index.js";
import "./PlaygroundInfo.scss";
import boothList from "../../datas/booth.json";
import booth from "../../assets/booth.png";
import { Header, Background } from "../../components/index.js";
const PlaygroundInfo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(boothList);
  }, []);

  return (
    <div className="playgroundInfo">
      <Background hasLogo={false} />
      <Header headcenter="부스 안내" />
      <div className="playgroundInfo-container">
        <div className="playgroundInfo-container-wrapper">
          <img src={booth} alt="운동장 부스 배치도" />
          <Board data={data} />
        </div>
      </div>
    </div>
  );
};

export default PlaygroundInfo;
