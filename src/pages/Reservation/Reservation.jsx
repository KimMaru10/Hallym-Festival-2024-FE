import React, { useEffect, useState } from "react";
import Background from "../../components/Layout/Background";
import ReservationWait from "../../components/Modal/ReservationWaitModal/ReservationWaitModal.jsx";
import moment from "moment";
import ReservationForm from '../../components/ReservationForm/ReservationForm.jsx'
import "./Reservation.scss"
import { Header } from "../../components/index.js";

const Reservation = () => {

  const [open, setOpen] = useState(false);
  const [nowTime,setNowTime] = useState(moment().format('HH:mm:ss'));
  useEffect(() => {
    if(moment(nowTime, 'HH:mm:ss').isAfter(moment('18:00:00', 'HH:mm:ss'))) {
      setOpen(true);
    
    }
    else{ 
      setOpen(false);

    }
  }, [nowTime]);

  return (
    <div className="reservation">
      <Background />
      <Header />

      <button onClick={()=>setOpen(true)}>폼 테스트</button>

      

      <header className="ReservationWaith2">주점예약</header>

      {open ? 
      <ReservationForm/>
      :<ReservationWait nowTime={nowTime}/>}
      

    </div>
  );
};

export default Reservation;
