
import axios from "axios";
/**refresh토큰을 받아오는 코드*/
export const getNewRefreshToken= async ()=>{
    const accessToken = localStorage.getItem('access');
    const refreshToken = localStorage.getItem('refresh');
    const result = await axios.post('http://localhost:8080/members/reissue',
        {
            refreshToken,//body에 refresh토큰 넣음,header에 accesstoken을 넣음
        },
        {
            headers:{
                Authorization:accessToken
            },
        }
    );
    return result.data;
};
