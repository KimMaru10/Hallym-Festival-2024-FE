import React, { useEffect, useState } from "react";
import Background from "../../components/Layout/Background";
import ReservationWait from "./ReservationWaitModal";
import moment from "moment";
import ReservationForm from "./ReservationForm";
import "./Reservation.scss"

const Reservation = () => {

  const [open, setOpen] = useState(false);
  const [nowTime,setNowTime] = useState(moment().format('HH:mm:ss'));
  useEffect(() => {
    if(moment(nowTime, 'HH:mm:ss').isAfter(moment('13:15:00', 'HH:mm:ss'))) {
      setOpen(true);
      console.log("참")
    }
    else{
      setOpen(false);
      console.log("거짓")
    }
  }, [nowTime]);

  return (
    <div className="reservation">
      <Background />

      {open ? 
      <ReservationForm/>
      :<ReservationWait nowTime={nowTime}/>}
      

    </div>
  );
};

export default Reservation;
