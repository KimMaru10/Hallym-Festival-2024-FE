import React from "react";
import AdminHeader from "./AdminHeader.jsx";
import Background from "../Layout/Background.jsx";
import "./AdminNotice.scss";
const AdminNotice = () => {
  /**
   *1. 공지사항 모두 get
   2. 공지사항 보여주기
   2-1 제목 버튼 글 3가지로 구성
   버튼 누르면 삭제하기, 수정하기
   */
  return (
    <div>
      <Background />
      <AdminHeader headcenter="관리자 공지사항" />
      <div className="AdminNotice-container"></div>
    </div>
  );
};

export default AdminNotice;
