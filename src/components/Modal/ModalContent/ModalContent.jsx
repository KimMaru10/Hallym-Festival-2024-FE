import React from "react";
import movie from "../../../assets/icon/movie.png";
import "./ModalContent.scss";
import ModalBox from "../ModalBox/ModalBox";

function ModalContent({ title, location, contents }) {
  return (
    <div className="modalContants">
      <div className="modalContants-item1">
        <div className="modalContants-item1-icon">
          <img src={movie} alt="movie.icon" />
        </div>
        <div className="modalContants-item1-title">
          <p>{title}</p>
        </div>
        <div className="modalContants-item1-location">
          <p>{location}</p>
        </div>
      </div>
      <div className="modalContants-item2">
        {contents.map((content, index) => (
          <ModalBox
            key={index}
            startTime={content.startTime}
            lastTime={content.lastTime}
            description={content.description}
            title={title}
          />
        ))}
      </div>
    </div>
  );
}

export default ModalContent;
