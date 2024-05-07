import React from "react";
import { useTimetable } from "../../hooks/useTimetable.js";
import timetable from "../../datas/timetable.json";
import "./InfoModal.scss";

const InfoModal = ({ value }) => {
  const { pageIndex, setPageIndex, dateArr, imgArr, articleArr } = useTimetable(
    value, //기담 클릭 여부
    0,
    timetable
  );
  return (
    <div className="modal">
      {pageIndex < 4 && <div className="modalAbove"> 무대 타임 테이블</div>}
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <div className="modalTitle">{dateArr[pageIndex]}</div>
        <div className="modalImageSlider">
          <svg
            className={`shift ${pageIndex <= 0 ? "hidden" : ""}`}
            onClick={() => {
              setPageIndex(pageIndex - 1);
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
          <div
            className="sliderImage"
            style={{ backgroundImage: `url(${imgArr[pageIndex]})` }}
          ></div>
          <svg
            className={`shift ${pageIndex > 3 ? "hidden" : ""}`}
            onClick={() => {
              setPageIndex(pageIndex + 1);
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </div>
        <ul className="modalArticle">
          {articleArr[pageIndex].map((item, index) => (
            <li key={index}>{`${item.time}  ${item.event}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoModal;
