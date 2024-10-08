import { setupInterceptors } from './interceptors'
import axios from 'axios'
const http = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 10000
})

setupInterceptors(http)
export default http
