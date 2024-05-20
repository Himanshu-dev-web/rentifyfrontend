import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://rentifybackend.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;