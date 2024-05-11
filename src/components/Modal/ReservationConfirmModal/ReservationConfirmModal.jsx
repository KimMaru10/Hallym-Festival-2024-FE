import React from "react";
import './ReservationConfirmModal.scss'
import axios from "axios";

const ReservationConfirmModal = ({value}) => {

     const {peapleCount,number,name,phone,date} = value;

     const submit = () =>{

      const data = {
        number: number,
        name: name,
        phone: phone,
        date: date,
        peaple: peapleCount
      };
   
      axios.post("https://my-json-server.typicode.com/typicode/demo/posts",data,{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res)=>{
        console.log(res,"전송성공");
        window.alert("예약에 성공하셨습니다");
      }) 
      .catch((e)=>{
        console.log(e);
        window.alert("예약에 실패하셨습니다");
      })
     }

  return ( 
    <div className="ReservationConfirmModal">
      <h2 >예약 최종 확인</h2>
      <p> 
        <b>인원수 {peapleCount }명 </b><br/>
        <b>학번:  {number} </b><br/>
        <b>이름:  {name} </b><br/>
        <b>전화번호: {phone} </b><br/><br/>
        해당 정보가 아닐 경우 뒤로가기 후,<br/>
        정보를 수정 후 재제출 바랍니다.<br/>
        하단의 확인 버튼을 눌러야 예약이 완료됩니다.
      </p>
      <div className="confirm" onClick={submit}>확인</div>
    </div>
  );
};

export default ReservationConfirmModal;
