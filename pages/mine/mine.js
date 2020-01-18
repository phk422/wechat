// pages/mine/mine.js
var app = getApp()
Page({
  data: {
    userInfo: {},
    list: [
      {
        list_tool: [
          {
            img: "/assets/image/mine/wxpay.png",
            name: "支付",
            url: "../audio/audio"
          },
        ]
      },
      {
        list_tool: [
          {
            img: "/assets/image/mine/sc_2.png",
            name: "收藏",
            url: "../upload/upload"
          },
          {
            img: "/assets/image/mine/photo.png",
            name: "相册"
          },
          {
            img: "/assets/image/mine/card.png",
            name: "卡包",
            url: "../picker/picker"
          },
          {
            img: "/assets/image/mine/bq_2.png",
            name: "表情"
          }
        ]
      },
      {
        list_tool: [
          {
            img: "/assets/image/mine/setting.png",
            name: "设置",
            url: "../info/info"
          }
        ]
      },
    ]
  },
  goPage: function (event) {
    console.log(event.currentTarget.dataset.log);//打印日志
    // 页面跳转
    wx.navigateTo({
      url: event.currentTarget.dataset.url
    })
  },
  
  
})
