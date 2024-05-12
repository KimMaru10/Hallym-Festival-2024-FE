import React from "react";
import "./ModalBox.scss";
function ModalBox({ startTime, lastTime, description }) {
  return (
    <div className="box">
      <div className="box-startTime">
        <p>{startTime}</p>
      </div>
      <div className="box-lastTime">
        <p>{lastTime}</p>
      </div>
      <div className="box-description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ModalBox;
