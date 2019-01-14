const router = require('koa-router')()
const tagsApi = require('../controllers/tags')
const articlesApi = require('../controllers/articles')

router.get('/articles', articlesApi.getArticles)
router.get('/articlesDetail', articlesApi.getArticlesDetail)
router.get('/articlesDel', articlesApi.getArticlesDel)
router.post('/v1/readNum', articlesApi.readNumIncrease)
router.get('/v1/tags', tagsApi.getTags)

module.exports = router
