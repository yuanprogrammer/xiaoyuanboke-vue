import request from "../../utils/request";

export default {
  getSysUserList(param) {
    return request({
      url: '/api/system/getSysUserList',
      method: 'post',
      data: param
    })
  }
}
