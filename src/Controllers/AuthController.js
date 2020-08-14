// -> import default controller
import Controller from './Controller';

class AuthController extends Controller {
	static view() {
		return () => import(/* webpackChunkName: "auth" */ '../views/Auth/index.vue');
	}
}

export default AuthController;
