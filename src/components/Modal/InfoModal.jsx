import React, { useState, useEffect } from "react";
import { useTimetable } from "../../hooks/useTimetable.js";
import timetable from "../../datas/timetable.json";
import "./InfoModal.scss";

const InfoModal = ({ value }) => {
  const { pageIndex, setPageIndex, dateArr, imgArr, articleArr } = useTimetable(
    value,
    0,
    timetable
  );

  // useState로 높이 상태 관리
  const [height, setHeight] = useState("0vh");

  // useEffect로 컴포넌트 마운트 시 애니메이션 시작
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeight("90vh"); // 0.3초 후에 높이를 70vh로 변경
    }, 100); // 약간의 지연을 주어 마운트 애니메이션을 보여줌
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="modal">
      <div
        className="modalBody"
        onClick={(e) => e.stopPropagation()}
        style={{ height: height }}
      >
        <div className="modalTitle">{dateArr[pageIndex]}</div>
        <div className="modalImageSlider">
          <svg
            className={`shift ${pageIndex <= 0 ? "hidden" : ""}`}
            onClick={() => setPageIndex(pageIndex - 1)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
          </svg>
          <div
            className="sliderImage"
            style={{ backgroundImage: `url(${imgArr[pageIndex]})` }}
          ></div>

          <svg
            className={`shift ${pageIndex > 3 ? "hidden" : ""}`}
            onClick={() => setPageIndex(pageIndex + 1)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
          </svg>
        </div>
        <div className="modalArticle">
          {articleArr[pageIndex].map((item, index) => (
            <div className="schedule" key={index}>
              {pageIndex < 4 && (
                <div className="schedule_time">{`${item.time}`}</div>
              )}
              <div
                className={` ${pageIndex > 3 ? "schedule_body" : ""}`}
              >{`${item.event}`}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
