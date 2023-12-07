import http from "./request"

// 登录页面
export const querylogin = (data) => http.post(http.addurl("/sys/login"), data)
// 首页
export const queryhpage = () => http.post(http.addurl("/sys/profile"))

// 组织结构接口
// 添加部门
export const queryzzjg = (data) => http.post(http.addurl("/company/department"), data)
// 查询部门列表
export const querylist = (data) => http.get(http.addurl('/company/department'), { data })
// 修改部门
// export const querybj = (params) => http.put(http.addurl(`/company/department/${params.id}`), { params })

// 删除部门
export const delapi = (params) => http.delete(http.addurl(`/company/department/${params.id}`))
// 回填部门
export const htzpi = (params) => http.get(http.addurl(`/company/department/${params.id}`), params)
// 编辑
export const bjapi = (params) => http.put(http.addurl(`/company/department/${params.id}`), params)



// 权限管理接口
// 数据列表
export const qxsjapi = (params) => http.get(http.addurl('/sys/permission'), { params })
// 添加权限点
export const addapi = (params) => http.post(http.addurl('/sys/permission'), params)
// 删除权限点
export const qxdelapi = (params) => http.delete(http.addurl(`/sys/permission/${params.id}`))
// 编辑回填权限点
export const qxhtapi = (params) => http.get(http.addurl(`/sys/permission/${params.id}`), params)
// 编辑权限点
export const qxbjapi = (params) => http.put(http.addurl(`/sys/permission/${params.id}`), params)





// 员工接口
export const yglbapi = (params) => http.get(http.addurl('/sys/user'), params)
// 回填接口
export const yghtapi = (id) => http.get(http.addurl(`/sys/user/${id}`))
// 更改员工个人信息
export const ygggapi = (params) => http.put(http.addurl(`/employees/${params.id}/personalInfo`), params)
// 获取员工个人信息
export const yggrapi = (id) => http.get(http.addurl(`/employees/${id}/personalInfo`))
// 保存员工基本信息
export const ygjbapi = (id) => http.put(http.addurl(`/sys/user/${id}`))
// 获取员工岗位信息
export const yggwapi = (id) => http.get(http.addurl(`/employees/${id}/jobs`))
// 保存员工岗位信息
export const yggwgxapi = (id) => http.put(http.addurl(`/employees/${id}/jobs`))












