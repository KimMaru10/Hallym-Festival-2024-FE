import React, { useState } from "react";
import "./Info.scss";
import InfoModal from "../../components/Modal/InfoModal";
const Info = () => {
  const [boothModal, setBoothModal] = useState(false);

  const handleCloseModal = () => {
    if (boothModal) {
      setBoothModal(false);
    }
  };

  return (
    <div className="Info" onClick={handleCloseModal}>
      <div className="info_wrapper">
        {!boothModal && (
          <>
            <div className="info_box" onClick={() => setBoothModal(true)}>
              부스 안내
            </div>
            <div className="info_box">무대 안내</div>
            <div className="info_box">기담 안내</div>
            <div className="info_box">공지사항</div>
          </>
        )}
        {boothModal && <InfoModal onClose={() => setBoothModal(false)} />}
      </div>
    </div>
  );
};

export default Info;
