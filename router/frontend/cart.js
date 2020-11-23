const Router = require('koa-router')
let router = new Router()
const Controller = require('../../controller/frontend/cart')

const auth = require('../../middleware')

/**
 * @api {GET}  /cart 获取购物车数据
 * @apiDescription  获取购物车商品列表数据
 * @apiName     getCart
 * @apiGroup    Cart
 * @apiParam    {Number}    page 页码(必填)
 * @apiParam    {Number}    size 页数(选填)
 * @apiHeader {String} token 请求头必须携带字段token
 * @apiExample  {curl} Example usage:
 *     curl -i /cart
 * @apiSuccess (200) {String}  goodsId 商品id
 * @apiSuccess (200) {String}  userId 用户id
 * @apiSuccess (200) {String}  quanity 商品数量
 * @apiSuccess (200) {String}  goodsName 商品名称
 * @apiSuccess (200) {String}  goodsIntro 商品描述
 * @apiSuccess (200) {String}  goodsCoverImg 商品图片
 * @apiSuccess (200) {String}  type 商品类型
 * @apiSuccess (200) {String}  categoryId 商品所属分类
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code":"200"
 *       "message": "success"
 *       "data": [
            {
              id: '1',
              goodsId: '15',
              userId: '1',
              quanity: '3',
              goodsName: 'HUAWEI Mate 40 Pro+ 5G 全网通 12G...',
              goodsIntro: 'xxxxxxx',
              goodsCoverImg: 'http://47.99.134.126:28019/goods-img/ 23ac3107-6309-40c8-bd28-164eb1186b62.jpg',
              price: '1000',
              tag: '非凡',
              type: '3',
              categoryId: 15
            }
 *        ]
 *     }
 * @apiVersion  1.0.0
 */
router.get('/cart', auth, Controller.getCartByUserId)

/**
 * @api {GET}  /cart/count 获取用户购物车商品总数
 * @apiDescription  获取用户购物车商品总数
 * @apiName     getCount
 * @apiGroup    Cart
 * @apiHeader {String} token 请求头必须携带字段token
 * @apiExample  {curl} Example usage:
 *     curl -i /cart/incart
 * @apiSuccess (200) {String}  goodsId 商品id
 * @apiSuccess (200) {String}  userId 用户id
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code":"200"
 *       "message": "success"
 *       "data": [
            {
              count: 0
            }
 *        ]
 *     }
 * @apiVersion  1.0.0
 */
router.get('/cart/count', auth, Controller.getCartCountByUserId)

/**
 * @api {POST}  /cart 加入购物车
 * @apiDescription  加入购物车
 * @apiName     addCart
 * @apiGroup    Cart
 * @apiParam    {string}    goodsId 商品id(必填)
 * @apiParam    {string}    quanity 商品数量(必填)
 * @apiHeader {String} token 请求头必须携带字段token
 * @apiExample  {curl} Example usage:
 *     curl -i /cart
 *     {
 *        goodsId: '15',
 *        quanity: '1',
 *     } 
 * @apiSuccess (200) {String}  code 状态码
 * @apiSuccess (200) {String}  message 提示信息
 * @apiVersion  1.0.0
 */
router.post('/cart', auth, Controller.addCart)

/**
 * @api {DELETE}  /cart 移出购物车
 * @apiDescription  移出购物车
 * @apiName     deleteCart
 * @apiGroup    Cart
 * @apiParam    {Array}    ids 购物车id集合(必填)
 * @apiHeader {String} token 请求头必须携带字段token
 * @apiExample  {curl} Example usage:
 *     curl -i /cart
 *     {
 *        ids: ['3'],
 *     } 
 * @apiSuccess (200) {String}  code 状态码
 * @apiSuccess (200) {String}  message 提示信息
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code":"200"
 *       "message": "操作成功"
 *       "data":""
 *     }
 * @apiVersion  1.0.0
 */
router.delete('/cart', auth, Controller.deleteCart)

module.exports = router.routes()