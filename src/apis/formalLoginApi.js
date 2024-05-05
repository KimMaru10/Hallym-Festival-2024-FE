import axios from "axios"
//login요청후 성공하면 토큰을 받아오는 api코드
export const formalLoginApi=async (email,password)=>{
    try {
        const response=await axios.post("http://localhost:8080/members/login", {email, password} );
        console.log("formalLoginApi ",response.data);
        const {accessToken,refreshToken}=response.data;
        return [accessToken,refreshToken];
    }catch(error){
        console.log("로그인이 실패했습니다.",error);
    }
    
    // return [response.accessToken,response.refreshToken]; //로그인 성공시 accesstoken과 refreshtoken을 받아와서 
    //result.data로 받아온다,data안에 data가 있음
}

