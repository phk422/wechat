// pages/moments/moments.js
var app = getApp()
import request from "../../service/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo
    })

    request({
      url: app.globalData.ip + "friend/getMoments"
    }).then(res => {
      console.log(res.data)
      this.setData({
        moments: res.data
      })
    }).catch(err => console.log(err))
  },

  // 监听图片的点击
  preview(event) {
    const imgurl = event.currentTarget.dataset.imgurl;
    const imglist = event.currentTarget.dataset.imglist;
    console.log(event)
    // 官方：在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。
    wx.previewImage({
      current: imgurl, // 当前显示图片的url
      urls: imglist  // 预览图片的数组
    })
  }


})