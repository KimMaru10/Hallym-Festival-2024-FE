import React from "react";
import "./QR.scss";
import QRImage from "../../assets/QR.png";
const QR = () => {
  return (
    <div className="qr-page">
      <img src={QRImage} alt="QR" />
      <p>모바일로 접속 해주세요</p>
    </div>
  );
};

export default QR;
