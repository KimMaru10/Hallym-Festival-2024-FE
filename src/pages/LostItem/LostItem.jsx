import React from "react";
import Footer from "../../components/Layout/Footer";
import "./LostItem.scss";
import { getLostList } from "../../apis/axios.js";
import { Header } from "../../components/index.js";
import Background from "../../components/Layout/Background.jsx";
import { useEffect, useState } from "react";
const LostItem = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  //데이터 리스트 get
  useEffect(() => {
    const dataList = async () => {
      try {
        await getLostList().then((res) => {
          const newTime = res.data.map((item) => {
            const formattedTime = new Date(item.upload_time).toLocaleString(
              "ko-KR",
              {
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              }
            );
            return { ...item, upload_time: formattedTime };
          });

          setData(newTime);
          setLoad(true);
          console.log(res.data[0].upload_time);
        });
        console.log("데이터 수신");
      } catch (e) {
        console.error("데이터 에러", e);
      }
    };
    dataList();
  }, []);

  return (
    <div className="lostItem">
      <Background hasPub={true} />
      <Header headcenter={"축제 분실물 찾기"} />

      {load ? (
        <div className="list_wrapper">
          {data.map((it, index) => (
            <div className="item_wrapper" key={index}>
              <img src={it.image_url} />
              <div className="text">
                <div className="text t1">물품명: {it.name}</div>
                <div className="text t2">발견위치: {it.location}</div>

                <div className="t3"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="loading">로딩중...</h2>
      )}

      <Footer
        string={`분실물 수령 장소 : 학군단 쪽 흡연구역\n\n (정확한 장소는 안내페이지의 공지사항을 확인해주세요)\n\n
          분실물 찾아가는 시간 : 매일 14시 ~ 16시\n
          담당자 번호 : 010-3518-7492
          `}
      />
    </div>
  );
};

export default LostItem;
