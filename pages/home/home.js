//index.js
//获取应用实例
const app = getApp()
var bmap = require('../../libs/bmap-wx.min.js')
var wxMarkerData = []
var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js')
var qqmapsdk = new QQMapWX({
  key: '6FVBZ-2N7KQ-6IB5N-GJDNL-UQZPS-RHB3E'
})

Page({
  data: {
    tempFilePaths: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  onShareAppMessage: function () {
    if (!this.data.id) {
      // todo 返回默认分享信息，比如小程序首页
    }
    return {
      title: '随你赞',
      path: 'xxx?id=' + this.data.id,
      success: function (res) {
      }
    };
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      hdimg: e.detail.userInfo.avatarUrl,
      hdname: e.detail.userInfo.nickName,
    })
  },
  bindGetUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      hdimg: e.detail.userInfo.avatarUrl,
      hdname: e.detail.userInfo.nickName,
    })
  }
})
