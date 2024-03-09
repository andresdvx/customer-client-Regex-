import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://localhost:30000/api/v1/",
  withCredentials: true,
});

export default axiosConfig;
