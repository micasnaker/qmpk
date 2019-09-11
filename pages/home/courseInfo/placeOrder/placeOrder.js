// pages/home/courseInfo/placeOrder/placeOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['美国', '中国', '巴西', '日本'],
    value6: '',
    value7: '',
    value7: ''
  },

  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  // 学员手机号
  phone: function(event) {
    this.setData({
      phone: event.detail.detail.value
    })
    console.log(this.data.phone)
  },

  // 学员姓名
  name: function(event) {
    this.setData({
      name: event.detail.detail.value
    })
    console.log(this.data.name)
  },

  // 备注信息
  content: function(event) {
    this.setData({
      content: event.detail.detail.value
    })
    console.log(this.data.content)
  },

  orderPay(){
    wx.navigateTo({
      url: '/pages/home/courseInfo/orderPay/orderPay',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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