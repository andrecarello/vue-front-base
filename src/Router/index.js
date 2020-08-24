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
		component: HomeController.view(),
		meta: {
            KeepAlive: false, // Need to be cached
            requiresAuth: true
        }
	},
	{
		path: '/auth',
		name: 'Auth',
		component: AuthController.view(),
		meta: {
            KeepAlive: false, // Need to be cached
            requiresAuth: false
        }
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {

	const {
		token
	} = _.model('User')

	if (to.matched.some(record => record.meta.requiresAuth)) {
		if ( !token ) {
			next({ name: 'Auth' })
		} else {
			next()
		}
	} else {
		next() // make sure to always call next()!
	}
});

export default router;
