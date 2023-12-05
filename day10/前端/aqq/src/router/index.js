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
        component: () => import("../views//mylist/shouye.vue")
      },    {
        path: "/zzjg",
        name: "zzjg",
        component: () => import("../views/mylist/zzjg.vue")
      }
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
  }
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
