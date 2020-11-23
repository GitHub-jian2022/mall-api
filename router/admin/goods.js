const Router = require('koa-router')
let router = new Router()
const Controller = require('../../controller/admin/goods')

const auth = require('../../middleware')
const { createUpload } = require('../../utils/upload')

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
 * @api {GET}  /goods/search 多条件搜索商品
 * @apiDescription  多条件搜索商品
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

/**
 * @api {GET}  /goods/all 查找全部商品
 * @apiDescription  查找全部商品
 * @apiName     getAllGoods
 * @apiGroup    Goods
 * @apiParam    {string}    page 页码(选填)
 * @apiParam    {string}    size 页数(选填)
 * @apiParam    {string}    sort 价格排序(选填,1:升序,0:降序)
 * @apiExample  {curl} Example usage:
 *     curl -i /goods/search
 *     {
 *        page: '1',
 *        size: '10',
 *        sort: '1',
 *     } 
 * @apiSuccess (200) {Array}  Goods information
 * @apiVersion  1.0.0
 */
router.get('/goods/all', Controller.getAllGoods)

//上传图片预览接口
router.post('/goods/upload/preview', (ctx) => {
  ctx.body = {
    code: 200,
    msg: '上传成功'
  }
})

/**
 * @api {POST}  /goods 添加商品
 * @apiDescription  添加商品接口
 * @apiName addGoods
 * @apiGroup    Goods
 * @apiHeader {String} authorization 请求头必须携带字段authorization
 * @apiParam    {string}    goodsName   商品名称(必填) 
 * @apiParam    {string}    goodsIntro 商品描述(必填) 
 * @apiParam    {string}    goodsCoverImg 商品封面图片(必填) 
 * @apiParam    {string}    sellingPrice   商品价格(必填) 
 * @apiParam    {string}    tag 商品标签(选填) 
 * @apiParam    {string}    type 商品类型(必填，1: 新品, 2: 热门商品, 3: 推荐商品, 4: 其他 ) 
 * @apiParam    {string}    categoryId 商品所属分类 (必填)
 * @apiParam    {formData}  formData 
 * @apiExample  {curl} Example usage:
 *     curl -i /goods
 *     {
 *        goodsName: '商品名称',
 *        goodsIntro: '商品描述',
 *        goodsCoverImg: '',
 *        sellingPrice: '2000',
 *        tag: '商品标签',
 *        type: '1',
 *        categoryId: '15',
 *     } 
 * @apiVersion  1.0.0
 */
router.post('/goods', createUpload('static/images/goods/').single('file'), Controller.addGoods)

/**
 * @api {DELETE}  /goods 删除商品
 * @apiDescription  删除商品
 * @apiName     deleteGoods
 * @apiGroup    Goods
 * @apiParam    {Array}    ids 商品分类(必填)
 * @apiHeader {String} authorization 请求头必须携带字段authorization
 * @apiExample  {curl} Example usage:
 *     curl -i /goods
 *     {
 *        ids: ['1'],
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
router.delete('/goods', auth, Controller.deleteGoods)

module.exports = router.routes()