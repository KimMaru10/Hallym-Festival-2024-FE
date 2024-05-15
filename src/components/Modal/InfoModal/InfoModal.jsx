import React, { useState } from "react";
import { useTimetable } from "../../../hooks/useTimetable.js";
import timetable from "../../../datas/timetable.json";
import "./InfoModal.scss";
import ModalContent from "../ModalContent/ModalContent.jsx";
import arrowLeft from "../../../assets/icon/arrow-left.png";
import arrowRight from "../../../assets/icon/arrow-right.png";
import arrowLeftRed from "../../../assets/icon/arrow-left-gidam.png";
import arrowRightRed from "../../../assets/icon/arrow-right-gidam.png";
import gidamImage1 from "../../../assets/gidam-1.png";
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
    <div className="InfoModal">
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
                <p>어둠 속에서 맞닥뜨리는 진정한 공포</p>
                <p>
                  적막한 복도를 따라 걸으면, 이 곳의 과거와 현재의 비밀들이 살아
                  숨쉰다.
                </p>
                <p>
                  교실은 시간의 잊혀진 흔적들로 가득 차 있다. 교탁 위에는 오랜
                  세월을 지나 비어버린 책과 노트, 그리고 어느 누가 잊고 간
                  물건들이 놓여져 있다. 잊혀진 교실 안에는 과거의 목소리가
                  여전히 울린다. 그 소리는 끊임없이 되풀이되며, 당신을
                  인도하려는 것 같다.
                </p>
                <p>
                  복도를 걸을 때마다, 어둠은 당신을 휘감는다. 어둠의 끝에서
                  당신이 찾게 될 것은, 이 곳의 진실과 그 안에 감춰진 비밀이다.
                </p>
                <p>
                  학교는 언제나 당신을 기다리고 있다. 그곳에서 당신은 시험할
                  것이다. 하지만 이 곳은 끝없는 미지와 위험으로 가득하다.
                </p>
                <p>당신은 이 학교를 떠날 수 있을까?</p>
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
