const Router = require('koa-router')
let router = new Router()
const Controller = require('../../controller/frontend/cate')

/**
 * @api {GET}  /categories 商品分类
 * @apiDescription  商品分类接口
 * @apiName categories
 * @apiGroup    Categories 
 * @apiExample  {curl} Example usage:
 *     curl -i /categories
 * @apiSuccess (200) {String}  id 商品id
 * @apiSuccess (200) {String}  level 商品分类层级
 * @apiSuccess (200) {String}  categoryName 商品分类名称
 * @apiSuccess (200) {String}  parentId 上级商品id
 * @apiSuccess (200) {String}  children 下级商品集合
 * @apiSuccess (200) {String}  total 下级商品集合数量
 * @apiVersion  1.0.0
 */
router.get('/categories', Controller.getCate)

module.exports = router.routes()