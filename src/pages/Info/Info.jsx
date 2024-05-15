import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Background, Header, InfoModal } from "../../components/index.js";
import "./Info.scss";

const Info = () => {
  const navigate = useNavigate();
  const [isGidam, setIsGidam] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달이 열려 있는지 여부를 나타내는 상태
  const touchStartRef = useRef(null);

  const handleCloseModal = () => {
    if (isModalOpen) {
      setIsGidam(false);
      setIsModalOpen(false);
    }
  };

  const handleTouchStart = (event) => {
    touchStartRef.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event) => {
    if (touchStartRef.current === null) return;
    const touchEnd = event.changedTouches[0].clientY;
    const deltaY = touchEnd - touchStartRef.current;
    touchStartRef.current = null;

    // 스와이프 거리가 50px 이상이면 모달 닫기
    if (Math.abs(deltaY) > 50 && isModalOpen) {
      setIsModalOpen(false);
      setIsGidam(false);
    }
  };

  return (
    <div
      className="Info"
      onClick={handleCloseModal}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Background hasLogo={true} hasGidam={isGidam} isModalOpen={isModalOpen} />
      <Header headcenter="안&nbsp;&nbsp;&nbsp;내" hasModal={isModalOpen} />
      <div className="Info-container ">
        <div className="Info-container-infoWrapper">
          {!isModalOpen && (
            <>
              <div
                className="Info-container-infoWrapper-infoBox"
                onClick={() => navigate("/boothinfo")}
              >
                부스 안내
              </div>
              <div
                className="Info-container-infoWrapper-infoBox"
                onClick={() => {
                  setIsGidam(false);
                  setIsModalOpen(true); // 모달이 열려 있는 상태로 설정
                }}
              >
                무대 안내
              </div>
              <div
                className="Info-container-infoWrapper-infoBox"
                onClick={() => {
                  setIsGidam(true);
                  setIsModalOpen(true);
                }}
              >
                기담 안내
              </div>

              <div
                className="Info-container-infoWrapper-infoBox"
                onClick={() => navigate("/pubInfo")}
              >
                주점안내
              </div>
              <div
                className="Info-container-infoWrapper-infoBox"
                onClick={() => navigate("/notice")}
              >
                공지사항
              </div>
            </>
          )}
          {isModalOpen && (
            <InfoModal
              value={isGidam}
              onClose={() => {
                setIsModalOpen(false);
                setIsGidam(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Info;
