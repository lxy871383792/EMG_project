import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Train',
    component: ()=>import('../views/Train')
  },
  {
    path: '/home',
    name: 'Home',
    component: ()=>import('../views/Home')
  },
  {
    path: '/mark',
    name: 'Mark',
    component: ()=>import('../views/Mark')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
