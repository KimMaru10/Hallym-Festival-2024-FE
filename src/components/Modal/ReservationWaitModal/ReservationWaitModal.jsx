import React from "react";
import "./ReservationWaitModal.scss"

const ReservationWaitModal = ({nowTime}) => {

  const onReload = ()=>{
    location.reload()
  }


  return (
    <div className="ReservationWaitModal">
      <h2 >알림</h2>
      <p><br/>&nbsp;&nbsp;본 예약 시스템은 오전 08:30 부터 09:30까지 이용 가능합니다<br/><br/> 예약 시간에 맞춰 확인 버튼을 클릭하시면 예약창으로 이동합니다<br/><br/>
        <b>현재 주점 예약 시간이 아닙니다</b><br/> 현재 시간은 {nowTime} 입니다
      </p>
      <div className="news" onClick={onReload}>확인</div>
    </div>
  );
};

export default ReservationWaitModal;
