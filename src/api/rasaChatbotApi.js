import axios from "axios";
import { getEnvVariables } from "../helpers";

const {VITE_API_URL} = getEnvVariables();

const rasaChatbotApi = axios.create({
  baseURL: 'http://127.0.0.1:4000/api',
})


// rasaChatbotApi.interceptors.request.use(config => {

//   config.headers = {
//     ...config.headers,
//     'x-token': localStorage.getItem('token'),
//   }
//   return config;
// })


export default rasaChatbotApi;