import http from "./request"

// 登录页面
export const querylogin = (data) => http.post(http.addurl("/sys/login"), data)

// 首页
export const queryhpage = () => http.post(http.addurl("/sys/profile"))
