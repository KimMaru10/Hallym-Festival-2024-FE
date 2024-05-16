import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Background, Header, InfoModal } from "../../components/index.js";
import "./Info.scss";

const Info = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달이 열려 있는지 여부를 나타내는 상태
  const touchStartRef = useRef(null);

  const handleCloseModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="Info" onClick={handleCloseModal}>
      <Background hasLogo={true} isModalOpen={isModalOpen} />
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
                  setIsModalOpen(true); // 모달이 열려 있는 상태로 설정
                }}
              >
                무대 안내
              </div>
              <div
                className="Info-container-infoWrapper-infoBox"
                onClick={() => {
                  navigate("/gidam");
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
              onClose={() => {
                setIsModalOpen(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Info;
