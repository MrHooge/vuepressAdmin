import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import WorkPlace from "../views/dashboard/workplace/WorkPlace.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: WorkPlace
  },
  {
    path: "/analysis",
    name: "Analysis",
    component: () =>
      import(
        /* webpackChunkName: "Analysis" */ "../views/dashboard/analysis/Analysis.vue"
      )
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/login/Login.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
