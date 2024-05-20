import React, { useEffect, useState } from "react";
import "./CommuModal.scss";
import setNowDate from "../../../apis/setNowDate";
import { postCommunity } from "../../../apis/axios";
const adjectives = [
  "춤추는",
  "노래하는",
  "잘생긴",
  "랩하는",
  "귀여운",
  "명랑한",
  "유쾌한",
  "꿈꾸는",
  "즐거운",
  "행복한",
  "활발한",
  "신나는",
  "용감한",
  "지적인",
  "친절한",
  "화려한",
  "섬세한",
  "매서운",
  "열정적인",
  "학식먹는",
  "달리는",
  "공부하는",
  "낙서하는",
  "알바하는",
  "요리하는",
  "책읽는",
  "백덤블링하는",
  "버스타는",
  "굴러가는",
  "사탕먹는",
  "과제하는",
  "영화보는",
  "화장하는",
  "밤샌",
  "농구하는",
  "축구하는",
];
const characters = [
  "아이언맨",
  "헐크",
  "스파이더맨",
  "배트맨",
  "슈퍼맨",
  "원더우먼",
  "토르",
  "캡틴 아메리카",
  "블랙 위도우",
  "닥터 스트레인지",
  "블랙 팬서",
  "고애신",
  "유진 초이",
  "이동석",
  "정은희",
  "비전",
  "강백호",
  "송태섭",
  "조로",
  "드랙스",
  "리정혁",
  "윤세리",
  "루피",
  "나루토",
  "로키",
  "타노스",
  "강남순",
  "지은탁",
  "써니",
  "김신",
  "아리에티",
  "문동은",
  "그린 고블린",
  "박연진",
  "전재준",
  "진도준",
  "진양철",
  "채치수",
  "빈센조",
  "도봉순",
  "사이클롭스",
  "미도리야",
  "탄지로",
  "한니발 렉터",
  "에렌",
  "맥스 로카탄스키",
  "릭 데커드",
  "모피어스",
  "네오",
  "트리니티",
  "마석도",
  "장이수",
  "장첸",
  "초롱이",
  "마형사",
  "테드 창",
  "엘사",
  "올라프",
  "초파",
  "에렌예거",
  "토니스타크",
  "아쿠아맨",
  "호크아이",
  "조커",
  "피터 파커",
  "제임스 본드",
  "터미네이터",
  "움파룸파",
  "울버린",
  "전우치",
  "윌리웡카",
  "오펜하이머",
  "케빈",
  "강해상",
  "이화림",
];

function getRandomAdjective() {
  const randomIndex = Math.floor(Math.random() * adjectives.length);
  return adjectives[randomIndex];
}
function getRandomCharacters() {
  const randomIndex = Math.floor(Math.random() * adjectives.length);
  return characters[randomIndex];
}
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
      if (isNaN(Number(inputData.password))) {
        setPwErrorMsg("숫자 4자리만 입력 가능합니다.");
      } else {
        inputData.password.length === 4
          ? setPwErrorMsg("")
          : setPwErrorMsg("4자리 숫자를 입력해주세요");
      }
    }
  }, [inputData.password]);
  useEffect(() => {
    //욕설 리스트에서 가져옴...
    const forbiddenWordsRegex =
      /ㅅㅂ|시@발|ㅂㅅ|씨발|시발|병신|좆|ㅈ같|애미|노무현|이명박|섹스|sex|문제앙|새끼|가슴만|강간|개같은|개년|ㅂㅈ|따먹|부랄|자지|보지|유두|유방|창녀|창년|후장|fuck|bitch|penis|pennis|pussy/;
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
      const frontNickName = getRandomAdjective();
      const backNickName = getRandomCharacters();

      const nickname = frontNickName + " " + backNickName;
      const result = await postCommunity({ content, date, password, nickname });

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
              <label>비밀번호를 입력하세요</label>
              <input
                type="password"
                placeholder="지우고 수정할 때 사용할 4자리입니다."
                value={inputData.password}
                onChange={(e) =>
                  setInputData({ ...inputData, password: e.target.value })
                }
              />
              <div className="errMessage">{pwErrorMsg}</div>
            </div>
            <div className="modal-body-article-form-in">
              <label>남기고 싶은 말을 자유롭게 적어주세요.</label>
              <input
                className="under"
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
            조롱, 분란 조장, 운영 방해, 인신공격,<br></br> 욕설, 비속어 등의
            부적절한 내용은 법적 조치가 진행될 수 있습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommuModal;
