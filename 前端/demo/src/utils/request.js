import axios from "axios"
import { Loading, MessageBox } from "element-ui"
import DEFAULTSTATUS from "./default.js"
import { removetoken, getToken } from "./auch.js"
import router from "@/router/index.js"
let loading

let http = axios.create({
  baseURL: "/",
  timeout: 1000 * 30,
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
  // 表示跨域请求时是否需要使用凭证
  withCredentials: true
})

// 请求拦截器
http.interceptors.request.use((config) => {
  loading = Loading.service({ fullscreen: true })
  config.headers.Authorization = "bearer" + " " + getToken()
  console.log(config.headers.Authorization)
  return config
}),(err) => {
    // 关闭loading
    loading.close()
    return Promise.reject(err)
  }

// 响应拦截器
http.interceptors.response.use((response) => {
  // 关闭loading
  loading.close()
  if (response.data && response.data.code === 10002) {
    // 401, token失效
    removetoken()
    router.push({
      name: "login"
    })
  }
  return response.data
}),
  (err) => {
    let title = ""
    let message = ""
    // 关闭loading
    loading.close()
    if (err && err.response) {
      /**后端返回的报错的信息 */
      message = err.response.data.message
      // 401, token失效
      switch (
        err.response.code // 跨域存在获取到的状态码的情况, status(随后端定义变化而变化,code)
      ) {
        case DEFAULTSTATUS.ERRORPRO:
          title = "错误请求"
          break // 停止循环
        case 401:
          title = "资源未授权"
          break
        case 403:
          title = "禁止访问"
          break
        case 404:
          title = "未找到所请求的资源"
          break
        case 405:
          title = "不允许使用该方法"
          break
        case 408:
          title = "请求超时"
          break
        case 500:
          title = "内部服务器错误"
          break
        case 501:
          title = "未实现"
          break
        case 502:
          title = "网关错误"
          break
        case 503:
          title = "服务不可用"
          break
        case 504:
          title = "网关超时"
          break
        case 505:
          title = "HTTP版本不受支持"
          break
        default:
          title = err.response.status
      }
      return MessageBox.alert(message, title, {
        type: "warning"
      })
    } else {
      // 跨域获取不到状态码或者其他状态进行的处理
      return MessageBox.alert("请联系系统管理员, 或稍后再试!", "未知错误", {
        type: "err"
      })
    }
  }

/**封装动态代理标识
 * process.env.VUE_APP_IDENT
 *url : /login
 */
http.addurl = function (url) {
  // console.log(url)
  console.log(process.env.VUE_APP_IDENT + url)
  return process.env.VUE_APP_IDENT + url
}

export default http
