import Vue from 'vue';
import VueRouter from 'vue-router';

// -> import views
import HomeController from '../controllers/HomeController';
import AuthController from '../controllers/AuthController';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeController.view()
	},
	{
		path: '/auth',
		name: 'Auth',
		component: AuthController.view()
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
