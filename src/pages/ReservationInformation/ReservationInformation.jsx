import { Background } from "../../components";
import React, { useEffect, useRef, useState } from "react";
import ReservationInfoComponent from "../../components/ReservationInfoComponent/ReservationInfoComponent";
import "./ReservationInformation.scss";
import { Header } from "../../components/index.js";
import { findReservation } from "../../apis/axios";

const ReservationInformation = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [isRes, setIsRes] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone_number: 0,
    studentId: "",
    people_count: 0,
  });

  const findData = {
    name: name,
    studentId: number,
  };

  const onSubmit = () => {
    const findReserve = async (findData) => {
      try {
        const response = await findReservation(findData);
        console.log("새로운 예약 추가", findData);
        if (response.status === 200) {
          setData(response.data);
          setIsRes(true);
          console.log(response.data);
          return response;
        }
      } catch (error) {
        setIsRes(false);
        console.error("예약 실패", error);
      }
    };

    findReserve(findData);
    setOpen(true);
  };

  return (
    <div className="ReservationInformation">
      <Background />
      <Header />
      <h2 className="ReservationWaith2"></h2>

      {open ? (
        <ReservationInfoComponent isRes={isRes} data={data} />
      ) : (
        <div className="form_wrapper">
          <h2 className="res_info_wrapper">예약확인</h2>
          <div className="input_wrapper">
            <label htmlFor="numberInput">
              <label htmlFor="nameInput">
                <div className="labeldiv">
                  예약 시 작성하신 성함을 입력해주세요
                </div>
                <input
                  id="nameInput"
                  className="input_box"
                  name="text"
                  type="text"
                  placeholder="이름 입력"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <div className="labeldiv">
                예약 시 작성하신 학번을 입력해주세요
              </div>
              <input
                id="numberInput"
                className="input_box"
                name="number"
                type="text"
                placeholder="학번 입력"
                onChange={(e) => setNumber(e.target.value)}
              />
            </label>
          </div>

          <button className="resInfo_btn" onClick={onSubmit}>
            예약 확인하기
          </button>
        </div>
      )}
    </div>
  );
};

export default ReservationInformation;
