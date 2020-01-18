// pages/mine/mineCpn/p-profile/p-profile.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    userInfo: null
  },

  externalClasses: ['item-avatar','padding','flex','title'],

  /**
   * 组件的方法列表
   */
  methods: {
    
  },

  lifetimes: {
    attached() {
      //调用应用实例的方法获取全局数据
      this.setData({
        userInfo: app.globalData.userInfo  // 页面加载的时候获取用户的信息
      })
    }
  }
})
