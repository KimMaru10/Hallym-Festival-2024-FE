import React from "react";
import AdminHeader from "./AdminHeader.jsx";
import Background from "../Layout/Background.jsx";
const AdminCommunity = () => {
  return (
    <div className="AdminCommunity">
      <Background />
      <AdminHeader headcenter="관리자 커뮤니티" />
      <div className="AdminCommunity-container"></div>
    </div>
  );
};

export default AdminCommunity;
