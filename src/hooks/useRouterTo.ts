import { useRouter } from 'vue-router'
import type { RouteLocationRaw } from 'vue-router'
import { routerName } from '@/router'
type TabStatus = '_blank' | '_self'

export function useRouterTo() {
  const router = useRouter()

  /**
   * 路由跳转
   * @param to - 需要跳转的路由
   * @param newTab - 是否在新的浏览器Tab标签打开
   */
  function routerPush(to: RouteLocationRaw, newTab?: TabStatus) {
    const routerConf = router.resolve(to)
    if (newTab === '_blank') {
      window.open(routerConf.href, '_blank')
    } else {
      router.push(to)
    }
  }

  /**
   * 跳转首页
   * @param newTab - 在新的浏览器标签打开
   */
  function toHome(newTab?: TabStatus) {
    routerPush({ name: routerName('Home') }, newTab)
  }

  /**
   * 跳转登录页
   */
  function toLogin() {
    routerPush({ name: routerName('Home') })
  }

  return {
    toHome,
    toLogin,
    routerPush
  }
}
