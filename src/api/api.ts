import axios from "axios";

const API = axios.create({
  baseURL: "https://orufy-backend3.onrender.com/api"
});

export default API;