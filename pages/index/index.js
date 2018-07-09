//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    scene_list: [
      {
        id: 1,
        name: '《Death Note》公安局前霞关',
        imgUrl: '../../assets/death_note1.png',
        description: 'DN前期夜神月和南空直美最精彩的对决！在东京公安总局前散步到日比谷公园。',
        tag: '《死亡笔记》',
        location: '东京 霞关 总务省'
      },
      {
        id: 2,
        name: '《无头骑士异闻录》西口公园',
        imgUrl: '../../assets/drrr.png',
        description: '这是池袋西口公园，帝人来到池袋出地铁口的标志，帝人和小学故友约在这里见面，一个精彩的池袋故事即将展开',
        tag: '《无头骑士异闻录》',
        location: '东京 池袋 西口公园'
      },
      {
        id: 3,
        name: '《无头骑士异闻录》Sunshine City',
        imgUrl: '../../assets/drrr2.png',
        description: '这是在池袋地铁站附近的Sunshine City，无头骑士塞尔提的经典背景，塞尔提的第一次发威即是从大厦天台直冲而下，华丽降落在这个地方',
        tag: '《无头骑士异闻录》',
        location: '东京 池袋 Sunshine City'
      },
      {
        id: 4,
        name : '《Death Note》日比谷公园',
        imgUrl: '../../assets/death_note2.png',
        description: '夜神月和南空直美散步的终点，也是夜神月第一次感受到计划要被识破的最大危机感，是整集的最高潮，南空直美在此提出返回总务省，夜神月需要在这短短的路程中想出办法得到南空直美真正的名字...',
        tag: '《死亡笔记》',
        location: '东京 霞关 日比谷公园'
      }
    ]
  },
  // 切换页面
  togglePage: function(event) {
    console.log(event.currentTarget.id);
    let id = event.currentTarget.id;
    
    // this.setData({
    //   active: {
    //     explore: id == "explore"? "tab_item_active": "tab_item",
    //     me: id == "me"? "tab_item_active": "tab_item"
    //   }
    // })

    if (id == "me") {
      this.bindGoMe();
    }

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  // 跳转到创建场景
  bindGoCreate: function() {
    wx.navigateTo({
      url: '../create/create',
    })
  },
  // 跳转到“我”
  bindGoMe: function() {
    wx.navigateTo({
      url: '../me/me',
    })
  },

  bindGoDetail: function(e) {
    console.log('e', e)
    let data = e.currentTarget.dataset
    console.log(data)
    let id = data.id
    wx.navigateTo({
      url: `../detail/detail?id=${id}`
    })
  },

  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  }
})
