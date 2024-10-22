import http from '../axios'
interface RequestConfig {
  headers: any
}
function request(url: string, method: string, params: any, data: any, config: Partial<RequestConfig>) {
  return http({
    url,
    method,
    params,
    data,
    ...config
  })
}

export const query = function (url: string, params: any, config = {}) {
  return request(url, 'get', params, {}, config)
}

export const creat = function (url: string, data: any, config = {}) {
  return request(url, 'post', {}, data, config)
}
