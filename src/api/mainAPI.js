import axios from 'axios';

const mainAPI = axios.create({
    baseURL: process.env.REACT_APP_URL
})

mainAPI.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
});

export default mainAPI;