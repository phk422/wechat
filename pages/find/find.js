// pages/find/find.js
Page({
  data: {
    list: [
      {
        list_tool: [
          {
            img: "/assets/image/find/friend_r.png",
            name: "朋友圈",
            url: "../moments/moments"
          }
        ]
      },
      {
        list_tool: [
          {
            img: "/assets/image/find/saoyisao.png",
            name: "扫一扫"
          },
          {
            img: "/assets/image/find/yaoyiyao.png",
            name: "摇一摇"
          }
        ]
      },
      {
        list_tool: [
          {
            img:"/assets/image/find/newFriend.png",
              name:"附近的人"
          }
        ]
      },
      {
        list_tool: [
          {
            img: "/assets/image/find/gouwu.png",
            name: "购物"
          },
          {
            img: "/assets/image/find/youxi.png",
            name: "游戏"
          }
        ]
      },
      {
        list_tool: [
          {
            img: "/assets/image/find/miniprogram.png",
            name: "小程序"
          }
        ]
      }
    ]
  },

  scanCode(e) {
    console.log(e)
    wx.scanCode({
      // 调用微信扫一扫
      success: (res) => {
        console.log("扫一扫回调结果",res)
      } 
    })
  }
})