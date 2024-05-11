import React from "react";
import Footer from "../../components/Layout/Footer";
import axios from "axios";
import "./LostItem.scss";
import { getLostList } from "../../apis/axios.js";
import { Header, Background } from "../../components/index.js";

import { useEffect, useState } from "react";
const LostItem = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  console.log(load);

  // useEffect(()=>{
  //   const dataList = async()=>{
  //     try{
  //       const res = await getLostList();
  //       setData(res.data);
  //       setLoad(true);
  //     }catch(e){
  //       console.error("데이터 에러", e);
  //     }
  //   }
  //   dataList();
  // },[]);


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
      <Background hasLogo={false} />
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
      <hr />

      <Footer
        string={`해당 분실물은 관리팀 중앙통제부스에서 수령가능합니다\n\n
          관리팀 중앙통제부스 위치:(미정)\n
          담당자 번호:010-xxxx-xxxx`}
      />
    </div>
  );
};

export default LostItem;
