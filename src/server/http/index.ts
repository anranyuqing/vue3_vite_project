import http from "../axios";
interface RequestConfig {
    headers: any
}
function request(url: string, method: string, params, data, config: Partial<RequestConfig>) {
    const { headers } = config
    return http({
        url, method, params, data, headers
    })
}

export const creatData = function (url: string, params: any, config = {}) {
    return request(
        url,
        'post',
        {},
        params,
        config
    )
}