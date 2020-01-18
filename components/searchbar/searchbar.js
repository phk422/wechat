// components/searchbar/searchbar.js
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
    inputShowed: false,
    inputVal: "",
    pagePath: [
      {
        name: "通讯录",
        path: "/pages/note/note"
      },
      {
        name: "发现",
        path: "/pages/find/find"
      },
      {
        name: "我的",
        path: "/pages/mine/mine"
      },
      {
        name: "朋友圈",
        path: "/pages/moments/moments"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showInput: function () {
      this.setData({
        inputShowed: true
      });
    },
    hideInput: function () {
      this.setData({
        inputVal: "",
        inputShowed: false
      });
    },
    clearInput: function () {
      this.setData({
        inputVal: ""
      });
    },
    inputTyping: function (e) {
      this.setData({
        inputVal: e.detail.value
      });
    }
  }
})
