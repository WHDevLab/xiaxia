// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  console.log(event.location)
  return new Promise((resolve, reject) => {
    let url = 'https://api.seniverse.com/v3/weather/now.json?key=SIfiejU1AJaimUZaZ&location='+event.location+'&language=zh-Hans&unit=c'
    request.get(url, function (err, resp, body) {
      return resolve(body)
    })
  })
  return {
    event,
    "a":1
  }
}