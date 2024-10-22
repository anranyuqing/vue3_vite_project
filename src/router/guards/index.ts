import type { Router } from 'vue-router'
import { createPermissionGuard } from './permission'



export function createRouterGuards(router: Router) {
  router.beforeEach((to, from, next) => {
    createPermissionGuard(to, from, next)
  

    if (to.meta.title) {
      document.title = to.meta.title as string
    } else { 
      document.title = import.meta.env.VITE_APP_TITLE

    }
  })
}
