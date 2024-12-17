import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-application-backend-tb0f.onrender.com/api/",
  withCredentials: true,
});
