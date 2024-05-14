import React from "react";
import "./ReservationConfirmModal.scss";
import { addReservation } from "../../../apis/axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const ReservationConfirmModal = ({ value }) => {
  const { peapleCount, number, name, phone } = value;
  const navigate = useNavigate();

  const submit = () => {
    // const nowTime = moment().format("YY.MM.DD HH:mm");

    const data = {
      student_id: number,
      name: name,
      phone_number: phone,
      people_count: peapleCount,
    };

    const addReserve = async (data) => {
      try {
        const response = await addReservation(data);
        console.log("새로운 예약 추가", data);
        if (response.status === 200) {
          window.alert("예약에 성공하셨습니다", response);
          navigate("/home");
          return response;
        } else {
          throw new Error("예약에 실패했습니다.");
        }
      } catch (error) {
        console.error("예약 실패", error);
        window.alert("예약에 실패하셨습니다");
      }
    };
    addReserve(data);
  };

  return (
    <div className="ReservationConfirmModal">
      <h2>예약 최종 확인</h2>
      <p>
        <b>인원수 {peapleCount}명 </b>
        <br />
        <b>학번: {number} </b>
        <br />
        <b>이름: {name} </b>
        <br />
        <b>전화번호: {phone} </b>
        <br />
        <br />
        해당 정보가 아닐 경우 뒤로가기 후,
        <br />
        정보를 수정 후 재제출 바랍니다.
        <br />
        하단의 확인 버튼을 눌러야 예약이 완료됩니다.
      </p>
      <div className="confirm" onClick={submit}>
        확인
      </div>
    </div>
  );
};

export default ReservationConfirmModal;
