// pages/note/note.js

var app = getApp();
//导入封装的请求
import request from '../../service/network.js'

Page({
  data: {
    list: [
      {
        list_tool: [
          {
            img: "/assets/image/find/newFriend.png",
            name: "新的朋友",
            url: "../newfriend/newfriend"
          },
          {
            img: "/assets/image/friends.png",
            name: "群聊",
            url: "../ws/ws"
          },
          {
            img: "/assets/image/label.png",
            name: "标签"
          },
          {
            img: "/assets/image/friends_2.png",
            name: "公众号"
          }
        ]
      },
    ]
  },
  goPage: function (e) {
    var url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    })
  },
  onLoad:function(){
    //传统的请求
    /*
    wx.request({
      url: app.globalData.ip+'friend/findAll',
      success: (res) => {
        console.log(res.data)
        this.setData({
          list: this.data.list.concat(res.data)
        })
      }
    })
    */

    // 使用封装的请求
    request({
      url: app.globalData.ip + 'friend/findAll',
    }).then(res => {
      console.log(res.data)
      this.setData({
        list: this.data.list.concat(res.data)
      })
    }).catch(err => console.log(err))
  }
})