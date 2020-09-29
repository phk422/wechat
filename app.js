//app.js
App({
  //页面加载初始化一些数据
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息,这种方式已经被微信官方废弃“详见：https://developers.weixin.qq.com/community/develop/doc/0000a26e1aca6012e896a517556c01”
   wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId

              this.globalData.userInfo = res.userInfo
              console.log(this.userInfo)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
  },
  globalData: {
    userInfo: null,
    ip: "http://localhost:8080/miniprogram/"
  }
})