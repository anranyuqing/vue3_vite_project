export const rootRoute: AuthRoute.Route = {
  name: "root",
  path: "/",
  redirect: "/home",
  meta: {
    title: "Root",
    isAuth: true,
  },
};

export const homeRoute: AuthRoute.Route = {
  name: "home",
  path: "/home",
  component: () => import("@/pages/home/index"),
  meta: {
    title: "首页",
    isAuth: true,
    layoutType: "Basic",
  },
};

export const constantRoue = [
  rootRoute,
  homeRoute,
  {
    name: "login",
    path: "/login",
    component: () => import("@/pages/login/index"),
  },
];
