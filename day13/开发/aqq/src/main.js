import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import http from "./utils/request"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import ElementLocale from "element-ui/lib/locale"
import '../src/style/element-variables.scss'
import '@icon'
// import VueI18n from "vue-i18n"
//引入element处理语言
import i18n from "./language/index"
ElementLocale.i18n((key, value) => i18n.t(key, value))

Vue.config.productionTip = false

Vue.prototype.$http = http

Vue.use(ElementUI)

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount("#app")
