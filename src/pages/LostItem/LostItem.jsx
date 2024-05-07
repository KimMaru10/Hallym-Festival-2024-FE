import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Layout/Footer";
import axios from "axios";
import "./LostItem.scss";

import { useEffect, useState } from "react";
const LostItem = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  console.log(load);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setData(response.data);
        setLoad(true);
      });
  }, []);

  return (
    <div className="lostItem">
      <Header headcenter={"축제 분실물 찾기"} />

      <div className="list_wrapper">
        {data.map((it) => (
          <div className="item_wrapper">
            <img src={it.url} />
            <div className="text">
              <div id="text1">물품명: {it.albumId}</div>
              <div id="text2">발견위치: {it.title}</div>
            </div>
          </div>
        ))}
      </div>

      <h2>로딩중입니다</h2>
      <hr />

      <Footer
        string={`해당 분실물은 관리팀 중앙통제부스에서 수령가능합니다 관리팀 중앙통제부스 위치:
      담당자 번호:010-xxxx-xxxx`}
      />
    </div>
  );
};

export default LostItem;
