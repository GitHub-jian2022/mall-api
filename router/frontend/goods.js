const Router = require('koa-router')
let router = new Router()
const Controller = require('../../controller/frontend/goods')

/**
 * @api {GET}  /goods/detail 商品详情
 * @apiDescription  根据商品id获取商品信息
 * @apiName     getGoodsById
 * @apiGroup    Goods
 * @apiParam    {string}    goodsId 商品id(必填)
 * @apiExample  {curl} Example usage:
 *     curl -i /goods/detail/15
 * @apiSuccess (200) {String}  goodsId 商品id
 * @apiSuccess (200) {String}  goodsName 商品名称
 * @apiSuccess (200) {String}  goodsIntro 商品描述
 * @apiSuccess (200) {String}  goodsCoverImg 商品图片
 * @apiSuccess (200) {String}  price 商品价格
 * @apiSuccess (200) {String}  tag 标签
 * @apiSuccess (200) {String}  type 商品类型
 * @apiSuccess (200) {String}  categoryId 商品所属分类
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code":"200"
 *       "message": "success"
 *       "data": [
            {
              goodsId: '15',
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
router.get('/goods/detail/:goodsId', Controller.getGoodsById)

/**
 * @api {GET}  /goods/search 搜索商品
 * @apiDescription  根据商品分类id获取商品信息
 * @apiName     searchGoods
 * @apiGroup    Goods
 * @apiParam    {string}    categoryId 商品分类id(选填)
 * @apiParam    {string}    keyword 关键字(选填)
 * @apiParam    {string}    page 页码(必填)
 * @apiParam    {string}    size 页数(必填)
 * @apiParam    {string}    sort 价格排序(选填,1:升序,0:降序)
 * @apiExample  {curl} Example usage:
 *     curl -i /goods/search
 *     {
 *        categoryId: '1',
 *        keyword: 'iphone',
 *        page: '1',
 *        size: '10',
 *        sort: '1',
 *     } 
 * @apiSuccess (200) {Array}  Goods information
 * @apiVersion  1.0.0
 */
router.get('/goods/search', Controller.searchGoods)

module.exports = router.routes()