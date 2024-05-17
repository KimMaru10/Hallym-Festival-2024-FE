import React, { useEffect, useRef, useState } from "react";
import "./ReservationForm.scss";
import { getReservation } from "../../apis/axios";
import ReservationConfirmModal from "../Modal/ReservationConfirmModal/ReservationConfirmModal";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import spiner from '../../assets/icon/Reload.gif'

const ReservationForm = () => {
  
  const numRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const peapleRef = useRef();
  const checkReF = useRef();

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  // const [date, setDate] = useState("");
  const [peapleCount, setPeapleCount] = useState(1);
  const [remain, setRemain] = useState(0);
  const [check, setCheck] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  const [inputsFilled, setInputsFilled] = useState(false);
  const [loading,setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(()=>{
    remainNum();
  },[remain]);

  //예약 확인 닫고 다시 돌아오기 
  const handleCloseModal = () =>{
    setIsConfirm(false);
    setInputsFilled(false);
    setPeapleCount(1);
    setName(0);
    setCheck(false);
    setRemain(0);

  }

 
  const getReserve = async()=>{
    try{
      const response = await getReservation();
      console.log("예약조회",response.data);
      setLoading(true);
      setRemain(response.data);
    }catch(e){
      console.error("데이터 에러",e);
    }
  }
  //백엔드로부터 현재 사람 수 받는 로직 추가
  useEffect(()=>{
    getReserve();
  },[]);

  const remainNum = () => {


    if (remain > 100) {
      window.alert("예약 인원이 가득 찼습니다");
      navigate("/home");
    }
  };

  //예약할 날짜 최신화
  // useEffect(()=>{
  //   const tomorrow = moment().add(1, 'days').format('DD');

  //   setDate(tomorrow);
  // },[]);

  //사람 수가 바뀔때만 함수 사용 
  const onNumClick = useCallback(
    (e) => {
      const v = e.target.name;
      if (v === "m" && peapleCount > 1) {
        setPeapleCount((prevCount) => prevCount - 1);
      } else if (v === "p" && peapleCount < 4) {
        setPeapleCount((prevCount) => prevCount + 1);
      } else {
        if (peapleCount <= 1) {
          window.alert("선택된 인원이 없습니다");
        } else {
          window.alert("최대 4명까지 선택할 수 있습니다");
        }
      }
    },
    [peapleCount]
  );

  useEffect(() => {
    setInputsFilled(number && name && phone && peapleCount > 0 && check);
  }, [number, name, phone, peapleCount, check]);

  /*
  const onHandleClick = (e)=>{
    const d = e;
    setDate(d);
  }
  */

  const onButtonClick = () => {
      if(inputsFilled){
        setIsConfirm(true);
      }

    /*  날짜 부분 일단 주석 처리
    <div className="date_wrapper">
    <div className="date_div" onClick={()=>onHandleClick(21)}><div>화</div><div>21</div></div>
    <div className="date_div" onClick={()=>onHandleClick(22)}><div>수</div><div>22</div></div>
    <div className="date_div" onClick={()=>onHandleClick(23)}><div>목</div><div>23</div></div>
    </div>
    */
  };
  return (
    <div>
      {isConfirm ? (
        <ReservationConfirmModal onclose={handleCloseModal} value={{ peapleCount, number, name, phone }} />
      ) : (
        loading ? (
     <div className="ReservationForm"> 
          <header className="ReservationFormHeader">
            야간주점 예약 시스템
          </header>

          <div className="pnum" ref={peapleRef}>
            <p>인원수</p>

            <div className="num_action_wrapper">
              <button className="num_leftbtn btn" name="m" onClick={onNumClick}>
                -
              </button>
              <div className="num">{peapleCount}</div>
              <button
                className="num_rightbtn btn"
                name="p"
                onClick={onNumClick}
              >
                +
              </button>
            </div>
          </div>

          <div className="clock6">
            <span><b>17시 30분 ~ 50분 입장({remain}/100석)</b></span>
          </div>

          <div className="input_wrapper">
            <label htmlFor="numberInput">
              <div className="labeldiv">대표자의 학번을 입력해주세요</div>
              <input
                id="numberInput"
                className="input_box"
                name="number"
                type="text"
                placeholder="학번 입력"
                ref={numRef}
                onChange={(e) => setNumber(e.target.value)}
              />
            </label>
            <label htmlFor="nameInput">
              <div className="labeldiv">대표자의 이름을 입력해주세요</div>
              <input
                id="nameInput"
                className="input_box"
                name="name"
                type="text"
                placeholder="이름 입력"
                ref={nameRef}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label htmlFor="phoneInput">
              <div className="labeldiv">대표자의 전화번호를 입력해주세요 <b className="label_red"></b></div>
              <input
                id="phoneInput"
                className="input_box"
                name="phone"
                type="number"
                placeholder="-없이 숫자만 입력해주세요"
                ref={phoneRef}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
          </div>

          <div className="reserv_confirm">
            <div className="explain" ref={checkReF}>
              예약자 입장 시간인<strong> PM 5시 30분 ~ 5시 50분</strong>이내에 예약당일 밤부스 중앙통제부스 미방문시
              <b> 예약이 취소됩니다. 동의하십니까?</b>
            </div>
            <label className="custom_checkbox" htmlFor="chek" />
            <input
              className="reserv_confirm_checkbox"
              id="chek"
              type="checkbox"
              onChange={(e) => setCheck(e.target.checked)}
            />
          </div>
          <button className={`checkbtn ${inputsFilled ? 'filled': ''}`} onClick={onButtonClick}  disabled={!inputsFilled}>
            확인
          </button>
        </div>
      
      ) : (
        <div className="loading_div">
          <h3 className="loading_h">접속한 사용자가 많습니다<br/> 잠시만 기다려주세요...</h3>
          <img className="spinner" src={spiner}/>
        </div>
        
        )
      
      )
      }
    </div>
  );
};

export default React.memo(ReservationForm);
