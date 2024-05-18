import React from "react";
import img from '../../assets/icon/exclamationmark.png'
import './Inspection.scss'

const Inspection = () => {
  return (
    <div className="Inspection">

        <img src={img}/>

        <h2>시스템 점검중입니다</h2>

        <hr/>
        <p>서비스 이용에 불편을 드려 대단히 죄송합니다<br/>
        빠르게 작업을 완료하겠습니다<br/> 잠시만 기다려주세요..
        </p>     
  
    </div>
  );
};

export default Inspection;
