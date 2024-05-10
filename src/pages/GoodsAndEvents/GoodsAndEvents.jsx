import React from "react";
import Background from "../../components/Layout/Background";
import "./GoodsAndEvents.scss";
import { Header } from "../../components/index.js";
const GoodsAndEvents = () => {
  return (
    <div className="goodsAndEvents">
      <Background title="굿즈 / 이벤트" hasLogo={true} />
      <Header headcenter="굿즈 / 이벤트" />
      <div className="goodsAndEvents-container">
        <div className="goodsAndEvents-container-wrapper">
          <div className="goodsAndEvents-container-wrapper-item">
            <p>총학생회 '런'</p>
          </div>
          <div className="goodsAndEvents-container-wrapper-item">
            <p>동아리연합회 '공성'</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodsAndEvents;
