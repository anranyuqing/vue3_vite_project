import BasicLayout from '@/layouts/BasicLayout/BasicLayout'

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
  component: BasicLayout,
  meta: {
    title: "首页",
    isAuth: true,
  },
  children: [
    {
      name: "home",
      path: "",
      component: () => import('@/pages/home/index'),
      meta: {
        title: "首页",
        isAuth: true,
      }
    }
  ],
};

const otherRoute = [
  {
    name: 'chart',
  }
]

export const constantRoute = [
  rootRoute,
  homeRoute,
  {
    name: "login",
    path: "/login",
    component: () => import("@/pages/login/index"),
  },
];
