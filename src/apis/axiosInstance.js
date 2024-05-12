import axios from "axios";
import rateLimit from "axios-rate-limit";

<<<<<<< HEAD
const axiosInstance = axios.create({
=======
const createInstance = axios.create({
>>>>>>> 18c7c16d2945352bccefc1db644e15bc9834de75
  baseURL: "http://43.201.23.0", // 기본 URL 설정
  timeout: 10000, // 요청 타임아웃(ms)
});

const axiosInstance = rateLimit(createInstance, {
  maxRequests: 10,
  perMilliseconds: 1000,
});
export default axiosInstance;
