import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoModal from "../../components/Modal/InfoModal";
import { Background, Header } from "../../components/index.js";
import "./Info.scss";

const Info = () => {
  const navigate = useNavigate();

  const [boothModal, setBoothModal] = useState(false);
  const [isGidam, setIsGidam] = useState(false);

  const handleCloseModal = () => {
    if (boothModal) {
      setBoothModal(false);
    }
  };

  return (
    <div className="Info" onClick={handleCloseModal}>
      <Background hasLogo={true} title={"안내"} />
      <Header />
      <div className="Info-container">
        <div className="Info-container-infoWrapper">
          {!boothModal && (
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
                  setBoothModal(true);
                  setIsGidam(false);
                }}
              >
                무대 안내
              </div>
              <div
                className="Info-container-infoWrapper-infoBox"
                onClick={() => {
                  setBoothModal(true);
                  setIsGidam(true);
                }}
              >
                기담 안내
              </div>

              <div className="Info-container-infoWrapper-infoBox">공지사항</div>
            </>
          )}
          {boothModal && (
            <InfoModal value={isGidam} onClose={() => setBoothModal(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Info;
