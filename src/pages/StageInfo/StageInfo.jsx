import React from "react";
import { Background, Header } from "../../components/index.js";
import ModalContent from "../../components/Modal/ModalContent/ModalContent.jsx";
import { useTimetable } from "../../hooks/useTimetable.js";
import timetable from "../../datas/timetable.json";
import "./StageInfo.scss";
import arrowLeft from "../../assets/icon/arrow-left.png";
import arrowRight from "../../assets/icon/arrow-right.png";
const StageInfo = ({ value }) => {
  const { pageIndex, setPageIndex, dateArr } = useTimetable(
    value,
    0,
    timetable
  );
  const currentPageContent = timetable.days[pageIndex]?.schedule || [];
  return (
    <div className="stageInfo">
      <Background />
      <Header headcenter="무대 안내" />
      <div className="stageInfo-container">
        <div className="stageInfo-container-wrapper">
          <div className="stageInfo-container-wrapper-modalHeder">
            <div className="stageInfo-container-wrapper-modalHeder-arrowLeft">
              {pageIndex <= 0 ? (
                <div style={{ width: "24px", height: "24px" }} />
              ) : (
                <img
                  src={arrowLeft}
                  alt="arrowLeft"
                  onClick={() => setPageIndex(pageIndex - 1)}
                />
              )}
            </div>
            <div className="stageInfo-container-wrapper-modalHeder-title">
              {dateArr[pageIndex]}
            </div>
            <div className="stageInfo-container-wrapper-modalHeder-arrowRight">
              {pageIndex > 2 ? (
                <div style={{ width: "24px", height: "24px" }} />
              ) : (
                <img
                  src={arrowRight}
                  alt="arrowRight"
                  onClick={() => setPageIndex(pageIndex + 1)}
                />
              )}
            </div>
          </div>
          <div className="stageInfo-container-wrapper-modalBody">
            {currentPageContent.map((item, index) => (
              <ModalContent
                key={index}
                title={item.title}
                location={item.location}
                contents={item.contents}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StageInfo;
