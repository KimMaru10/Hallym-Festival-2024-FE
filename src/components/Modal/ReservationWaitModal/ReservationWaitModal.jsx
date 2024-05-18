import React from "react";
import "./ReservationWaitModal.scss"

const ReservationWaitModal = ({nowTime}) => {

  const onReload = ()=>{
    location.reload()
  }


  return (
    <div className="ReservationWaitModal">
      <h2 >알림</h2>
      <p><br/>&nbsp;&nbsp;본 개인정보는 원활한 예약 시스템에 한해서 이뤄지는 점 양해 부탁드립니다.<br/><br/> 대동제 축제추진위원회는 학우분들의 개인정보를 악용/모방하지 않습니다.<br/><br/>
        <b>현재 주점 예약 시간이 아닙니다</b><br/> 현재 시간은 {nowTime} 입니다
      </p>
      <div className="news" onClick={onReload}>확인</div>
    </div>
  );
};

export default ReservationWaitModal;
