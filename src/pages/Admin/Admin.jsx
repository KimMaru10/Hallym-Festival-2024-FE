import React, { useState, useEffect } from "react";
import { getAdminBoard } from "../../apis/adminBoard";
import AdminHeader from "../../components/AdminHeader/AdminHeader.jsx";
import AdminLostItem from "../../components/AdminLostItem/AdminLostItem.jsx";
import "./Admin.scss";
const Admin = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getAdminBoard().then((res) => {
      setData(res);
      console.log(data);
    });
  }, []);
  return (
    <div className="admin_wrapper">
      <AdminHeader />
      <div className="admin">
        <AdminLostItem />
      </div>
    </div>
  );
};

export default Admin;
