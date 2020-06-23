import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../Controllers/HomeController";
import About from "../Controllers/AboutController";
import Login from "../Controllers/LoginController";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home.index(),
    meta: {
      KeepAlive: true,
      requireLogin: true
    }
  },
  {
    path: "/about",
    name: "about",
    component: About.index(),
    meta: {
      KeepAlive: true,
      requireLogin: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login.index()
  }
];



const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  const {
    email,
    loggedIn
  } = _.model('user');

  // verifica se é obrigatório o estar logado
  if (to.matched.some(record => record.meta.requireLogin)) {

    // redirect -> login || home (caso esteja logado)
    if(!loggedIn && !email) next({name: "login"});
    else next()

  } else {
    next()
  }
});



export default router