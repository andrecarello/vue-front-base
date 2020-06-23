import Controller from "./Controller";

class LoginController extends Controller{

  static index () { return () => import(/* webpackChunkName: "login" */ '../resources/Views/Login') }

} export default LoginController;
