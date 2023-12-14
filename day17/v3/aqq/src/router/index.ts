import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/vue3.0',
    name: 'vue3.0',
    
    component: () => import(/* webpackChunkName: "vue3.0" */ '../views/vue3.0.vue')
  },
  {
    path: '/vueqwe',
    name: 'vueqwe',
    
    component: () => import(/* webpackChunkName: "vueqwe" */ '../views/vueqwe.vue')
  },
  {
    path: '/vueasd',
    name: 'vueasd',
    
    component: () => import(/* webpackChunkName: "vueasd" */ '../views/vueasd.vue')
  },
  {
    path: '/dtqh',
    name: 'dtqh',
    
    component: () => import(/* webpackChunkName: "dtqh" */ '../views/dtqh.vue')
  },
  {
    path: '/dinfindeporps',
    name: 'dinfindeporps',
    
    component: () => import(/* webpackChunkName: "dinfindeporps" */ '../views/dinfindeporps.vue')
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})




export default router
