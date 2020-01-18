Page({
  data:{
    
  },
  getSystemInfo: function () {
    // 获取当前设备的信息
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          systemInfo: res
        })
      }
    })
  }
})