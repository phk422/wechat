// components/p-scroll-view/p-scroll-view.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  externalClasses: ['item-avatar','title'],

  /**
   * 组件的方法列表
   */
  methods: {
    // 页面跳转api
    goPage: function (e) {
      console.log(e.currentTarget.dataset.name)
      wx.navigateTo({
        url: e.currentTarget.dataset.url
      })

      // 发送事件扫一扫
      if (e.currentTarget.dataset.name === '扫一扫') {
        this.triggerEvent("scanCode")
      }
    }
  }
})
