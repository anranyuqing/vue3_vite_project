/**
 * @Author lixw
 * @Date 2024-09-28 10:05:19
 * @Description 网络拦截器
 */

import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { getToken } from '@/utils'
export function setupInterceptors(http: AxiosInstance) {
  http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getToken()
    if (token) {
      config.headers['CsToken'] = token
    }
    return config
  })

  http.interceptors.response.use(
    function (response) {

      return response
    },
    function (error) {}
  )
}
