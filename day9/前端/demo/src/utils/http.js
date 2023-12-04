import http from "./request"

// 登录页面
export const querylogin = (data) => http.post(http.addurl("/sys/login"), data)

// 首页
export const queryhpage = () => http.post(http.addurl("/sys/profile"))
// 添加部门
export const queryzzjg = (data) => http.post(http.addurl("/company/department"),data)
// 查询部门列表
export const querylist = (data)=>http.get(http.addurl('/company/department'),{data})
// 修改部门
export const querybj = (params)=>http.put(http.addurl(`/company/department/${params.id}`),{params})

// 删除部门
export const delapi = (params)=>http.delete(http.addurl(`/sys/role/${params.pid}`),{params})
// 查询部门



