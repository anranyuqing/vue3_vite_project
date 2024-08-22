import type { Router } from "vue-router";
import { createPermissionGuard } from "./permission";
export function createRouterGuards(router: Router) {
  router.beforeEach((to, from, next) => {
    createPermissionGuard(to, from, next);
  });
}
