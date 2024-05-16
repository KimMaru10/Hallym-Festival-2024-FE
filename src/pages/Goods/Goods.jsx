import React, { useState, useEffect } from "react";
import Background from "../../components/Layout/Background";
import "./Goods.scss";
import { Header } from "../../components/index.js";
import { Board } from "../../components/index.js";

const Goods = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 임시 데이터
    const temporaryData = [
      {
        id: 1, // id 추가
        url: "https://via.placeholder.com/150",
        title: "상품 1", // title로 변경
        content: "상품 1의 설명입니다.",
      },
      {
        id: 2, // id 추가
        url: "https://via.placeholder.com/150",
        title: "상품 2", // title로 변경
        content: "상품 2의 설명입니다.",
      },
      {
        id: 3, // id 추가
        url: "https://via.placeholder.com/150",
        title: "상품 3", // title로 변경
        content: "상품 3의 설명입니다.",
      },
      {
        id: 1, // id 추가
        url: "https://via.placeholder.com/150",
        title: "상품 1", // title로 변경
        content: "상품 1의 설명입니다.",
      },
      {
        id: 2, // id 추가
        url: "https://via.placeholder.com/150",
        title: "상품 2", // title로 변경
        content: "상품 2의 설명입니다.",
      },
      {
        id: 3, // id 추가
        url: "https://via.placeholder.com/150",
        title: "상품 3", // title로 변경
        content: "상품 3의 설명입니다.",
      },
      {
        id: 1, // id 추가
        url: "https://via.placeholder.com/150",
        title: "상품 1", // title로 변경
        content: "상품 1의 설명입니다.",
      },
      {
        id: 2, // id 추가
        url: "https://via.placeholder.com/150",
        title: "상품 2", // title로 변경
        content: "상품 2의 설명입니다.",
      },
      {
        id: 3, // id 추가
        url: "https://via.placeholder.com/150",
        title: "상품 3", // title로 변경
        content: "상품 3의 설명입니다.",
      },
      {
        id: 1, // id 추가
        url: "https://via.placeholder.com/150",
        title: "상품 1", // title로 변경
        content: "상품 1의 설명입니다.",
      },
      {
        id: 2, // id 추가
        url: "https://via.placeholder.com/150",
        title: "상품 2", // title로 변경
        content: "상품 2의 설명입니다.",
      },
      {
        id: 3, // id 추가
        url: "https://via.placeholder.com/150",
        title: "상품 3", // title로 변경
        content: "상품 3의 설명입니다.",
      },
    ];

    setData(temporaryData);
  }, []);

  return (
    <div className="goods">
      <Background />
      <Header headcenter="굿즈" />
      <div className="goods-container">
        <div className="goods-container-wrapper">
          <Board data={data} />
        </div>
      </div>
    </div>
  );
};

export default Goods;
