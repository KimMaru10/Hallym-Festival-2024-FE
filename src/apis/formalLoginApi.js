import axios from "axios";
//**id,pw 전달 후 토큰 받음 */
export const formalLoginApi = async (id, pw) => {
  try {
    const response = await axios.post("http://localhost:8080/members/login", {
      id,
      pw,
    });
    console.log("formalLoginApi ", response.data);
    // const { accessToken, refreshToken } = response.data;
    // return [accessToken, refreshToken];
    return response.data;
  } catch (error) {
    console.log("로그인이 실패했습니다.", error);
  }
};
