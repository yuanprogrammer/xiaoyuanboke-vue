import request from "../../utils/request";

export default {
  getRoleList(param) {
    return request({
      url: '/api/role/list',
      method: 'post',
      data: param
    })
  },

  updateRolePermission(param) {
    return request({
      url: '/api/role/updatePermission',
      method: 'put',
      data: param
    })
  },

  insertRole(param) {
    return request({
      url: '/api/role/insertRole',
      method: 'post',
      data: param
    })
  },

  deleteRole(param) {
    return request({
      url: '/api/role/deleteRole',
      method: 'delete',
      data: param
    })
  }
}
