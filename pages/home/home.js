// pages/home/home.js
const api = require("../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  // 首页头部 banner
  getHomeBanners() {
    var that = this;
    api._post('/homepage/banners').then(res => {
      this.setData({
        bannerList: res.data
      })
    })
  },

  // 去商品详情页
  toGoodsInfo(index) {
    var goods_id = index.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/home/goodsInfo/goodsInfo?id=' + goods_id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 首页banner
    this.getHomeBanners();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})