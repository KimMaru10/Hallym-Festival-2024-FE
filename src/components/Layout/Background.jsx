import React from "react";
import "./Background.css";
import logo1 from "../../assets/logo1.webp";

const Background = ({ hasLogo, hasGidam, hasPub }) => {
  return (
    <div
      className={`${hasGidam ? "hasGidam" : ""} ${
        hasPub ? "hasPub" : ""
      } backgroundStyle`}
    >
      {hasLogo && (
        <div className="logo1">
          <img src={logo1} alt="logo1" />
        </div>
      )}
    </div>
  );
};

export default Background;
