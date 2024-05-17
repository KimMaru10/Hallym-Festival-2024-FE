import React from "react";
import "./ModalBox.scss";
import { useNavigate } from "react-router-dom";

const ModalBox = ({ startTime, lastTime, description, title }) => {
  const navigate = useNavigate();

  const handleLineup = () => {
    navigate("/lineup");
  };

  return (
    <div
      className="box"
      onClick={title === "연예인 공연" ? handleLineup : undefined}
    >
      <div className="box-startTime">
        <p>{startTime}</p>
      </div>
      <div className="box-lastTime">
        <p>{lastTime}</p>
      </div>
      <div className="box-description">
        {description.split("\n").map((line, index) => {
          return (
            <span key={index}>
              {line}
              <br />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ModalBox;
