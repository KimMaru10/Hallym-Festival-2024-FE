
import "./ReservationPriviteModal.scss"
import React, {  useState,useEffect } from "react";
import ReservationForm from "../../ReservationForm/ReservationForm";

const ReservationPriviteModal = () => {
  const [check, setCheck] = useState(false);
  const [inputsFilled, setInputsFilled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setInputsFilled(check);
    console.log(inputsFilled);
  }, [check]);


  return (

    <div>
        {open ? <ReservationForm/>:
          <>
            <div className="ReservationPriviteModal">
              <h2>개인정보 수집 동의서</h2>
              <p className="top_p">
                <b>수집목적</b> : 회원 식별 및 고지사항 전달 <br/>
                <b>수집항목</b> : 학번, 이름, 전화번호 <br/>
                <b>보유 및 이용기간</b> : 축제 기간
              </p>
              
              <p className="bottom_p">
              귀하는 ‘대동제 웹사이트’의 서비스 이용에<br/>
              필요한 최소한의 개인정보 수집, 이용에<br/>
              동의하지 않을 수 있으나 동의를 거부할 경우<br/>
              예약이 불가합니다.
              </p>

              <label className="custom_checkbox" htmlFor="chek" >
                  <input
                  className="reserv_confirm_checkbox"
                  id="chek"
                  type="checkbox"
                  onChange={(e) => setCheck(e.target.checked)}
                />

                개인정보 수집 및 이용에 대해 동의합니다.
              </label>

      
       
              <button className={`checkbtn ${inputsFilled ? 'filled': ''}`} onClick={()=>setOpen(true)} disabled={!inputsFilled}>동의합니다</button>
            </div>
          </>
        }
    </div>


  );
};

export default ReservationPriviteModal;
