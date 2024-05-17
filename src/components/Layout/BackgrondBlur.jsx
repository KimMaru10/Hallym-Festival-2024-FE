import React from "react";
import "./BackgroundBlur.css";
import logo1 from "../../assets/logo1.webp";

const BackgroundBlur = ({ hasLogo, hasGidam }) => {
  return (
    <div className={hasGidam ? "hasGidam2" : "backgroundStyle2"}>
      {hasLogo && (
        <div className="logo11">
          <img src={logo1} alt="logo11" />
        </div>
      )}
    </div>
  );
};

export default BackgroundBlur;
