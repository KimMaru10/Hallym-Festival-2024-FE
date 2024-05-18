import React from "react";
import { useNavigate } from "react-router-dom";
import { Background, Header } from "../../components/index.js";
import "./Info.scss";

const Info = () => {
  const navigate = useNavigate();

  return (
    <div className="Info">
      <Background hasLogo={true} />
      <Header headcenter="안&nbsp;&nbsp;&nbsp;내" />
      <div className="Info-container ">
        <div className="Info-container-infoWrapper">
          <div
            className="Info-container-infoWrapper-infoBox"
            onClick={() => navigate("/boothinfo")}
          >
            부스 안내
          </div>
          <div
            className="Info-container-infoWrapper-infoBox"
            onClick={() => {
              navigate("/stageInfo");
            }}
          >
            무대 안내
          </div>
          <div
            className="Info-container-infoWrapper-infoBox"
            onClick={() => {
              navigate("/gidam");
            }}
          >
            기담 안내
          </div>

          <div
            className="Info-container-infoWrapper-infoBox"
            onClick={() => navigate("/pubInfo")}
          >
            주점 안내
          </div>
          <div
            className="Info-container-infoWrapper-infoBox"
            onClick={() => navigate("/notice")}
          >
            공지사항
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
