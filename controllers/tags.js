const tags = require('../models/tags')

/**
 * 标签查询
 *
 * @param  {tagId} 非必须 标签Id
 * @return {JSONArray} 返回标签列表以及该标签对应的文章
 */
const getTags = async ctx => {
  await tags
    .findAll({
      attributes: ['tagId', 'tag']
    })
    .then(data => {
      ctx.body = {
        msg: '标签列表查询成功',
        code: 200,
        data: data
      }
    })
    .catch(err => {
      ctx.body = {
        msg: err,
        code: 999999
      }
    })
}

module.exports = {
  getTags
}
