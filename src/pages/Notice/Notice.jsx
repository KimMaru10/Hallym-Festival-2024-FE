import React, { useState, useEffect } from "react";
import { Header } from "../../components/index.js";
import "./Notice.scss";
import { getNoticeList } from "../../apis/axios.js";
import { Background } from "../../components/index.js";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [showlist, setShowList] = useState(false);

  // Axios를 사용하여 공지사항 데이터를 불러오는 함수
  const fetchNotices = async () => {
    try {
      const response = await getNoticeList();
      setNotices(response.data);
      setShowList(true);
    } catch (error) {
      console.error(
        "공지사항 데이터를 불러오는 중 오류가 발생했습니다:",
        error
      );
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);
  return (
    <div className="notice">
      <Background hasPub={true} />
      <Header headcenter="공지사항" />
      <div className="container">
        <div className="wrapper">
          {showlist ? (
            <div className="notice-list">
              {notices.map((notice, index) => (
                <div key={index} className="notice-item">
                  <div className="title">
                    <p>{notice.title}</p>
                  </div>
                  <div className="content">
                    <p>{notice.content}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h2>loading...</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notice;
