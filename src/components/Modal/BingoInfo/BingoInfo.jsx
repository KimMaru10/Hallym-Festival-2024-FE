import React from "react";
import "./BingoInfo.scss";

const BingoInfo = ({ visible, mode, onSubmit, onClose, bingoCount }) => {
  if (!visible) return null; // visible prop이 false이면 모달을 숨김

  let title, text1, text2;

  // mode가 true일 때
  if (mode) {
    title = "빙고 결과 안내";
    if (bingoCount >= 2) {
      text1 = "축하합니다! 2개 이상의 빙고를 달성하셨습니다!";
      text2 = "담장자에게 결과를 보여주세요";
    } else {
      text1 = "아쉽지만, 2개 이상의 빙고를 달성하지 못하셨습니다.";
    }
  } else {
    title = "빙고 이벤트 안내";
    text1 = "해당 이벤트는 총학생회 부스에서 운영됩니다.";
    text2 = "대면으로 참가해주시길 바랍니다.";
  }

  return (
    <div className="bingoInfo">
      <div className="bingoInfo-modal">
        <div className="bingoInfo-modal-text">
          <h2>{title}</h2>
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
        <div className="bingoInfo-modal-buttons">
          {mode ? (
            <div className="exitButton" onClick={onClose}>
              확인
            </div>
          ) : (
            <>
              <div className="cancelButton" onClick={onClose}>
                이전
              </div>
              <div className="startButton" onClick={onSubmit}>
                확인
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BingoInfo;
