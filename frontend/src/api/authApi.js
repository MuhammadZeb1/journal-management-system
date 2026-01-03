import axios from "axios";
 // Redux store

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend
});

// Automatically attach token if exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
