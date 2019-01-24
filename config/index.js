// 系统参数配置
let prodHost = 'https://api.xx.com'
let testHost = 'http://localhost:3000'
let devHost = 'http://localhost:3000'

const config = {
  baseURL: devHost, // 接口地址
  timeout: 60000, // 请求超时
  version: '1.0.0' // 应用版本
}

module.exports = config
