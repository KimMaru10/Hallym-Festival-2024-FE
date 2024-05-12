import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./CommuBoard.scss";
import CommuDelete from "../Modal/Community/CommuDelete.jsx";
//라펙토링 시 함수 api분리 및 커스텀 훅 분리하여 선언적 상태 만들기

/**서버로 부터 들어와서 변수로 저장한 시간의 데이터 타입과 로컬시간 변수 타입 확인 하기*/
function parseDateTime(dateTimeStr) {
  const [date, time] = dateTimeStr.split(" ");
  const [month, day] = date.split(".").map(Number); // 문자열을 숫자로 변환
  const [hour, minute] = time.split(":").map(Number); // 문자열을 숫자로 변환
  return { month, day, hour, minute };
}
const dateTimeStr = "05.11 14:03";

const CommuBoard = () => {
  const [clickDot, setClickDot] = useState(false);
  const [articleID, setArticleID] = useState(-1);
  //게시글 시간 관리
  const [showTime, setShowTime] = useState("");
  //게시글 데이터
  const [article, setArticle] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts") //추후 getCommunity로 변경
      .then((res) => {
        res.data.reverse();
        setArticle(res.data);
        printDate(); //함수에 계산에 필요한 데이터가 get data안에 있음
      })
      .catch((error) => {
        console.log("에러", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**서버로 받은 시간 파싱하여 사용가능 형태로 가공*/
  const fromServerDate = parseDateTime(dateTimeStr);
  //article 중 시간으로 대체, 따라서 컴포넌트함수 내부에 위치

  /**setShowTime사용하여 게시글 시간 세팅 */
  const printDate = () => {
    const now = new Date();
    const nowDate = now.getDate(); //일
    const nowHour = now.getHours(); //시
    const nowMin = now.getMinutes(); //분
    if (nowDate !== fromServerDate.day) {
      nowDate - fromServerDate.day;
      setShowTime(`${nowDate - fromServerDate.day}일전`);
    } else {
      setShowTime("같은날");
      if (fromServerDate.hour < nowHour) {
        setShowTime(`${-1 * (fromServerDate.hour - nowHour)}시간 전`);
      } else {
        if (fromServerDate.minute < nowMin) {
          setShowTime(`${-1 * (fromServerDate.minute - nowMin)}분 전`);
        } else {
          setShowTime("지금");
        }
      }
    }
  };
  const clickCloseModal = () => {
    if (clickDot) {
      setClickDot(false);
    }
  };
  return (
    <div className="commuBoard_root">
      {article && (
        <div
          className="commuBoard_under_root"
          onClick={() => clickCloseModal()}
        >
          <div className="commuBoard_under_root_under">
            {article.map((item, key) => {
              return (
                <div className="communComponent" key={key}>
                  <div className="communComponent-bundle">
                    <div className="communComponent-box">
                      <div className="communComponent-box-left">
                        <div className="noName">익명{item.id}</div>
                        <div>{showTime}</div>
                      </div>
                      <svg
                        className="dot"
                        onClick={() => {
                          setClickDot(true);
                          console.log(clickDot);
                          setArticleID(item.id);
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 512"
                      >
                        <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                      </svg>
                    </div>
                    <div className="communComponent-body">{item.body}</div>
                  </div>
                </div>
              );
            })}
          </div>
          {clickDot && (
            <CommuDelete id={articleID} closeModal={() => setClickDot(false)} />
          )}
        </div>
      )}
    </div>
  );
};

export default CommuBoard;
