import React from "react";
import { useTimetable } from "../../../hooks/useTimetable.js";
import timetable from "../../../datas/timetable.json";
import "./InfoModal.scss";
import ModalContent from "../ModalContent/ModalContent.jsx";
import arrowLeft from "../../../assets/icon/arrow-left.png";
import arrowRight from "../../../assets/icon/arrow-right.png";

const InfoModal = ({ value }) => {
  const { pageIndex, setPageIndex, dateArr } = useTimetable(
    value,
    0,
    timetable
  );

  // pageIndex에 해당하는 content 추출
  const currentPageContent = timetable.days[pageIndex]?.schedule || [];

  return (
    <div className="InfoModal">
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <div className="modalHeader_arrow-left">
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
          <div className="modalHeader_title">{dateArr[pageIndex]}</div>
          <div className="modalHeader_arrow-right">
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
        {/* value 값에 따라 다른 내용을 렌더링 */}
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
  );
};

export default InfoModal;
