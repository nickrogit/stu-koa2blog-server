const router = require('koa-router')()
const tagsApi = require('../controllers/tags')
const articlesApi = require('../controllers/articles')

router.get('/articles', articlesApi.getArticles)
router.get('/articlesDetail', articlesApi.getArticlesDetail)
router.post('/articlesDel', articlesApi.getArticlesDel)
router.post('/articlesUpdate', articlesApi.getArticlesUpdate)
router.get('/tags', tagsApi.getTags)
router.post('/readNum', articlesApi.readNumIncrease)

module.exports = router
