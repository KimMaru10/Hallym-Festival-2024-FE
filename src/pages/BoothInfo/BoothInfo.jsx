import React, { useEffect, useState } from "react";
import axios from "axios";
import ListItem from "../../components/ListItem/ListItem";
import "./Boothinfo.scss";

import { Header, Background } from "../../components/index.js";
const BoothInfo = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setData(response.data);
        setLoad(true);
      });
  }, []);

  return (
    <div className="BoothInfo">
      <Background hasLogo={false} />
      <Header headcenter="부스 안내" />
      <div className="BoothInfo-contents">
        <div className="BoothInfo-contents-wrapper">
          <div className="BoothInfo-contents-wrapper-list">
            {load ? (
              data.map((it) => {
                return <ListItem {...it} key={it.id} />;
              })
            ) : (
              <h2>이번년도 축제는 뭔가 달라....</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoothInfo;
