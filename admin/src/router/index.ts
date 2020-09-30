import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// import NProgress from "nprogress"; // progress bar
// import "nprogress/nprogress.css"; // progress bar style

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "登录页",
    component: () => import("@/views/login/login.vue")
  },
  // {
  // 	path: '*',
  // 	name: '404',
  // 	component: () => import('@/views/exception/404'),
  // },
  // {
  // 	path: '/403',
  // 	name: '403',
  // 	component: () => import('@/views/exception/403'),
  // },
  {
    path: "/",
    name: "首页",
    component: () => import("@/views/dashbroad/workspace/workplace.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
