import React, { useEffect, useState } from "react";
import { Board } from "../../components/index.js";
import "./Boothinfo.scss";
import boothList from "../../datas/booth.json"

import { Header, Background } from "../../components/index.js";
const BoothInfo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(boothList);
  }, []);

  return (
    <div className="BoothInfo">
      <Background hasLogo={false} />
      <Header headcenter="부스 안내" />
      <div className="BoothInfo-container">
        <Board data={data} />
      </div>
    </div>
  );
};

export default BoothInfo;
