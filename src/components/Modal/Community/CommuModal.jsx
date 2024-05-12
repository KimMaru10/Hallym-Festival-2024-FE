import React, { useEffect, useState } from "react";
import "./CommuModal.scss";
import setNowDate from "../../../apis/setNowDate";
import { postCommunity } from "../../../apis/axios";

const CommuModal = ({ onClose }) => {
  //등록 누르면 그 시점의 시간 보내는것도 구현
  //삭제하기 구현
  //등록하기 구현
  const [inputData, setInputData] = useState({
    password: "",
    context: "",
  });
  const [pwErrorMsg, setPwErrorMsg] = useState("");
  const [contextMsg, setContextMsg] = useState("");
  const [contextLen, setContextLen] = useState(0);
  useEffect(() => {
    if (inputData.password !== "") {
      let pw = Number(inputData.password);
      isNaN(pw) ? setPwErrorMsg("숫자만 입력 가능합니다.") : setPwErrorMsg("");
    }
  }, [inputData.password]);
  useEffect(() => {
    //욕설 리스트에서 가져옴...
    const forbiddenWordsRegex =
      /ㅅㅂ|ㅂㅅ|시발|병신|좆|ㅈ같|애미|노무현|이명박|섹스|sex|문제앙|새끼|가슴만|강간|개같은|개년|ㅂㅈ|따먹|부랄|자지|보지|유두|유방|창녀|창년|후장|fuck|bitch|penis|pennis|pussy/;
    if (forbiddenWordsRegex.test(inputData.context)) {
      setContextMsg("욕설 및 부적절한 내용이 들어가 있습니다.");
    } else {
      setContextMsg(""); // 에러 메시지를 초기화합니다.
    }
  }, [inputData.context]);

  const onInputHandler = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= 144) {
      setInputData({ ...inputData, context: inputText });
      setContextLen(inputText.length);
    }
  };

  /**유효성 검사 통과 */
  const showPostBtn = () => {
    if (
      (inputData.context != "") &
      (inputData.password != "") &
      (pwErrorMsg == "") &
      (contextMsg == "") &
      (contextLen < 145)
    ) {
      console.log("유효성 검사 통과");
      return true;
    } else {
      console.log("유효성 검사 통과 못함!");
      return false;
    }
  };
  /**커뮤니티 post요청 함수 */
  const clickPost = async () => {
    try {
      const postTime = setNowDate();
      console.log(postTime);
      const content = inputData.context;
      const date = postTime;
      const password = inputData.password;

      const result = await postCommunity({ content, date, password });
      // inputData.context,
      //   postTime,
      //   inputData.password
      console.log(result);
      if (result) onClose();
    } catch (error) {
      console.log(".");
    }
  };
  return (
    <div className="modal">
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body-title">
          <div className="modal-body-title-item"></div>
          <div className="modal-body-title-item mid">글쓰기</div>

          <div
            className="modal-body-title-item closeBtn"
            onClick={() => {
              if (showPostBtn()) {
                clickPost();
              }
            }}
          >
            등록
          </div>
        </div>
        <div className="modal-body-article">
          <div className="modal-body-article-form">
            <div className="modal-body-article-form-in">
              <label>비밀번호를 입력</label>
              <input
                type="password"
                placeholder="지우고 수정할 때 사용할 비밀번호 4자리입니다."
                value={inputData.password}
                onChange={(e) =>
                  setInputData({ ...inputData, password: e.target.value })
                }
              />
              <div className="errMessage">{pwErrorMsg}</div>
            </div>
            <div className="modal-body-article-form-in">
              <label>남기고 싶은 말을 자세히 적어주세요.</label>
              <textarea
                type="text"
                maxLength="144"
                placeholder="144이하로 작성해 주세요"
                value={inputData.context}
                onChange={onInputHandler}
              />
              <div className="underTextarea">
                <div className="errMessage">{contextMsg}</div>
                <div className="showContentLength">{contextLen}/144자</div>
              </div>
            </div>
          </div>
          <div className="modal-body-article-bottom">
            해당 커뮤니티는 축제 관련 커뮤니티 입니다.<br></br> 타인을 비방,
            조롱, 분란 조장, 운영 방해, 인신공격, 욕설, 비속어 등의 부적절한
            내용은 법적 조치가 진행될 수 있습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommuModal;
