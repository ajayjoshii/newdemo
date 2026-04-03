import axios from "axios";

const API = axios.create({
    baseURL: "https://newdemo-jvld.onrender.com/api"
});

export default API;