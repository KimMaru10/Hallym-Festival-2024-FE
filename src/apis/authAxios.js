import axios from "axios";
import { getNewRefreshToken } from "./refresh";
//인증을 위한 axios api
export const getAuthAxios = (token) => {
  //매개변수 token: access토큰
  const accessToken = token;
  const authAxios = axios.create({
    //새로운 axios 정의
    baseURL: "http://localhost:8080/members",
    headers: {
      Authorization: accessToken,
      //authAxios.get이런식으로 보낸 요청의 헤더에 엑세스토큰이 실리게 된다.
    },
  });

  //새로 정의한 authAxios 즉, axios객체에 응답을 설정(중간에 가로챈다.)
  authAxios.interceptors.response.use(
    (res) => res, //응답이 오류가 없을 경우 , 아무것도 처리하지 않음
    async (error) => {
      //응답에 오류가 있을 경우
      if (error.response.status === 401) {
        //401 error가 발생: 토큰이 만료됨
        const { accessToken, refreshToken } = await getNewRefreshToken(); //refresh토큰을 새로 받아옴
        error.config.headers.Authorization = accessToken; //새로 받아온 access를 에러가 난 config의 헤더에 담아준다
        localStorage.setItem("access", accessToken);
        localStorage.setItem("refresh", refreshToken);
        return (await axios.get(error.config.url, error.config)).data; //실패한 url과 error의 config를 get, get한 후 response의 data를 반환
      }
    }
  );
  return authAxios; //authAxios: axios 객체
};
