import axios from "axios";

const kakaoAPI = axios.create({
  baseURL: process.env.REACT_APP_KAKAO_URL
});

kakaoAPI.interceptors.request.use(config => {
  const KAKAOKEY = process.env.REACT_APP_KAKAO_KEY;
  if (KAKAOKEY) {
    config.headers = config.headers || {};
    config.headers["Authorization"] = "KakaoAK " + KAKAOKEY;
  }
  return config;
});

export default kakaoAPI;