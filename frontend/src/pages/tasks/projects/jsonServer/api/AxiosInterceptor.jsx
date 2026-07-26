import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // updated port
  timeout: 5000,
});

// (Keep interceptors as you wrote them)
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("📤 Outgoing Request:", config.method, config.url);
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("📥 Response Received:", response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error("❌ API Error:", error.response?.data);
    return Promise.reject(error);
  }
);

export default axiosInstance;
