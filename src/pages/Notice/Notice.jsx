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
          <div className="upper">
            <p id="upper_title">*안내 사항*</p>
            <p>해당 공지사항은 학우들의 안전과 축제추진위원회의</p>
            <p>축제 진행 과정의 안전을 고려한 공지사항입니다.</p>
            <p>
              학우님들과 같은 입장의 학생으로 꾸려진 본 축제추진위원회의 안전을
            </p>
            <p>위해서 매뉴얼로 진행된다는 점 양해부탁드립니다.</p>
            <p>
              불응 시 법적조치가 진행될 수 있음을 인지해주시면 감사하겠습니다.
            </p>
          </div>
          {showlist ? (
            <div className="notice-list">
              {notices.map((notice, index) => (
                <div key={index} className="notice-item">
                  <div className="title">
                    {notice.title && <p> {notice.title}</p>}
                  </div>
                  <div className="content">
                    {notice.content && <p>{notice.content}</p>}
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
