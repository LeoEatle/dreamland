// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sceneName: '你的名字新宿站',
    sceneIntro: '你的名字中千叶第一次进城看到的繁华的新宿站',
    sceneTag: '你的名字',
    sceneLocation: '东京 新宿站',
    sceneMore: '建议站在天桥上拍照',
    coverImgUrl: '../../assets/yourname1.jpg',
    imageList: [
      {
        url: '../../assets/yourname1.jpg',
        intro: '新宿站电影截图'
      },
      {
        url: '../../assets/yourname2.jpg',
        intro: '新宿站实景'
      },
      {
        url: '../../assets/yourname3.jpg',
        intro: 'LABI电影截图'
      },
      {
        url: '../../assets/yourname4.jpg',
        intro: 'LABI实景'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    let id = option.id
    console.log('id', id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})