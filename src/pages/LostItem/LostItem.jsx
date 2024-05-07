import React from "react";
import Background from "../../components/Layout/Background";
import Header from "../../components/Header";
import axiosInstance from "../../apis/axiosInstance";
import ListItem from "../../components/ListItem";
import axios from "axios";
import "./LostItem.scss";

import { useEffect,useState } from "react";
const LostItem = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response=>{
          setData(response.data);
      
        });
      },[]);

  return (
    <div className="lostItem">
      <Header headcenter={"축제 분실물 찾기"}/>

      <div className="list_wrapper">
        {data.map((it)=>(
          <div className="item_wrapper">
              <img src={it.url}/>
              <div className="text">
                  <div id="text1">물품명: {it.albumId}</div>
                <div id="text2">발견위치: {it.title}</div>

          </div>
          </div>
          ))}
      </div>




    </div>
  );
};

export default LostItem;
