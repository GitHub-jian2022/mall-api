const Router = require('koa-router')
let router = new Router()
const Controller = require('../../controller/frontend/home')

/**
 * @api {GET}  /index-infos 首页api
 * @apiDescription  首页数据接口
 * @apiName index-infos
 * @apiGroup    Index 
 * @apiExample  {curl} Example usage:
 *     curl -i /index-infos
 * @apiSuccess (200) {Array}  carousels 轮播图
 * @apiSuccess (200) {Array}  newGoodses 新品
 * @apiSuccess (200) {Array}  hotGoodses 热门商品
 * @apiSuccess (200) {Array}  recommendGoodses 推荐商品
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code":"200"
 *       "message": "success"
 *       "data": [
            carousels: [],
            newGoodses: [],
            hotGoodses: [],
            recommendGoodses: [],
 *        ]
 *     }
 * @apiVersion  1.0.0
 */
router.get('/index-infos', Controller.getInfos)

module.exports = router.routes()