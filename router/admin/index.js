const router = require('koa-router')();

//路由模块
const roles = require('./roles')
const user = require('./user')
const cate = require('./cate')
const goods = require('./goods')


router.get('/', (ctx) => {
  ctx.body = {
    code: 200,
    msg: 'admin service ok',
    data: 'ok'
  }
})


router.use('',roles)
router.use('',user)
router.use('',cate)
router.use('',goods)

module.exports = router.routes()