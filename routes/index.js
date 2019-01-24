const router = require('koa-router')()
const tagsApi = require('../controllers/tags')
const articlesApi = require('../controllers/articles')
const uploadApi = require('../controllers/upload')

router.get('/articles', articlesApi.getArticles)
router.get('/articlesDetail', articlesApi.getArticlesDetail)
router.post('/articlesDel', articlesApi.postArticlesDel)
router.post('/articlesUpdate', articlesApi.postArticlesUpdate)
router.get('/tags', tagsApi.getTags)
router.post('/readNum', articlesApi.readNumIncrease)

router.post('/uploadFile', uploadApi.postFileUpload)

module.exports = router
