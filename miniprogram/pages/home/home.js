// miniprogram/pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    temperature:"",
    text:"",
    time:"",
    hoursList:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.refreshWeather()

  },
  onShow: function () {
    this.refreshWeather()
  },
  refreshWeather: function (){
    wx.showLoading({
      title: '加载中...',
    })
    var self = this;
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        var latitude = res.latitude.toString()
        var longitude = res.longitude.toString()
        wx.cloud.callFunction({
          name: "weather",
          data:{"lat":latitude,"lon":longitude},
          success(res) {
            wx.hideLoading({
              complete: (res) => {},
            })
            var result = JSON.parse(res.result)
            self.setData({
              hoursList:result.data.hours,
              name: result.data.sk.address,
              temperature: result.data.sk.temp+"℃",
              text:result.data.sk.weather,
              time:"数据更新时间:"+result.data.sk.updatetime
            })
          },
          fail(err) {
            wx.hideLoading({
              complete: (res) => {},
            })
            console.log(err)
          }
        })
      },
      fail () {

      }
    })
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