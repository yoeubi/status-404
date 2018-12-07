import axios from "axios";

// KAKAO API 위경도로 주소 찾기
const kakaoAPI = axios.create({
  baseURL: process.env.REACT_APP_KAKAO_URL
});

// KAKAO API 연동 token 삽입
kakaoAPI.interceptors.request.use(config => {
  // .env 파일에 KAKAO_KEY 존재
  const KAKAOKEY = process.env.REACT_APP_KAKAO_KEY;
  if (KAKAOKEY) {
    config.headers = config.headers || {};
    config.headers["Authorization"] = "KakaoAK " + KAKAOKEY;
  }
  return config;
});

export default kakaoAPI;