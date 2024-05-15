import React, { useEffect, useState } from "react";
import { Board } from "../../components/index.js";
import "./PlaygroundInfo.scss";
import boothList from "../../datas/booth.json";

import { Header, Background } from "../../components/index.js";
const PlaygroundInfo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(boothList);
  }, []);

  return (
    <div className="playgroundInfo">
      <Background hasLogo={false} />
      <Header headcenter="대운동장부스 안내" />
      <div className="playgroundInfo-container">
        <Board data={data} />
      </div>
    </div>
  );
};

export default PlaygroundInfo;
