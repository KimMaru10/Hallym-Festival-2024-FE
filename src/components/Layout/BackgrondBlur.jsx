import React from "react";
import "./BackgroundBlur.css";
import logo1 from "../../assets/logo1.webp";

const BackgroundBlur = ({ hasLogo, hasGidam }) => {
  return (
    <div className={hasGidam ? "hasGidam" : "backgroundStyle"}>
      {hasLogo && (
        <div className="logo1">
          <img src={logo1} alt="logo1" />
        </div>
      )}
    </div>
  );
};

export default BackgroundBlur;
