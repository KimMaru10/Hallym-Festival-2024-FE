import "./ReservationInfoComponent.scss"
import { useNavigate } from "react-router-dom";

const ReservationInfoComponent = ({data})=>{
    const navigate = useNavigate();

    return(
        <div className="ReservationInfoComponent">
            <h3>예약 인증서</h3>


            <p className="res_info_p">
                <b>인원수 {data.peopleCount}명 </b>
                <br />
                <b>학번: {data.number} </b>
                <br />
                <b>이름: {data.name} </b>
                <br />
                <b>전화번호: {data.phone} </b>
                <br />
 
            </p>

            <button className="resInfo_btn" onClick={()=>navigate('/home')}>확인</button>
        </div>
    )
}

export default ReservationInfoComponent;