import axios from "axios";
//**id,pw 전달 후 토큰 받음 */
export const loginApi = async (id, pw) => {
  try {
    const response = await axios.post("http://localhost:8080/members/login", {
      id,
      pw,
    });
    console.log("formalLoginApi함수, 토큰을 받아옴 ", response.data);
    return response.data;
  } catch (error) {
    console.log("formalLoginApi: 로그인 실패!", error);
  }
};
