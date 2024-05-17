import axios from "axios";
import rateLimit from "axios-rate-limit";

const createInstance = axios.create({
  baseURL: "http://13.209.218.51/api", // 기본 URL 설정
  timeout: 10000, // 요청 타임아웃(ms)
});
const axiosInstance = rateLimit(createInstance, {
  maxRequests: 10,
  perMilliseconds: 1000,
});
export default axiosInstance;
