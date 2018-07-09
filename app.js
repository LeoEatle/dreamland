//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    const AV = require('./libs/av-weapp-min.js');
    // LeanCloud 应用的 ID 和 Key
    AV.init({
      appId: 'wjfDfaKyqSWSMblv3FKMDwfE-gzGzoHsz',
      appKey: 'BIVyLF7x23t8qkf6pLMRtuhq',
    });
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  }
})
