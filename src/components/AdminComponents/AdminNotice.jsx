import React, { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader.jsx";
import Background from "../Layout/Background.jsx";
import NoticeModal from "../AdminModal/NoticeModal.jsx";
import "./AdminNotice.scss";
const AdminNotice = () => {
  const [notices, setNotices] = useState([]);
  const [clickRewrite, setClickRewrite] = useState(false);
  const [clickWrite, setClickWrite] = useState(false);
  const [clickItem, setClickItem] = useState("");
  const [noticeID, setNoticeID] = useState(-1);

  const closeModal = () => {
    setClickRewrite(false);
    setClickWrite(false);
  };

  // console.log(noticeID);
  // 임시 공지사항 데이터
  const dummyNotices = [
    {
      id: 1,
      title: "공지사항 1",
      content: "내용1",
    },
    { id: 2, title: "공지사항 2", content: "내용 2" },
    { id: 3, title: "공지사항 3", content: "내용 3" },
    {
      id: 1,
      title: "공지사항 1",
      content: "내용1",
    },
    { id: 2, title: "공지사항 2", content: "내용 2" },
    { id: 3, title: "공지사항 3", content: "내용 3" },
    {
      id: 1,
      title: "공지사항 1",
      content: "내용1",
    },
    { id: 2, title: "공지사항 2", content: "내용 2" },
    { id: 3, title: "공지사항 3", content: "내용 3" },
  ];
  useEffect(() => {
    const fetchNotices = async () => {
      setNotices(dummyNotices);
    };
    fetchNotices();
  }, []);
  const handleCloseModal = () => {
    if (clickRewrite || clickWrite) {
      closeModal();
    }
  };
  return (
    <div className="admin_notice" onClick={handleCloseModal}>
      <Background />
      <AdminHeader headcenter="관리자 공지사항" />
      <div className="admin_notice-container">
        <div className="admin_notice-container-wrapper">
          {(!clickRewrite || !clickWrite) && (
            <>
              <div className="admin_notice-container-wrapper-list">
                {notices.map((notice) => (
                  <div key={notice.id} className="items">
                    <div className="items_head">
                      <div className="title">
                        <p>{notice.title}</p>
                      </div>
                      <div
                        className="rewrite"
                        onClick={() => {
                          setNoticeID(notice.id);
                          setClickItem("put");
                          setClickRewrite(true);
                        }}
                      >
                        수정
                      </div>
                    </div>

                    <div className="content">
                      <p>{notice.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="admin_notice-container-wrapper-btn">
                <div
                  className="modal_bnt"
                  onClick={() => {
                    setClickItem("post");
                    setClickWrite(true);
                  }}
                ></div>
              </div>
            </>
          )}
        </div>

        {(clickRewrite || clickWrite) && (
          <NoticeModal
            id={noticeID}
            putOrPost={clickItem}
            onClose={() => closeModal()}
          />
        )}
      </div>
    </div>
  );
};

export default AdminNotice;
