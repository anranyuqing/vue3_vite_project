import axios, { InternalAxiosRequestConfig } from 'axios'
const http = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    timeout: 10000,
})

http.interceptors.request.use((
    config: InternalAxiosRequestConfig
) => {
    console.log('config', config)
    return config
})

export default http