import axios from "axios";

export const API = axios.create({
  baseURL: "https://baackend-ivdb.onrender.com/api"
});