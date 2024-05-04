// Modal.js
import React, { useState } from "react";
import "./InfoModal.scss";
import timetable from "../../datas/timetable.json";
const InfoModal = () => {
  const dateArr = timetable.days.map((day) => day.date);
  const imgArr = timetable.days.map((day) => day.photo_url);
  const articleArr = timetable.days.map((day) => day.schedule);
  console.log(articleArr);
  const [pageDate, setPageDate] = useState(0);

  return (
    <div className="modal">
      {pageDate < 4 && <div className="modalAbove"> 무대 타임 테이블</div>}
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        {/* <button onClick={onClose}>x</button> */}
        <div className="modalTitle">{dateArr[pageDate]}</div>
        <div className="modalImageSlider">
          <svg
            className={`shift ${pageDate <= 0 ? "hidden" : ""}`}
            onClick={() => {
              setPageDate(pageDate - 1);
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
          <div
            className="sliderImage"
            style={{ backgroundImage: `url(${imgArr[pageDate]})` }}
          ></div>
          <svg
            className={`shift ${pageDate > 3 ? "hidden" : ""}`}
            onClick={() => {
              setPageDate(pageDate + 1);
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </div>
        <ul className="modalArticle">
          {articleArr[pageDate].map((item, index) => (
            <li key={index}>{`${item.time}  ${item.event}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoModal;
