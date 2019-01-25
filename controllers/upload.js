const path = require('path')
const { uploadFile } = require('../util/upload')
const config = require('../config/index')

/**
 * 上传图片 接口
 * POST
 * @param  {file} 图片文件
 */
const postFileUpload = async ctx => {
  // 上传文件请求处理
  let result = { success: false }
  let serverFilePath = path.join(__dirname, '../upload_files')
  let fileType = 'common'
  // 上传文件事件
  result = await uploadFile(ctx, {
    fileType: fileType,
    path: serverFilePath
  })
  if (result.success) {
    ctx.body = {
      msg: '上传成功',
      code: 200,
      uploaded: true,
      url: `${config.baseURL}/upload_files/${fileType}/${result.fileName}`,
      data: {
        absolutePath: `${config.baseURL}/upload_files/${fileType}/${result.fileName}`,
        uploaded: true,
        url: `${config.baseURL}/upload_files/${fileType}/${result.fileName}`
      }
    }
  } else {
    ctx.body = {
      msg: '上传失败',
      code: 999999,
      uploaded: false,
      url: ''
    }
  }
}

module.exports = {
  postFileUpload
}
