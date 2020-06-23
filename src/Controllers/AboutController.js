import Controller from "./Controller";

class AboutController extends Controller{

  static index () { return () => import(/* webpackChunkName: "about" */ '../resources/Views/About') }

} export default AboutController;
