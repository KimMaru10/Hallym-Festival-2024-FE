import { useState, useEffect } from "react";
import "./BingoInfo.scss";
import correctImage from "../../../assets/icon/hallym.png";
import wrongImage from "../../../assets/icon/hallymgray.png";

const BingoInfo = ({ visible, mode, onSubmit, onClose, bingoCount }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (mode) {
      if (bingoCount >= 2) {
        setImage(correctImage);
      } else {
        setImage(wrongImage);
      }
    }
  }, [mode, bingoCount]);

  if (!visible) return null; // visible prop이 false이면 모달을 숨김

  let title, text1, text2;

  if (mode) {
    title = "빙고 결과 안내";
    if (bingoCount >= 2) {
      text1 = "축하합니다 2 빙고 성공 🎉";
      text2 = "이 화면을 관리자에게 보여주세요";
    } else {
      text1 = "아쉽지만, 2개 이상의 빙고를 달성하지 못하셨습니다.";
      text2 = "";
    }
  } else {
    title = "빙고 이벤트 안내";
    text1 = `해당 이벤트는 CLC 희망터에 위치한 이벤트 부스에서 운영됩니다`;
    text2 = "대면으로 참가해주시길 바랍니다.";
  }

  return (
    <div className="bingoInfo">
      <div className="bingoInfo-modal">
        <div className="bingoInfo-modal-text">
          <h2>{title}</h2>
          {mode && <img src={image} alt="하리미" />}
          <p>{text1}</p>
          {text2 && <p>{text2}</p>}
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
