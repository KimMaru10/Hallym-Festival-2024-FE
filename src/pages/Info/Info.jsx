import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoModal from "../../components/Modal/InfoModal";
import Background from "../../components/Layout/Background";
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
      <Background hasLogo={true} />
      <div className="Info-infoWrapper">
        <div className="Info-infoWrapper-title">
          <p>안</p>
          <p>내</p>
        </div>
        {!boothModal && (
          <>
            <div
              className="Info-infoWrapper-infoBox"
              onClick={() => navigate("/boothinfo")}
            >
              부스 안내
            </div>
            <div
              className="Info-infoWrapper-infoBox"
              onClick={() => {
                setBoothModal(true);
                setIsGidam(false);
              }}
            >
              무대 안내
            </div>
            <div
              className="Info-infoWrapper-infoBox"
              onClick={() => {
                setBoothModal(true);
                setIsGidam(true);
              }}
            >
              기담 안내
            </div>

            <div className="Info-infoWrapper-infoBox">공지사항</div>
          </>
        )}
        {boothModal && (
          <InfoModal value={isGidam} onClose={() => setBoothModal(false)} />
        )}
      </div>
    </div>
  );
};

export default Info;
