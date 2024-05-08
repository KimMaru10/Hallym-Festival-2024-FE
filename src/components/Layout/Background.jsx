import React from "react";
import "./Background.css";
import logo1 from "../../assets/logo1.png";

const Background = () => {
  return (
    <div className="backgroundStyle">
      <div className="logo1">
        <img src={logo1} alt="logo1" />
      </div>
    </div>
  );
};

export default Background;
