// npm i vue-i18n@8.22.2 安装插件8.22.2版本
// 在main.js里使用
// import i18n from '@/lang'
// Vue.use(ElementUI, { i18n: (key, value) => i18n.t(key, value) })
// 在new Vue里实例化  i18n,
import Vue from 'vue'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import Cookies from 'js-cookie'
import VueI18n from 'vue-i18n'
import en from './en'
import zh from './zh'
Vue.use(VueI18n)
export default new VueI18n({
  locale: Cookies.get('lang') || 'zh',
  messages: {
    // 语言包 en: {}
    en: { ...enLocale, ...en },
    zh: { ...zhLocale, ...zh }
  },
  silentTranslationWarn: true
})
