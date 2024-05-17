import React, { useEffect, useState } from "react";
import Background from "../../components/Layout/Background";
import ReservationWait from "../../components/Modal/ReservationWaitModal/ReservationWaitModal.jsx";
import moment from "moment";
import { Header } from "../../components/index.js";
import ReservationPriviteModal from "../../components/Modal/ReservationPriviteModal/ReservationPriviteModal.jsx";
import { useNavigate } from "react-router-dom";
import "./ReservationDetail.scss"
const ReservationDetail = () => {

  const [open, setOpen] = useState(false);
  const [nowTime,setNowTime] = useState(moment().format('HH:mm:ss'));
  const navigate = useNavigate();
  useEffect(() => {
    const timeFormated= moment(nowTime, 'HH:mm:ss')

    if(timeFormated.isAfter(moment('08:30:00', 'HH:mm:ss')) && timeFormated.isBefore(moment('09:30:00', 'HH:mm:ss')) ) {
      console.log("시간");
      setOpen(true);
    }
    else{ 
      setOpen(false);
    }
  }, [nowTime]);


  return (
    <div className="ReservationDetail">
      <Background />
      <Header />


    
      {open ? 
      <ReservationPriviteModal/>
      :<ReservationWait nowTime={nowTime}/>}
      



    </div>
  );
};

export default ReservationDetail;
