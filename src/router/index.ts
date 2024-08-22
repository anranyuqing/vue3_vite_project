import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoue } from "./constant";
import { transformAuthRouteToVueRoutes } from "./utils";
import { createRouterGuards } from "./guards";
import type { App } from "vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: transformAuthRouteToVueRoutes(constantRoue),
});
createRouterGuards(router);
export function setupRouter(app: App) {
  app.use(router);
}
