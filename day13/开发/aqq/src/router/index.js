import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"
import { getToken } from "../utils/cookejs"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
		redirect:'/shouye',
    children: [
      {
        path: "/shouye",
        name: "shouye",
        meta: { title: '首页' },
        component: () => import("../views//mylist/shouye.vue")
      },  
        {
        path: "/zzjg",
        name: "zzjg",
        meta: { title: '组织架构' },
        component: () => import("../views/mylist/zzjg.vue")
      },
        {
        path: "/qx",
        name: "qx",
        meta: { title: '权限管理' },
        component: () => import("../views/mylist/qx.vue")
      },
      {
        path: "/yg",
        name: "yg",
        meta: { title: '' },
        meta: { title: '员工' },
        component: () => import("../views/mylist/yg.vue")
      
      },
      {
        path: "/ygck",
        name: "ygck",
        component: () => import("../views/mylist/ygck.vue")
      
      },
      {
        path: "/gssz",
        name: "gssz",
        meta: { title: '公司设置' },
        component: () => import("../views/mylist/gssz.vue")
      
      },
   
    ]
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  let tokens = getToken()
  if (tokens && to.path == "/login") {
    next("/")
  } else if (!tokens && to.path != "/login") {
    next("/login")
  } else {
    next()
  }
})

export default router
