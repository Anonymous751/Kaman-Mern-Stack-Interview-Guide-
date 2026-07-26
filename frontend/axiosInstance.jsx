import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:1551",
  timeout: 10000,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // console.error("API error:", error.response?.status || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;

