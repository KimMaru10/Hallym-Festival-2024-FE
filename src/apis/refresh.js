import axios from "axios";
/**refresh토큰 전달해 토큰을 갱신함, access는 헤더, refresh는 바디에 담음*/
export const getNewRefreshToken = async () => {
  const accessToken = localStorage.getItem("access");
  const refreshToken = localStorage.getItem("refresh");
  const result = await axios.post(
    "http://localhost:8080/members/reissue",
    {
      refreshToken, //body에 refresh토큰 넣음,header에 accesstoken을 넣음
    },
    {
      headers: {
        Authorization: accessToken,
      },
    }
  );
  return result.data;
};
