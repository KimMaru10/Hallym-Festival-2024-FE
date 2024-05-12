import axios from "axios";

export const loginApi = async (id, pw) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/members/login",
      {
        id,
        pw,
      },
      {
        withCredentials: true,
        //http only cookie 허용 ->refresh토큰 가져옴, 클라이언트 측에서 확인 불가
      }
    );
    console.log("loginApi 함수: 토큰을 받아옴 ", response.data);
    return response.data;
  } catch (error) {
    console.log("loginApi 함수: 로그인 실패!", error);
  }
};
