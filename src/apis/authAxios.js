//해당 로직은 마이페이지에서 사용, 로그인 시에는 필요하지 않음

import axios from "axios";
import { getNewRefreshToken } from "./refresh";

export const getAuthAxios = (token) => {
  const accessToken = token;
  const authAxios = axios.create({
    baseURL: "http://localhost:8080/members",
    headers: {
      Authorization: accessToken,
    },
  });

  authAxios.interceptors.response.use(
    (res) => res,
    async (error) => {
      if (error.response.status === 401) {
        const { accessToken, refreshToken } = await getNewRefreshToken();
        error.config.headers.Authorization = accessToken;
        localStorage.setItem("access", accessToken);
        localStorage.setItem("refresh", refreshToken);
        return (await axios.get(error.config.url, error.config)).data;
      }
    }
  );
  return authAxios;
};
