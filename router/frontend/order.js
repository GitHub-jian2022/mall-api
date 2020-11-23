const Router = require('koa-router')
let router = new Router()
const Controller = require('../../controller/frontend/order')

const auth = require('../../middleware')

/**
 * @api {GET}  /order 获取购物车数据
 * @apiDescription  获取购物车商品列表数据
 * @apiName     getOrder
 * @apiGroup    Order
 * @apiHeader {String} token 请求头必须携带字段token
 * @apiExample  {curl} Example usage:
 *     curl -i /order
 * @apiSuccess (200) {String}  orderId 订单id
 * @apiSuccess (200) {String}  goodsId 商品id
 * @apiSuccess (200) {String}  userId 用户id
 * @apiSuccess (200) {String}  address_name 收货地址
 * @apiSuccess (200) {String}  quanity 商品数量
 * @apiSuccess (200) {String}  status 订单状态
 * @apiSuccess (200) {String}  price 订单金额
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
              orderId: '1',
              goodsId: '15',
              userId: '1',
              addressName: 'xxxxxx',
              quanity: '3',
              status: '0',
              price: '1000',
              goodsName: 'HUAWEI Mate 40 Pro+ 5G 全网通 12G...',
              goodsIntro: 'xxxxxxx',
              goodsCoverImg: 'http://47.99.134.126:28019/goods-img/ 23ac3107-6309-40c8-bd28-164eb1186b62.jpg',
              tag: '非凡',
              type: '3',
              categoryId: 15
            }
 *        ]
 *     }
 * @apiVersion  1.0.0
 */
router.get('/order', auth, Controller.getOrder)

/**
 * @api {POST}  /order 创建订单
 * @apiDescription  创建订单
 * @apiName     addOrder
 * @apiGroup    Order
 * @apiParam    {Array}     goodsList 商品集合(必填)
 * @apiParam    {string}    address_name 收货地址(必填)
 * @apiParam    {string}    phone 手机号(必填)
 * @apiParam    {string}    price 总价(必填)
 * @apiHeader {String} token 请求头必须携带字段token
 * @apiExample  {curl} Example usage:
 *     curl -i /order
 *     {
 *        goodsList: [
 *          {
 *            goodsId: '15',
 *            quanity: '1',
 *          }
 *        ],
 *        address_name: '广东省xxx',
 *        phone: '10086',
 *        price: 5000,
 *     } 
 * @apiSuccess (200) {String}  code 状态码
 * @apiSuccess (200) {String}  message 提示信息
 * @apiVersion  1.0.0
 */
router.post('/order', auth, Controller.addOrder)

/**
 * @api {DELETE}  /order 删除订单
 * @apiDescription  删除订单
 * @apiName     deleteOrder
 * @apiGroup    Order
 * @apiParam    {Array}    ids 订单id集合(必填)
 * @apiHeader {String} token 请求头必须携带字段token
 * @apiExample  {curl} Example usage:
 *     curl -i /order
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
router.delete('/order', auth, Controller.deleteOrder)

module.exports = router.routes()