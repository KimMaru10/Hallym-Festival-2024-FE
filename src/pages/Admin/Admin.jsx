import React, { useState, useEffect } from "react";
import { getAdminBoard } from "../../apis/adminBoard";
const Admin = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getAdminBoard().then((res) => {
      setData(res);
      console.log(data);
    });
  }, []);
  return (
    <div>
      Admin게시판
      <div>
        아직 어떤 데이터 받아야 할지 안정함 일단 관리자페이지 데이터 받는 로직만
        구현
      </div>
    </div>
  );
};

export default Admin;
