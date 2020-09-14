// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return new Promise((resolve, reject) => {
    let url = 'https://api.breaker.club/weather/index?key=SIfiejU1AJaimUZaZ&lon='+event.lon+'&lat='+event.lat
    request.get(url, function (err, resp, body) {
      return resolve(body)
    })
  })
}