import request from '@/utils/request'

 export default {
   findUserList(queryParam) {
     return request({
       url: '/api/user/list',
       method: 'post',
       data: queryParam
     })
   },

   findUserOperationList(queryParam) {
     return request({
       url: '/api/user/list/operation',
       method: 'post',
       data: queryParam
     })
   },

   findOperationType() {
     return request({
       url: '/api/userOperation/type',
       method: 'get'
     })
   }
 }
