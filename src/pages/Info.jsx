import React from "react";
import "../styles/Info.scss";
import Background from "../components/Layout/Background";
const Info = () => {
  return (
    <div className="Info">
      <Background />
      <div className="info_wrapper">
        <div className="info_box">부스 안내</div>
        <div className="info_box">무대 안내</div>
        <div className="info_box">기담 안내</div>
        <div className="info_box">공지사항</div>
      </div>
    </div>
  );
};

export default Info;
