export function checkStatus(status: number, msg = '') {
  switch (status) {
    case 201:
      window.$message.error(msg || '服务器开小差了，请稍后重试!')
      break
    case 400:
      window.$message.error(msg)
      break
    case 401:
      window.$message.warning('登录失效，请重新登录!')
      localStorage.clear()
      setTimeout(() => {
        window.location.hash = '/login'
      }, 1000)
      break
    case 408:
      window.$message.warning('接口请求超时，请刷新页面重试!')
      break
    case 500:
      window.$message.error(msg || '请求异常，请联系管理员!')
      break
    default:
      window.$message.error(msg)
  }
}
