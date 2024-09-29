import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { getToken } from "@/utils";
export function createPermissionGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) {

  const isLogin = getToken();
  if (!isLogin) {
    if (!to.meta.isAuth) {
      next();
    } else {
      const redirect = to.fullPath;
      next({ name: "login", query: { redirect } });
    }
  } else {
    if (to.path !== '/login') {
      next();
    } else {

      next({ path: "/" });
    }
  }
}
