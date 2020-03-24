import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../Controllers/HomeController';
import About from '../Controllers/AboutController'
import Login from "../Controllers/LoginController";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home.index()
  },
  {
    path: '/about',
    name: 'About',
    component: About.index()
  },
  {
    path: '/login',
    name: 'login',
    component: Login.index()
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
