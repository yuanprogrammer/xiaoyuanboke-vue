import request from '@/utils/request'

export default {
  getPermissionList() {
    return request({
      url: '/api/permission/list',
      method: 'get'
    })
  },

  getPermissionListByRoleKey(param) {
    return request({
      url: '/api/permission/list',
      method: 'post',
      data: param
    })
  },

  selectModuleList(param) {
    return request({
      url: '/api/permission/selectModule',
      method: 'post',
      data: param
    })
  },

  insertModule(param) {
    return request({
      url: '/api/permission/insertModule',
      method: 'post',
      data: param
    })
  },

  updateModule(param) {
    return request({
      url: '/api/permission/updateModule',
      method: 'put',
      data: param
    })
  },

  deleteModule(param) {
    return request({
      url: '/api/permission/deleteModule',
      method: 'delete',
      data: param
    })
  },

  selectActionList(param) {
    return request({
      url: '/api/permission/selectAction',
      method: 'post',
      data: param
    })
  },

  insertAction(param) {
    return request({
      url: '/api/permission/insertAction',
      method: 'post',
      data: param
    })
  },

  updateAction(param) {
    return request({
      url: '/api/permission/updateAction',
      method: 'put',
      data: param
    })
  },

  deleteAction(param) {
    return request({
      url: '/api/permission/deleteAction',
      method: 'delete',
      data: param
    })
  },
}
