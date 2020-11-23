const router = require('koa-router')();

//路由模块
const frontend = require('./frontend')
const admin = require('./admin')

router.use('/api',frontend)

router.use('/admin',admin)



module.exports = router.routes()


