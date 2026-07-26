// ----------------------------------------------
// axiosInstance.js
// ----------------------------------------------

import axios from "axios";

// 1) Create a reusable axios instance
//    → This allows you to set baseURL and headers ONCE
//    → Then use it everywhere without repeating config.
const axiosInstance = axios.create({
  baseURL: "http://localhost:1551", // your backend URL
  timeout: 5000,                    // auto-cancel if API takes too long
});

// ---------------------------------------------------------
// 🚀 REQUEST INTERCEPTOR
// Runs BEFORE every API request leaves your app
// ---------------------------------------------------------
axiosInstance.interceptors.request.use(
  (config) => {
    // 🔍 PURPOSE:
    // 1. You can attach token to headers here (Auth token)
    // 2. You can log or debug request info
    // 3. You can modify config before sending (headers/method/url)

    console.log("📤 Outgoing Request:");
    console.log("➡ Method:", config.method);
    console.log("➡ URL:", config.url);
    console.log("➡ Headers:", config.headers);
    console.log("➡ Body:", config.data);

    // MUST return config, otherwise request will not go ahead
    return config;
  },
  (error) => {
    // If something fails BEFORE request is sent
    console.error("❌ Request Error:", error);
    return Promise.reject(error);
  }
);

// ---------------------------------------------------------
// 🚀 RESPONSE INTERCEPTOR
// Runs AFTER server sends response back to your app
// ---------------------------------------------------------
axiosInstance.interceptors.response.use(
  (response) => {
    // 🔍 PURPOSE:
    // 1. Log responses for debugging
    // 2. Modify response before giving to UI
    // 3. Automatically handle common responses (200, 201, etc.)

    console.log("📥 Response Received:", response.status, response.config.url);

    return response; // MUST return the response
  },
  (error) => {
    // When server returns errors: 400, 401, 403, 500 etc.

    console.error("❌ API Error Occurred!");

    // Show API error message if available
    console.error("➡ Error Response:", error.response?.data);

    // Example: auto logout if token expired
    if (error.response?.status === 401) {
      console.warn("⚠️ Unauthorized! Token expired. Redirect user to login.");
      // redirect to login
    }

    return Promise.reject(error); // Forward error to frontend UI
  }
);

// Export instance so all API calls use the same settings
export default axiosInstance;
