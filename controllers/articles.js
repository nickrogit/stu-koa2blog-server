const Sequelize = require('sequelize')
const articles = require('../models/articles')
/**
 * 查询文章列表
 *
 * @param  {pageSize, pageNum} 每页展示条数, 页码
 * @return {JSONArray} 返回标签对应的文章信息
 */
const getArticles = async ctx => {
  let pageSize = ''
  let pageNum = ''
  let total = 0
  await articles.findAll().then(data => {
    total = data.length
  })
  // 查所有数据 待优化查询条件
  await articles
    .findAll({
      attributes: [
        'id',
        'id',
        'date',
        'tags',
        'title',
        'desc',
        'detail',
        'readNum',
        'wordCount',
        'title'
      ],
      order: ['date']
    })
    .then(data => {
      let list = []
      if (ctx.request.query.pageSize) {
        pageSize = parseInt(ctx.request.query.pageSize)
        pageNum = parseInt(ctx.request.query.pageNum)
        list = data
          .reverse()
          .slice(pageSize * (pageNum - 1), pageSize + pageSize * (pageNum - 1))
        ctx.body = {
          msg: '查询成功',
          code: 200,
          total: total, // Math.ceil(total / pageSize)
          pageNum: pageNum,
          pageSize: pageSize,
          data: list
        }
      } else {
        // 无分页 整理返参格式 按年分类
        list = data.reverse()
        let yearList = []
        let result = []
        for (let i = 0; i < list.length; i++) {
          yearList.push(new Date(list[i].date).getFullYear())
        }
        yearList = [...new Set(yearList)]
        for (let i = 0; i < yearList.length; i++) {
          let obj = {
            year: yearList[i],
            list: []
          }
          for (let j = 0; j < list.length; j++) {
            if (yearList[i] === new Date(list[j].date).getFullYear()) {
              obj.list.push(list[j])
            }
          }
          result.push(obj)
        }
        ctx.body = {
          msg: '查询成功',
          code: 200,
          total: list.length,
          data: result
        }
      }
    })
    .catch(err => {
      ctx.body = {
        msg: err,
        code: 999999
      }
    })
}

/**
 * 通过文章ID查询文章详情
 *
 * @param  {id} 文章Id
 * @return {JSONArray} 返回文章信息
 */
const getArticlesDetail = async ctx => {
  const id = ctx.request.query.id
  await articles
    .findAll({
      where: {
        id: id
      }
    })
    .then(data => {
      ctx.body = {
        msg: '文章详情查询成功',
        code: 200,
        data: data[0].dataValues
      }
    })
    .catch(err => {
      ctx.body = {
        msg: err,
        code: 999999
      }
    })
}

/**
 * 阅读次数递增接口
 * POST
 * @param  {id} 文章Id
 * @return {JSON} Id, 阅读次数
 */
const getArticlesUpdate = async ctx => {
  const id = ctx.request.body.id
  if (id) {
    await articles.update({
      title: ctx.request.body.title || '',
      date: ctx.request.body.date || '',
      tags: ctx.request.body.tags || '',
      desc: ctx.request.body.desc || '',
      detail: ctx.request.body.detail || ''
    }, {
      where: {
        id: id
      }
    }).then(data => {
      ctx.body = {
        msg: '提交成功',
        code: 200
      }
    }).catch(err => {
      ctx.body = {
        msg: err,
        code: 999999
      }
    })
  } else {
    await articles.create({
      title: ctx.request.body.title || '',
      date: ctx.request.body.date || '',
      tags: ctx.request.body.tags || '',
      desc: ctx.request.body.desc || '',
      detail: ctx.request.body.detail || ''
    }).then(data => {
      ctx.body = {
        msg: '提交成功',
        code: 200
      }
    }).catch(err => {
      ctx.body = {
        msg: err,
        code: 999999
      }
    })
  }
}

/**
 * 通过文章ID删除文章详情
 *
 * @param  {id} 文章Id
 * @return {JSONArray} 返回文章信息
 */
const getArticlesDel = async ctx => {
  const id = ctx.request.body.id
  await articles
    .destroy({
      where: {
        id: id
      }
    })
    .then(data => {
      ctx.body = {
        msg: '文章删除成功',
        code: 200
      }
    })
    .catch(err => {
      ctx.body = {
        msg: err,
        code: 999999
      }
    })
}

/**
 * 阅读次数递增接口
 * POST
 * @param  {id} 文章Id
 * @return {JSON} Id, 阅读次数
 */
const readNumIncrease = async ctx => {
  const id = ctx.request.body.id
  await articles.update({
    readNum: Sequelize.literal('readNum + 1')
  }, {
    where: {
      id: id
    }
  }).catch(err => {
    ctx.body = {
      msg: err,
      code: 999999
    }
  })
  await articles
    .findAll({
      where: {
        id: id
      },
      attributes: ['readNum']
    })
    .then(data => {
      ctx.body = {
        msg: '阅读次数查询成功',
        code: 200,
        id: id,
        readCount: data[0].dataValues.readNum
      }
    }).catch(err => {
      ctx.body = {
        msg: err,
        code: 999999
      }
    })
}

module.exports = {
  getArticlesUpdate,
  getArticles,
  getArticlesDetail,
  getArticlesDel,
  readNumIncrease
}
