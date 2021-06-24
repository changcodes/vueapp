import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    // redirect: '/login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
