import Controller from "./Controller";

class AboutController extends Controller{

  static index () { return () => import(/* webpackChunkName: "about" */ '../Views/About.vue') }

} export default AboutController;
