
import "./ReservationPriviteModal.scss"
import React, {  useState } from "react";
import ReservationForm from "../../ReservationForm/ReservationForm";

const ReservationPriviteModal = () => {
  
  const [open, setOpen] = useState(false);

  return (

    <div>
        {open ? <ReservationForm/>:
          <>
            <div className="ReservationPriviteModal">
              <h2 >알림</h2>
              <p>
                개인정보 동의서 
              </p>
              <div className="news" onClick={()=>setOpen(true)}>동의합니다</div>
            </div>
          </>
        }


    </div>


  );
};

export default ReservationPriviteModal;
