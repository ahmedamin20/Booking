import axios from "axios";
import Cookies from "js-cookie"
const defaultAPI = axios.create({
  baseURL: "https://booking.ksbgarage.com/",
});

// Add a request interceptor
defaultAPI.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default defaultAPI;
