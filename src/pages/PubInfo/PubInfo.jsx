import React, { useState, useEffect } from "react";
import "./PubInfo.scss";
import { Background, Header } from "../../components/index.js";

const PubInfo = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const dummyData = {
      title: "Sample Title",
      content:
        "Sample Content Sample Content Sample Content Sample ContentSample Content Sample Content",
    };
    setData(dummyData);
  }, []);

  return (
    <div className="pubInfo">
      <Background />
      <Header headcenter="주점 안내" />
      <div className="pubInfo-container">
        <div className="pubInfo-container-wrapper">
          <img src={"https://via.placeholder.com/150"} alt="주점 위치" />
          <div className="contents">
            <p id="title">{data.title}</p>
            <p id="content">{data.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PubInfo;
