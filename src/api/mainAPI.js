import axios from 'axios';

// 백엔드 API 연동 Axios
const mainAPI = axios.create({
  // .env 파일에 API_URL 존재
  baseURL: process.env.REACT_APP_API_URL
})

// 백엔드 API 연동 token 삽입
mainAPI.interceptors.request.use(config => {
  // localstorage에서 token 가지고 오기
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers["Authorization"] = "Token " + token;
  }
  return config;
});

export default mainAPI;