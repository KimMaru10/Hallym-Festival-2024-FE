import React, { useState } from "react";
import "./Info.scss";
import "./InfoModal.scss";

const Info = () => {
  const [boothModal, setBootModal] = useState(false);

  // 모달 백그라운드 및 Info 컴포넌트 클릭 시 모달 닫기
  const handleCloseModal = () => {
    if (boothModal) {
      setBootModal(false);
    }
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation(); // 이벤트 버블링 중지
  };

  return (
    <div className="Info" onClick={handleCloseModal}>
      <div className="info_wrapper">
        {boothModal && (
          <div
            className="modalBackground"
            onClick={handleModalContentClick} // 모달 백그라운드 클릭 시 이벤트 전파 중지
          >
            <div className="modalWrapper">
              <button
                onClick={() => {
                  setBootModal(false);
                }}
              >
                x
              </button>
              <h1>1일차</h1>
              <div className="modalImage"></div>
              <div className="modalArticle">
                0900~1200 물총싸움<br></br>1200~1400 밥
              </div>
            </div>
          </div>
        )}
        {!boothModal && (
          <>
            <div className="info_box" onClick={() => setBootModal(true)}>
              부스 안내
            </div>
            <div className="info_box">무대 안내</div>
            <div className="info_box">기담 안내</div>
            <div className="info_box">공지사항</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Info;
