import axios from "axios";
import rateLimit from "axios-rate-limit";

// axios 인스턴스 생성
const communityHttp = axios.create({
  baseURL: "//43.201.23.0",
  timeout: 10000,
});

// 요청 제한 설정
const community = rateLimit(communityHttp, {
  maxRequests: 10,
  perMilliseconds: 1000,
});

const axiosInstance = axios.create({
  baseURL: "서버 URL", // 기본 URL 설정
  timeout: 10000, // 요청 타임아웃(ms)
});

export { community, axiosInstance };
