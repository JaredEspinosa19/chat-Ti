import axios from "axios";
import { getEnvVariables } from "../helpers";

// const {VITE_API_URL} = getEnvVariables();

const rasaChatbotApi = axios.create({
  baseURL: 'https://0633-189-156-160-123.ngrok-free.app/api',
})




export default rasaChatbotApi;