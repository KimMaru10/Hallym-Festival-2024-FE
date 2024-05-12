import React from "react";
import "./Admin.scss";
import { Background } from "../../components";
import { Link } from "react-router-dom";
const Admin = () => {
  return (
    <div className="Admin">
      <Background hasLogo={true} />

      <div className="Admin-container">
        <div className="Admin-container-wrapper2">
          <div className="Admin-container-wrapper2-left">
            <Link
              to="/admin/notice"
              className="Admin-container-wrapper2-left-schedule"
            >
              <p>공지사항</p>
            </Link>
            <Link
              to="/admin/community"
              className="Admin-container-wrapper2-left-community"
            >
              <p>커뮤니티</p>
            </Link>
          </div>

          <Link
            to="/admin/lostItem"
            className="Admin-container-wrapper2-reservation"
          >
            <p>분실물</p>
          </Link>
        </div>
        <div className="Admin-container-wrapper3">
          <div className="Admin-container-wrapper3-lostItem">
            <p>로그아웃</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
