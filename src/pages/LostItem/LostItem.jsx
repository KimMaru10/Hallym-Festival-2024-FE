import React from "react";
import Footer from "../../components/Layout/Footer";
import "./LostItem.scss";
import { getLostList } from "../../apis/axios.js";
import { Header, Background } from "../../components/index.js";

import { useEffect, useState } from "react";
const LostItem = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  

  //데이터 리스트 get 
  useEffect(()=>{
    const dataList = async()=>{
      try{
         await getLostList()
        .then((res)=>{

          const newTime = res.data.map((item)=>{
            const formattedTime = new Date(item.upload_time).toLocaleString('ko-KR', {
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
            }); 
            return {...item, upload_time:formattedTime }
          });

          setData(newTime);
          setLoad(true);
          console.log(res.data[0].upload_time);
        });
        console.log("데이터 수신");
        
      }catch(e){
        console.error("데이터 에러", e);
      }
    }
    dataList();
  },[]);

  return (
    <div className="lostItem">
      <Background hasLogo={false} />
      <Header headcenter={"축제 분실물 찾기"} />

      {load ? (
  
        <div className="list_wrapper">
          {data.map((it) => (
            <div className="item_wrapper">
              <img src={it.image_url} />
              <div className="text">
                <div className="text t1">물품명: {it.name}</div>
                <div className="text t2">발견위치: {it.location}</div>
              </div>

            <div className="text t3">{it.upload_time}</div>
            
        </div>
        ))}
      </div>
        ) : (
        <h2 className="loading">로딩중...</h2>
        )}


      <Footer
        string={`해당 분실물은 관리팀 중앙통제부스에서 수령가능합니다\n\n
          관리팀 중앙통제부스 위치:(미정)\n
          담당자 번호:010-xxxx-xxxx`}
      />
    </div>
  );
};

export default LostItem;
