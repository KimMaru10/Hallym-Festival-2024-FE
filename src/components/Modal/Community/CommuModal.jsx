import React, { useEffect, useState } from "react";
import "./CommuModal.scss";
const CommuModal = () => {
  const [inputDate, setInputDate] = useState({
    password: "",
    context: "",
  });
  const [pwErrorMsg, setPwErrorMsg] = useState("");
  const [contextMsg, setContextMsg] = useState("");
  useEffect(() => {
    if (inputDate.password !== "") {
      let pw = Number(inputDate.password);
      isNaN(pw) ? setPwErrorMsg("숫자만 입력 가능합니다.") : setPwErrorMsg("");
    }
  }, [inputDate.password]);
  useEffect(() => {
    //욕설 리스트에서 가져옴...
    const forbiddenWordsRegex =
      /ㅅㅂ|ㅂㅅ|시발|병신|좆|ㅈ같|애미|노무현|이명박|섹스|sex|문제앙|새끼|가슴만|강간|개같은|개년|ㅂㅈ|따먹|부랄|자지|보지|유두|유방|창녀|창년|후장|fuck|bitch|penis|pennis|pussy/;
    if (forbiddenWordsRegex.test(inputDate.context)) {
      setContextMsg("욕설 및 부적절한 내용이 들어가 있습니다.");
    } else {
      setContextMsg(""); // 에러 메시지를 초기화합니다.
    }
  }, [inputDate.context]);
  return (
    <div className="modal">
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body-title">
          <div className="modal-body-title-item"></div>
          <div className="modal-body-title-item">글쓰기</div>
          <div className="modal-body-title-item closeBtn">닫기</div>
        </div>
        <div className="modal-body-article">
          <div className="modal-body-article-form">
            <div className="modal-body-article-form-in">
              <label>비밀번호를 입력</label>
              <input
                type="password"
                placeholder="지우고 수정할 때 사용할 비밀번호 4자리입니다."
                value={inputDate.password}
                onChange={(e) => {
                  setInputDate({ ...inputDate, password: e.target.value });
                  //유효성 검사 추가하기
                }}
              />
              <div className="errMessage">{pwErrorMsg}</div>
            </div>
            <div className="modal-body-article-form-in">
              <label>남기고 싶은 말을 자세히 적어주세요.</label>
              <input
                type="text"
                placeholder="144이하로 작성해 주세요"
                value={inputDate.context}
                onChange={(e) =>
                  setInputDate({ ...inputDate, context: e.target.value })
                }
              />
              <div className="errMessage">{contextMsg}</div>
            </div>
          </div>
          <div>
            해당 커뮤니티는 축제 관련 커뮤니티 입니다. 타인을 비방, 조롱, 분란
            조장, 운영 방해, 인신공격, 욕설, 비속어 등의 부적절한 내용은 법적
            조치가 진행될 수 있습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommuModal;
