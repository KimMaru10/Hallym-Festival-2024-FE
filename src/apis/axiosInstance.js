import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://kim-sun-woo.com", // 기본 URL 설정
  timeout: 10000, // 요청 타임아웃(ms)
  headers: {
    "Content-Type": "multipart/form-data", // 요청 헤더 설정 중요하다 서버랑 맞춰라 임마!!!!
  },
});

export default axiosInstance;
