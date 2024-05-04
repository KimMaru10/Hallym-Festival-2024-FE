import React from "react";
import "./Info.scss";
import Background from "../../components/Layout/Background";
import { useNavigate } from "react-router-dom";
const Info = () => {

  const navigate = useNavigate();

  return (
    <div className="Info">
      <Background/>
      <div className="info_wrapper">
        <div className="info_box" onClick={()=>navigate("/boothinfo")}>부스 안내</div>
        <div className="info_box">무대 안내</div>
        <div className="info_box">기담 안내</div>
        <div className="info_box">공지사항</div>
      </div>
    </div>
  );
};

export default Info;
