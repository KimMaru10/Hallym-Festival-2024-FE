import React, { useState } from "react";
import { useTimetable } from "../../../hooks/useTimetable.js";
import timetable from "../../../datas/timetable.json";
import "./InfoModal.scss";
import ModalContent from "../ModalContent/ModalContent.jsx";
import arrowLeft from "../../../assets/icon/arrow-left.png";
import arrowRight from "../../../assets/icon/arrow-right.png";
import arrowLeftRed from "../../../assets/icon/arrow-left-gidam.png";
import arrowRightRed from "../../../assets/icon/arrow-right-gidam.png";
import gidamImage1 from "../../../assets/gidam-1.jpeg";
import gidamImage2 from "../../../assets/gidam-2.jpeg";
import gidamImage3 from "../../../assets/gidam-3.jpeg";

const InfoModal = ({ value }) => {
  const { pageIndex, setPageIndex, dateArr } = useTimetable(
    value,
    0,
    timetable
  );

  // pageIndex에 해당하는 content 추출
  const currentPageContent = timetable.days[pageIndex]?.schedule || [];

  // value 값에 따라 모달 내용을 판단하는 변수
  const isGidam = value;

  // 이미지 슬라이딩을 위한 상태
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const gidamImages = [gidamImage1, gidamImage2, gidamImage3];

  // 다음 이미지로 이동하는 함수
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === gidamImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // 이전 이미지로 이동하는 함수
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? gidamImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="modal">
      <div
        className={`modalBody ${isGidam ? "gidamStyle" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {isGidam ? (
          <div className="gidam">
            <div className="gidam_header">
              <p>기담</p>
            </div>
            <div className="gidam_body">
              <div className="gidam_body_imageList">
                <div className="arrow-left" onClick={prevImage}>
                  <img src={arrowLeftRed} alt="arrowLeft" />
                </div>
                <img
                  src={gidamImages[currentImageIndex]}
                  alt="기담"
                  className="images"
                />
                <div className="arrow-right" onClick={nextImage}>
                  <img src={arrowRightRed} alt="arrowRight" />
                </div>
              </div>
              <div className="gidam_body_contents">
                <p>
                  뜨거운 축제의 현장, 그 한편에서 서늘하고 오싹한 공포를 선보일
                  기담이 시작됩니다. 어두운 기초교육관에서 여러분을 놀라게 할
                  ‘기담'에서 기다리고 있겠습니다.
                </p>
                <p>“내 이름을 찾아줘"</p>
              </div>
            </div>
          </div>
        ) : (
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
        )}
        {/* value 값에 따라 다른 내용을 렌더링 */}
        {!isGidam &&
          currentPageContent.map((item, index) => (
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
