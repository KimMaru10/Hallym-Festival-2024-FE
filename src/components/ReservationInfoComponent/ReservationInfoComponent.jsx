import "./ReservationInfoComponent.scss"
import { useNavigate } from "react-router-dom";

const ReservationInfoComponent = ({data,isRes})=>{
    const navigate = useNavigate();

    return(
        <div className="ReservationInfoComponent">
            <h3 className="res_info_wrapper">예약 확인 결과 </h3>
            {isRes ? 
            (      
            <p className="res_info_p">
                <b>인원수 {data.people_count}명 </b>
                <br />
                <b>학번: {data.studentId} </b>
                <br />
                <b>이름: {data.name} </b>
                <br />
                <b>전화번호: {data.phone_number} </b>
                <br />
                <br />
                <p>예약 성공이 확인되었습니다.</p>  
            </p>
            ):(
                <p className="resNo"><b>예약이 확인되지 않았습니다</b></p>   
            )}

            <button className="resInfoB btn1" onClick={()=>navigate(-1)}>이전</button>
            <button className="resInfoB btn2" onClick={()=>navigate('/home')}>확인</button>

        </div>
    )
}

export default ReservationInfoComponent;