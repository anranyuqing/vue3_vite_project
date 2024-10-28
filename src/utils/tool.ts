/**
 * @class 工具函数
 * @param { promise } 宏任务
 * @returns { extraErr } 错误扩展
 * @description 用于简化await错误捕获
 */

export function to<T>(promise: Promise<T>, extraErr?: undefined): Promise<any[] | (T | null)[]> {
  return promise
    .then((data) => [null, data])
    .catch((err) => {
      if (extraErr) {
        Object.assign(err, extraErr)
      }
      return [err, undefined]
    })
}
