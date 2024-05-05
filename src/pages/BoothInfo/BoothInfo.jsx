import React, { useEffect, useState } from "react";
import axios from "axios";
import ListItem from "../../components/ListItem/ListItem";
import "./Boothinfo.scss";
import Background from "../../components/Layout/Background";
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
      <Background />
      <div className="header">동아리 부스 안내</div>

      {load ? (
        data.map((it) => {
          return <ListItem {...it} key={it.id} />;
        })
      ) : (
        <h2>로딩중입니다</h2>
      )}
    </div>
  );
};

export default BoothInfo;
