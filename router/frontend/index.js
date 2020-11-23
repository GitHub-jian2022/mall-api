const router = require('koa-router')();

//路由模块
const user = require('./user')
const home = require('./home')
const cate = require('./cate')
const cart = require('./cart')
const goods = require('./goods')

const order = require('./order')

router.get('/', (ctx) => {
  ctx.body = {
    code: 200,
    msg: 'frontend service ok',
    data: 'ok'
  }
})

router.use('',user)
router.use('',home)
router.use('',cate)
router.use('',cart)
router.use('',goods)
router.use('',order)



module.exports = router.routes()