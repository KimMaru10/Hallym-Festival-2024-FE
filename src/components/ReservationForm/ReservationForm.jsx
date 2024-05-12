import React, { useEffect, useRef, useState } from "react";
import "./ReservationForm.scss";
import { getReservation } from "../../apis/axios";
import ReservationConfirmModal from "../Modal/ReservationConfirmModal/ReservationConfirmModal";
import { useNavigate } from "react-router-dom";

const ReservationForm = () => {
  const numRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const peapleRef = useRef();
  const checkReF = useRef();

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  // const [date, setDate] = useState("");
  const [peapleCount, setPeapleCount] = useState(0);
  const [remain, setRemain] = useState(0);
  const [check, setCheck] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  const navigate = useNavigate();

  useEffect(()=>{
    remainNum();
  },[remain]);

  // 테스트 해봐야함
  const getReserve = async()=>{
    try{
      const response = await getReservation();
      console.log("예약조회",response);
      setRemain(response.data.people_count);
    }catch(e){
      console.error("데이터 에러",e);
    }
  }

  const remainNum = () => {

    //백엔드로부터 현재 사람 수 받는 로직 추가
    getReserve();

    
    //setRemain(0);

    if (remain > 100) {
      window.alert("예약 인원이 가득 찼습니다");
      navigate("/");
    }
  };

  //예약할 날짜 최신화
  // useEffect(()=>{
  //   const tomorrow = moment().add(1, 'days').format('DD');

  //   setDate(tomorrow);
  // },[]);

  const onNumClick = (e) => {
    const v = e.target.name;

    if (v == "m" && peapleCount > 0) {
      setPeapleCount(peapleCount - 1);
    } else if (v == "p" && peapleCount < 4) {
      setPeapleCount(peapleCount + 1);
    } else {
      if (peapleCount <= 0) {
        window.alert("선택된 인원이 없습니다");
      } else {
        window.alert("최대 4명까지 선택할수 있습니다");
      }
    }
  };

  /*
  const onHandleClick = (e)=>{
    const d = e;
    setDate(d);
  }
   */

  const onButtonClick = () => {


    if (number.length < 1) {
      numRef.current.focus();
      return;
    } else if (name.length < 1) {
      nameRef.current.focus();
      return;
    } else if (phone.length < 1) {
      phoneRef.current.focus();
      return;
    } else if (peapleCount == 0) {
      peapleRef.current.focus();
      window.alert("인원수를 선택하세요");
      return;
    } else if (check == false) {
      checkReF.current.focus();
      window.alert("동의에 체크하세요");
    } else {
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
        <ReservationConfirmModal value={{ peapleCount, number, name, phone }} />
      ) : (
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
            <input className="clock_check" type="checkbox" />

            <span>6시부터 입장({remain}/100석)</span>
          </div>

          <div className="input_wrapper">
            <label htmlFor="numberInput">
              <div className="labeldiv">대표자의 학번을 입력해주세요</div>
              <input
                id="numberInput"
                className="input_box"
                name="number"
                type="number"
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
              <div className="labeldiv">대표자의 전화번호를 입력해주세요</div>
              <input
                id="phoneInput"
                className="input_box"
                name="phone"
                type="number"
                placeholder="- 빼고 숫자만 입력"
                ref={phoneRef}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
          </div>

          <div className="reserv_confirm">
            <div className="explain" ref={checkReF}>
              예약후, <strong>30분 이내에</strong> 입장하지 않을 시<br />
              예약이 자동으로 취소됩니다. 동의하십니까?
            </div>
            <label className="custom_checkbox" htmlFor="chek" />
            <input
              className="reserv_confirm_checkbox"
              id="chek"
              type="checkbox"
              onChange={(e) => setCheck(e.target.checked)}
            />
          </div>
          <button className="checkbtn" onClick={onButtonClick}>
            확인
          </button>
        </div>
      )}
    </div>
  );
};

export default React.memo(ReservationForm);
