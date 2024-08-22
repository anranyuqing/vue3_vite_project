declare namespace AuthRoute {
  interface RouteMeta {
    //路由标题(可用作document.title或菜单)
    title: string;
    //是否需要登录权限
    isAuth?: boolean;
    //那些用户有权限访问该路由，路由权限得两种方式1.接口直接过滤只返回用户拥有得权限2.前端路由过滤，根据permissions针对用户身份进行过滤
    permissions?: string[];
    //缓存页面
    keepAlive?: boolean;
    //菜单图标
    icon?: string;
    //菜单是否需要隐藏
    hide?: boolean;
    //外链链接
    href?: string;
    //布局容器
    layoutType?: "Basic";
    //路由参数
    routeParams?: string;
  }

  type RouteComponentType = () => Promise<typeof import("*.vue")>;

  interface Route {
    name?: string;
    path: string;
    redirect?: string;
    children?: Route[];
    component?: RouteComponentType;
    meta: RouteMeta;
  }
}
