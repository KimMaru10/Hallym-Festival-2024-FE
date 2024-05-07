import React from "react";
import "./AdminHeader.scss";
import { Link } from "react-router-dom";
const AdminHeader = () => {
  return (
    <div>
      <header className="header_wrapper">
        <Link className="haedleft" to="/adminnotice">
          공지사항{" "}
        </Link>
        <Link className="headcenter" to="/admincommunity">
          커뮤니티
        </Link>
        <Link className="headright" to="/adminlost">
          분실물
        </Link>
        <hr />
      </header>
    </div>
  );
};

export default AdminHeader;
