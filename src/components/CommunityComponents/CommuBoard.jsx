import React, { useState, useEffect, useRef } from "react";
import "./CommuBoard.scss";
import CommuDelete from "../Modal/Community/CommuDelete.jsx";
import { getCommunity } from "../../apis/axios.js";

function parseDateTime(dateTimeStr) {
  const [day, hour, minute, second] = dateTimeStr.split(".");
  return { day, hour, minute, second };
}

const CommuBoard = () => {
  const [clickDot, setClickDot] = useState(false);
  const [articleID, setArticleID] = useState(-1);
  const [article, setArticle] = useState([]);
  const boardRef = useRef(null); // Ref for the board element

  useEffect(() => {
    const fetchCommunityData = async () => {
      try {
        const response = await getCommunity();
        const reversedArticle = response.data.reverse();
        setArticle(reversedArticle);
        printDate();
      } catch (error) {
        console.log("커뮤니티 불러오기 안됨");
      }
    };
    fetchCommunityData();
  }, []);

  /**시간 계산하여 각 요소에 띄울 문자열 계산 로직 */
  const printDate = () => {
    setArticle((prevArticle) => {
      return prevArticle.map((item) => {
        const formattedTime = new Date(item.upload_time).toLocaleString(
          "ko-KR",
          {
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          }
        );

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

        return item;
      });
    });
  };

  const clickCloseModal = () => {
    if (clickDot) {
      setClickDot(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boardRef.current && !boardRef.current.contains(event.target)) {
        clickCloseModal();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [clickDot]);

  return (
    <div
      className="commuBoard_root"
      ref={boardRef}
      onClick={() => clickCloseModal()}
    >
      {article && (
        <div className="commuBoard_under_root">
          <div className="commuBoard_under_root_under">
            {article.map((item, key) => (
              <div className="communComponent" key={key}>
                <div className="communComponent-bundle">
                  <div className="communComponent-box">
                    <div className="communComponent-box-left">
                      <div className="noName">익명{item.id}</div>
                      <div></div>
                      {/* 일단 시간 안넣음 */}
                      <div
                        className="dotBox"
                        onClick={() => {
                          setClickDot(true);
                          setArticleID(item.id);
                        }}
                      >
                        <svg
                          className="dot"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 128 512"
                        >
                          <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="communComponent-body">{item.content}</div>
                </div>
              </div>
            ))}
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
