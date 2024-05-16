import React, { useState, useEffect } from "react";
import Background from "../../components/Layout/Background";
import "./Goods.scss";
import { Header } from "../../components/index.js";
import goods from "../../datas/goods.json";

const Goods = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setData(goods);
    if (goods.length > 0) {
      setLoad(true);
    }
  }, []);

  return (
    <div className="goods">
      <Background />
      <Header headcenter="굿즈" />
      <div className="goods-container">
        <div className="goods-container-message">
          <p>
            * CLC 희망터 "이벤트 굿즈샵" 부스에서 구매 및 이벤트 참여
            가능합니다.
          </p>
        </div>
        <div className="goods-container-wrapper">
          <div className="goods-container-wrapper-board">
            <div className="goods-container-wrapper-board-list">
              {load ? (
                data.map((it, index) => (
                  <div className="item" key={index}>
                    <img src={it.url} alt={it.title} />
                    <div className="text">
                      <p>{it.title}</p>
                    </div>
                  </div>
                ))
              ) : (
                <h2>굿즈 다 받아야지~</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goods;
