import React, { useState, useEffect } from "react";
import { Header, Background } from "../../components/index.js";
import "./Notice.scss";
// import { getNoticeList } from "../apis/axios.js";

const Notice = () => {
  const [notices, setNotices] = useState([]);

  // 임시 공지사항 데이터
  const dummyNotices = [
    {
      id: 1,
      title: "공지사항 1",
      content: "내용1",
    },
    { id: 2, title: "공지사항 2", content: "내용 2" },
    { id: 3, title: "공지사항 3", content: "내용 3" },
  ];

  useEffect(() => {
    // // Axios를 사용하여 공지사항 데이터를 불러오는 함수
    // const fetchNotices = async () => {
    //   try {
    //     const response = await getNoticeList();
    //     // 서버에서 받아온 데이터를 state에 저장합니다.
    //     setNotices(response.data);
    //   } catch (error) {
    //     console.error(
    //       "공지사항 데이터를 불러오는 중 오류가 발생했습니다:",
    //       error
    //     );
    //   }
    // };
    // // 페이지가 로드될 때 공지사항 데이터를 불러옵니다.
    const fetchNotices = async () => {
      setNotices(dummyNotices);
    };
    fetchNotices();
  }, []);
  return (
    <div className="notice">
      <Background hasLogo={true} />
      <Header headcenter="공지사항" />
      <div className="container">
        <div className="wrapper">
          <div className="notice-list">
            {notices.map((notice) => (
              <div key={notice.id} className="notice-item">
                <div className="title">
                  <p>{notice.title}</p>
                </div>
                <div className="content">
                  <p>{notice.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
