import axios from "axios";
import rateLimit from "axios-rate-limit";

const createInstance = axios.create({
  baseURL: "http://kim-sun-woo.com/api", // 기본 URL 설정
  timeout: 60000, // 요청 타임아웃(ms)
});
const axiosInstance = rateLimit(createInstance, {
  maxRequests: 10,
  perMilliseconds: 1000,
});
export default axiosInstance;
