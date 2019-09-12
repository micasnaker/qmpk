// pages/person/person.js
const app = getApp();
const api = require("../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    memberInfo: [],
    user_info: {},
    guessList: [],
    tabbar: {},
  },

  // 退出登录
  logout() {
    wx.showModal({
      title: '提示',
      content: '是否确定退出?',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  // 待付款
  waitPay(){
    wx.navigateTo({
      url: '/pages/person/orderList/orderList?tabShow2='+true,
    })
  },

  // 已付款
  accountPay() {
    wx.navigateTo({
      url: '/pages/person/orderList/orderList?tabShow3=' + true,
    })
  },

  // 已失效
  losePay() {
    wx.navigateTo({
      url: '/pages/person/orderList/orderList?tabShow5=' + true,
    })
  },

  // 拿到用户信息
  getMemberInfo() {
    var that = this;
    var id = wx.getStorageSync('UserList').id;
    var token_sc = wx.getStorageSync('UserList').token_sc;
    // console.log(user_info)
    that.setData({
      user_info: wx.getStorageSync('UserList')
    })
    // console.log("id：" + id + "token：" + token_sc)
    var params = {
      id: id,
      token_sc: token_sc
    }
    api._post('/members/info', params).then(res => {
      that.setData({
        memberInfo: res.data
      })
    })
  },

  // 获取猜你喜欢列表
  getGuessLikeList() {
    var that = this;
    that.setData({
      guessList: wx.getStorageSync('guessLike')
    })
  },

  // 跳转登录页
  toLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },

  // 去商品详情页
  toGoodsInfo(index) {
    var goods_id = index.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/home/goodsInfo/goodsInfo?id=' + goods_id,
    })
  },

  // 个人信息
  personInfo() {
    if (wx.getStorageSync('UserList')) {
      // 去个人信息
      wx.navigateTo({
        url: '/pages/person/personInfo/personInfo',
      })
    } else {
      // 去登录
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 2000
      })
      this.toLogin();
    }
  },

  // 账号设置
  accSet() {
    // console.log(wx.getStorageSync('UserList'))
    if (wx.getStorageSync('UserList')) {
      // 去账号设置
      wx.navigateTo({
        url: '/pages/person/set/set',
      })
    } else {
      // 去登录
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 2000
      })
      this.toLogin();
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getMemberInfo();
    this.getGuessLikeList();
    //调用app中的函数
    app.changeTabBar();
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
    this.getMemberInfo();
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