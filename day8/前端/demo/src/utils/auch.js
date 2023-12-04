import Cookies from "js-cookie"

// 设置储存cookie的名字
var Type = "tokens"

// 储存token
function setToken(value) {
  Cookies.set(Type, value, { expires: 1 })
}

// 获取token
function getToken() {
  return Cookies.get(Type)
}

//移除token
function removetoken() {
  Cookies.remove(Type)
}
export { setToken, getToken, removetoken }
