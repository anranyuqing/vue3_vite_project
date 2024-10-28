import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './constant'
import { transformAuthRouteToVueRoutes } from './utils'
import { createRouterGuards } from './guards'
import type { App } from 'vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: transformAuthRouteToVueRoutes(constantRoute)
})
createRouterGuards(router)
export function setupRouter(app: App) {
  app.use(router)
}

export const routerName = (key: string) => key
