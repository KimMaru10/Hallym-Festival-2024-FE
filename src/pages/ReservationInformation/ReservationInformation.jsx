import { Background } from "../../components";
import React, { useEffect, useRef, useState } from "react";
import ReservationInfoComponent from "../../components/ReservationInfoComponent/ReservationInfoComponent";
import "./ReservationInformation.scss"
import { Header } from "../../components/index.js";
import { findReservation } from "../../apis/axios";


const ReservationInformation = ()=>{


  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [data,setData] = useState({
    name:'',
    phone:0,
    number:'',
    peapleCount:0
  });

    const findData = {
      name: name,
      phone_number: phone,
    };

    const onSubmit = ()=>{
      const findReserve = async (findData) => {
        try {
          const response = await findReservation(findData);
          console.log("새로운 예약 추가", findData);
          if (response.status === 200) {
            setData(response.data);
            setOpen(true);
            console.log(response.data);
            return response;
          } 
        } catch (error) {
          console.error("예약 실패", error);
          window.alert("일치하는 예약자 정보가 없습니다");
        }
      };

      findReserve(findData);
 
    }

    return(
        <div className="ReservationInformation">
            <Background/>
            <Header headcenter={"예약 최종 확인"}/>
            <h2 className="ReservationWaith2"></h2>

            {open?<ReservationInfoComponent data={data}/> :
            (
                <div className="form_wrapper">
                  <div className="input_wrapper">
                    <label htmlFor="numberInput">
                    <div className="labeldiv">대표자의 학번을 입력해주세요</div>
                    <input
                        id="numberInput"
                        className="input_box"
                        name="number"
                        type="number"
                        placeholder="학번 입력"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    </label>

                    <label htmlFor="nameInput">
                    <div className="labeldiv">대표자의 이름을 입력해주세요</div>
                    <input
                        id="nameInput"
                        className="input_box"
                        name="text"
                        type="text"
                        placeholder="이름 입력"
                        onChange={(e) => setName(e.target.value)}
                    />
                    </label>
            
                  </div>

                <button className="resInfo_btn" onClick={onSubmit}>예약 확인하기</button>
              </div>

            )}

          

        </div>
    )
}

export default ReservationInformation;