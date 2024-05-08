import React,{useEffect, useRef, useState} from "react";
import Header from "../../components/Header/Header";
import "./ReservationForm.scss"
import axios from "axios";

const ReservationForm = () => {
  const numRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [remain,setRemain] = useState(0);

  const remainNum = ()=>{
    //백엔드로부터 현재 사람 수 받는 로직 추가 
    setRemain(10);
  }


  const onHandleClick = (e)=>{
    const d = e;
    setDate(d);
  }

  const onButtonClick = ()=>{

    if(number.length<1){
      numRef.current.focus();
      return;
    }
    else if(name.length<1){
      nameRef.current.focus();
      return;
    }
    else if(phone.length<1){
      phoneRef.current.focus();
      return;
    }
    else if(date.length==0){
      window.alert("예약일자를 고르세요")
    }
    else{

      const data = {
        number: number,
        name: name,
        phone: phone,
        date: date
      };
   
      axios.post("https://my-json-server.typicode.com/typicode/demo/posts",data,{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res)=>{
        console.log(res,"전송성공");
      })
      .catch((e)=>{
        console.log(e);
      })
    }
  }


  return (
    <div className="ReservationForm">
        <Header className="header" headcenter={"야간주점 예약 시스템"}/>
        <div className="date_wrapper">
            <div className="date_div" onClick={()=>onHandleClick(21)}><div>화</div><div>21</div></div>
            <div className="date_div" onClick={()=>onHandleClick(22)}><div>수</div><div>22</div></div>
            <div className="date_div" onClick={()=>onHandleClick(23)}><div>목</div><div>23</div></div>
        </div>
         
        

        <h4>6시부터 입장({remain}/100석)</h4>

        <div className="input_wrapper">
            <input className="input_box" name="number"  type="text" placeholder="학번 입력" ref={numRef} onChange={(e)=>setNumber(e.target.value)}/>
            <input className="input_box" name="name" type="text" placeholder="이름 입력" ref={nameRef} onChange={(e)=>setName(e.target.value)}/>
            <input className="input_box" name="phone" type="text" placeholder="전화번호 입력" ref={phoneRef} onChange={(e)=>setPhone(e.target.value)}/>
        </div>

    

        <button onClick={onButtonClick}>확인</button>
    </div>
  );
};

export default ReservationForm;
