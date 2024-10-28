/**
 * @Author lixw
 * @Date 2024-09-28 10:05:19
 * @Description 网络拦截器
 */

import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { getToken } from '@/utils'
import { checkStatus } from './checkStatus'

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
      const { status, data } = response
      if (response.status === 200) {
        return response.config.responseType === 'blob' ? response : data
      } else {
        if (status === 404) {
          return Promise.reject(data)
        }
        return Promise.reject(data)
      }
    },
    function (error) {
      const {
        status,
        response: { data }
      } = error
      checkStatus(status)
      return Promise.reject(data)
    }
  )
}
