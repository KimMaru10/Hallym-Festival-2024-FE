import React, { useState, useEffect } from "react";
import Background from "../../components/Layout/Background";
import "./Goods.scss";
import { Header } from "../../components/index.js";
import { Board } from "../../components/index.js";
import goods from "../../datas/goods.json";
const Goods = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(goods);
  }, []);

  return (
    <div className="goods">
      <Background />
      <Header headcenter="굿즈" />
      <div className="goods-container">
        <div className="goods-container-wrapper">
          <Board data={data} />
        </div>
      </div>
    </div>
  );
};

export default Goods;
