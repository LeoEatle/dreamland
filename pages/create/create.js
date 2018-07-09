// pages/create/create.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    photo_list: [
      
    ],
    title: '',
    description: '',
    tag: '',
    locationInfo: ''
  },

  /**
   * 绑定标题的输入
   */
  onInputTitle: function(event) {
    //this.data.title = event.detail.value;
    this.setData({
      title: event.detail.value
    })
  },
  /**
   * 绑定description的输入
   */
  onInputDescription: function(event) {
    //this.data.description = event.detail.value;
    this.setData({
      description: event.detail.value
    })
  },
  /**
   * 绑定tag的输入
   */
  onInputTag: function(event) {
    this.setData({
      tag: event.detail.value
    })
  },
  /**
   * 绑定location
   */
  onInputLocation: function(event) {
    this.setData({
      locationInfo: event.detail.value
    })
  },

  /**
   * 打开相簿选择截图
   */
  chooseScreenShot: function(){
    var vm = this;
    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compress'],
      sourceType: ['album'],

      success: function(res) {
        var newPhotoList = vm.data.photo_list;
        console.log(res.tempFilePaths);
        res.tempFilePaths.forEach((item, index)=>{
          newPhotoList.push(item);
        });
        vm.setData({
          photo_list: newPhotoList
        })
        // new AV.File('file-name', {
        //   blob: {
        //     uri: tempFilePath,
        //   },
        // }).save().then(
        //   file => console.log(file.url())
        //   ).catch(console.error);
      },
    })
  
  },

  /**
   * 打开地图进行地位
   */
  // openLocation: function(event){
  //   var vm = this;
  //   wx.chooseLocation({
  //     success: function(res) {
  //       vm.setData({
  //         location: {
  //           name: res.name,
  //           address: res.address,
  //           latitude: res.latitude,
  //           longitude: res.longitude
  //         }
  //       })
  //     },
  //   })
  // },

  /**
   * 先上传图片
   */
  uploadScreenShot: function() {
    const AV = require('../../libs/av-weapp-min.js');
    var screenShotUrls;
    var vm = this;
    vm.data.photo_list.map(tempFilePath => () => new AV.File('filename', {
      blob: {
        uri: tempFilePath,
      },
    }).save()).reduce(
      (m, p) => m.then(v => AV.Promise.all([...v, p()])),
      AV.Promise.resolve([])
      ).then(
        (files) => {
          console.log(files.map(file => file.url()));
          screenShotUrls = files.map(file => file.url());
          vm.uploadScene(screenShotUrls);
        }).catch(console.error);
  },

  /**
   * 上传新的场景
   */
  uploadScene: function(screenShotUrls) {
    const AV = require('../../libs/av-weapp-min.js');
    var vm = this;
    var Scene = AV.Object.extend('Scene');
    var scene = new Scene();
    scene.set('title', vm.data.title);
    scene.set('description', vm.data.description);
    scene.set('tag', vm.data.tag);
    scene.set('locationInfo', vm.data.locationInfo);
    
    /**
     * 暂时不需要定位功能，之后可以再反注释掉
     */
    // 第一个参数是： latitude ，纬度
    // 第二个参数是： longitude，经度
    //var point = new AV.GeoPoint(vm.data.location.latitude, vm.data.location.longitude);
    //scene.set('geoPoint', point);
    //scene.set('location', vm.data.location);
    
    scene.set('screenShotUrls', screenShotUrls);
    scene.save().then((result)=>{
      console.log(result);
      wx.navigateBack({
        delta: 1
      });
    }, (error)=>{
      console.error(error);
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const AV = require('../../libs/av-weapp-min.js');
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