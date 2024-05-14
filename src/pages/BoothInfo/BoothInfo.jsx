import React, { useEffect, useState } from "react";
import { Board } from "../../components/index.js";
import "./Boothinfo.scss";

import { Header, Background } from "../../components/index.js";
const BoothInfo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 임시 데이터
    const temporaryData = [
      {
        id: 1, // id 추가
        url: "https://via.placeholder.com/150",
        title: "부스 1", // title로 변경
        content: "부스 1의 설명입니다.",
      },
      {
        id: 2, // id 추가
        url: "https://via.placeholder.com/150",
        title: "부스 2", // title로 변경
        content: "부스 2의 설명입니다.",
      },
      {
        id: 3, // id 추가
        url: "https://via.placeholder.com/150",
        title: "부스 3", // title로 변경
        content: "부스 3의 설명입니다.",
      },
      {
        id: 1, // id 추가
        url: "https://via.placeholder.com/150",
        title: "부스 1", // title로 변경
        content: "부스 1의 설명입니다.",
      },
      {
        id: 2, // id 추가
        url: "https://via.placeholder.com/150",
        title: "부스 2", // title로 변경
        content: "부스 2의 설명입니다.",
      },
      {
        id: 3, // id 추가
        url: "https://via.placeholder.com/150",
        title: "부스 3", // title로 변경
        content: "부스 3의 설명입니다.",
      },
    ];
    setData(temporaryData);
  }, []);

  return (
    <div className="BoothInfo">
      <Background hasLogo={false} />
      <Header headcenter="부스 안내" />
      <div className="BoothInfo-container">
        <Board data={data} />
      </div>
    </div>
  );
};

export default BoothInfo;
