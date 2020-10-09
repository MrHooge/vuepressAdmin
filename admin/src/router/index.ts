import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import WorkPlace from '../views/dashboard/workplace/WorkPlace.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: WorkPlace,
	},
	{
		path: '/analysis',
		name: 'Analysis',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/analysis/Analysis.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import(/* webpackChunkName: "about" */ '../views/login/Login.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
