import React, { useEffect,useState } from "react";
import axiosInstance from "../../apis/axiosInstance";
import axios from "axios";
import ListItem from "../../components/ListItem";
import "./Boothinfo.scss";
const BoothInfo = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response=>{
          setData(response.data);
      
        });
      },[]);

  return(
    <div className="BoothInfo">

        <div className="header">동아리 부스 안내</div>

        {data.map((it)=>{
            return <ListItem {...it} key={it.id}/>
        })}


    
    </div>
  )  
};

export default BoothInfo;
