import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/api/system/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo() {
  return request({
    url: '/api/system/getInfo',
    method: 'post',
  })
}

export function logout() {
  return request({
    url: '/api/system/logout',
    method: 'post'
  })
}

export function wxLogin() {
  return request({
    url: '/api/system/wx_login',
    method: 'get'
  })
}
