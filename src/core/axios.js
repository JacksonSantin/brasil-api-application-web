import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://brasilapi.com.br/api"
})

export { axiosInstance }