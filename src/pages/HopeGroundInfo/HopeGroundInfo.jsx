import React, { useState, useEffect } from "react";
import "./HopeGroundInfo.scss";
import { Background, Header } from "../../components/index.js";
import arrowLeft from "../../assets/icon/arrow-left.png";
import arrowRight from "../../assets/icon/arrow-right.png";
import MovieIcon from "../../assets/icon/movie.png";
import PersonIcon from "../../assets/icon/person.png";
import TimeIcon from "../../assets/icon/time.png";
import HopeList from "../../datas/hopeground.json";
import ModalBox from "../../components/Modal/ModalBox/ModalBox.jsx";
const HopeGroundInfo = () => {
  const [data, setData] = useState({});
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  useEffect(() => {
    setData(HopeList[currentItemIndex]);
  }, [currentItemIndex]);

  const nextItem = () => {
    setCurrentItemIndex((prevIndex) =>
      prevIndex === HopeList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevItem = () => {
    setCurrentItemIndex((prevIndex) =>
      prevIndex === 0 ? HopeList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="hopeGroundInfo">
      <Background />
      <Header headcenter={"희망터 부스"} />
      <div className="hopeGroundInfo-container">
        <div className="hopeGroundInfo-container-wrapper">
          <div className="hopeGroundInfo-container-wrapper-images">
            <img src={data.image} alt="기담" className="images" />
          </div>
          <div className="hopeGroundInfo-container-wrapper-modal">
            <div className="hopeGroundInfo-container-wrapper-modal-header">
              <div className="arrow-left" onClick={prevItem}>
                <img src={arrowLeft} alt="arrowLeft" />
              </div>
              <p>{data.boothName}</p>
              <div className="arrow-right" onClick={nextItem}>
                <img src={arrowRight} alt="arrowRight" />
              </div>
            </div>
            <div className="hopeGroundInfo-container-wrapper-modal-subtitle">
              <p id="normalText">{data.subtitle}</p>
            </div>
            <div className="hopeGroundInfo-container-wrapper-modal-body">
              <div className="hopeGroundInfo-container-wrapper-modal-body-content">
                {data.contents ? (
                  data.contents.map((content, index) => (
                    <div className="contents" key={index}>
                      <p id="boldText" style={{ marginBottom: "1%" }}>
                        {content.title}
                      </p>
                      <p id="normalText" style={{ marginBottom: "5%" }}>
                        {content.content}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>{data.content}</p>
                )}
                <div>
                  {data.caution ? <p id="cationText">{data.caution}</p> : <></>}
                </div>
              </div>

              <div className="hopeGroundInfo-container-wrapper-modal-body-date">
                <img src={MovieIcon} alt="무비 아이콘" />
                <p id="boldText">DATE</p>
                <p id="normalText">{data.date}</p>
              </div>
              <div className="hopeGroundInfo-container-wrapper-modal-body-time">
                <div className="hopeGroundInfo-container-wrapper-modal-body-time-item1">
                  <img src={TimeIcon} alt="타임 아이콘" />
                  <p id="boldText">TIME</p>
                </div>
                <div className="hopeGroundInfo-container-wrapper-modal-body-time-item2">
                  {data.timebox &&
                    data.timebox.map((time, index) => (
                      <ModalBox
                        key={index}
                        startTime={time.startTime}
                        lastTime={time.lastTime}
                        description={time.description}
                      />
                    ))}
                </div>
              </div>
              <div className="hopeGroundInfo-container-wrapper-modal-body-audienceRating">
                <img src={PersonIcon} alt="사람 아이콘" />
                <p id="boldText">관람등급</p>
                <p id="normalText">{data.audienceRating}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HopeGroundInfo;
