export default function request(options) {
  return new Promise((reslove, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',//默认get请求
      data: options.data || {},
      success: reslove,
      fail: reject
    })
  })
}



// export default function request(options) {
//   // 防止回调地狱
//   return new Promise((reslove,reject) => {
//     wx.request({
//       url: options.url,
//       method: options.method || 'get',//默认get请求
//       data: options.data || {},
//       success: function (res) {
//         reslove(res)
//       },
//       fail: function (err) {
//         reject(err)
//       }
//     })
//   })
// }