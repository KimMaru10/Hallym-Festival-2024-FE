import React, { useState } from "react";
import { useEffect } from "react";
import "./CommuBoard.scss";
import CommuDelete from "../Modal/Community/CommuDelete.jsx";
import { getCommunity } from "../../apis/axios.js";
//라펙토링 시 함수 api분리 및 커스텀 훅 분리하여 선언적 상태 만들기

/**서버로 부터 들어와서 변수로 저장한 시간의 데이터 타입과 로컬시간 변수 타입 확인 하기*/
function parseDateTime(dateTimeStr) {
  const [day, hour, minute, second] = dateTimeStr.split(".");
  return { day, hour, minute, second };
}

const CommuBoard = () => {
  const [clickDot, setClickDot] = useState(false);
  const [articleID, setArticleID] = useState(-1);
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchCommunityData = async () => {
      try {
        const response = await getCommunity();
        const reversedArticle = response.data.reverse(); //얘는 article 잘안찍힘
        setArticle(reversedArticle);
        console.log(article);
        printDate(); //
        console.log(article);
      } catch (error) {
        console.log("커뮤니티 불러오기 안됨");
      }
    };
    fetchCommunityData();
  }, []);

  /**시간 계산하여 각 요소에 띄울 문자열 계산 로직 */
  const printDate = () => {
    article.map((item) => {
      const formattedTime = new Date(item.upload_time).toLocaleString("ko-KR", {
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });

      const fromServerDate = parseDateTime(formattedTime);

      const now = new Date();
      const nowDate = now.getDate();
      const nowHour = now.getHours();
      const nowMin = now.getMinutes();

      if (nowDate !== fromServerDate.day) {
        item.showDate = `${nowDate - fromServerDate.day}일전`;
      } else {
        if (fromServerDate.hour < nowHour) {
          item.showDate = `${-1 * (fromServerDate.hour - nowHour)}시간 전`;
        } else {
          if (fromServerDate.minute < nowMin) {
            item.showDate = `${-1 * (fromServerDate.minute - nowMin)}분 전`;
          } else {
            item.showDate = "지금";
          }
        }
      }
    });
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
                        <div>{item.showDate}</div>
                      </div>

                      <svg
                        className="dot"
                        onClick={() => {
                          setClickDot(true);
                          console.log(clickDot);
                          setArticleID(item.id);
                          console.log(item.id);
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 512"
                      >
                        <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                      </svg>
                    </div>
                    <div className="communComponent-body">{item.content}</div>
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
