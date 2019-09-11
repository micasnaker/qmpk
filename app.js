//app.js
App({

  tabbar: {
    color: "#242424",
    selectedColor: "#fa8582",
    backgroundColor: "#ffffff",
    borderStyle: "#d7d7d7",
    list: [{
        pagePath: "/pages/home/home",
        text: "优质案例",
        iconPath: "/images/tabbar1/shouye.png",
        selectedIconPath: "/images/tabbar2/shouye.png",
        selected: true
      },
      {
        pagePath: "/pages/recruit/recruit",
        text: "我要招生",
        iconPath: "/images/tabbar1/shouye.png",
        selectedIconPath: "/images/tabbar2/shouye.png",
        selected: false
      },
      {
        pagePath: "/pages/person/person",
        text: "我的",
        iconPath: "/images/tabbar1/shouye.png",
        selectedIconPath: "/images/tabbar2/shouye.png",
        selected: false
      }
    ],
    position: "bottom"
  },
  changeTabBar: function() {
    var _curPageArr = getCurrentPages();
    var _curPage = _curPageArr[_curPageArr.length - 1];
    var _pagePath = _curPage.__route__;
    if (_pagePath.indexOf('/') != 0) {
      _pagePath = '/' + _pagePath;
    }
    var tabBar = this.tabbar;
    for (var i = 0; i < tabBar.list.length; i++) {
      console.log(_pagePath + '--' + tabBar.list[i].pagePath)
      tabBar.list[i].selected = false;
      if (tabBar.list[i].pagePath == _pagePath) {
        tabBar.list[i].selected = true; //根据页面地址设置当前页面状态  
      }
    }
    _curPage.setData({
      tabbar: tabBar
    });
  },
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  // iphonex 查询
  onShow: function() {
    let that = this;
    wx.getSystemInfo({
      success: res => {
        // console.log('手机信息res'+res.model)  
        let modelmes = res.model;
        if (modelmes.search('iPhone X') != -1) {
          that.globalData.isIphoneX = true
        }
      }
    })
  },

  globalData: {
    userInfo: null,
    userList: '',
    isIphoneX: false,
    goodsId: ''
  }
})