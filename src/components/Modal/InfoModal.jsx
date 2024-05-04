import React, { forwardRef } from "react";

const InfoModal = forwardRef((props, ref) => {
  return (
    <div ref={ref} {...props}>
      <>
        <div className="modalWrapper">
          <h1>1일차</h1>
          <div className="modalImage"></div>
          <div className="modalArticle">
            0900~1200 물총싸움<br></br> 1200~1400 밥
          </div>
        </div>
      </>
    </div>
  );
});

// displayName 설정
InfoModal.displayName = "InfoModal";

export default InfoModal;
