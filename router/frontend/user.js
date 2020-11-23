const Router = require('koa-router')
let router = new Router()
const Controller = require('../../controller/frontend/user')

const auth = require('../../middleware')

/**
 * @api {POST}  /login 登录
 * @apiDescription  用户登录接口
 * @apiName login
 * @apiGroup    Users
 * @apiParam    {string}    phone 用户手机号(必填)
 * @apiParam    {string}    password 用户密码(必填)    
 * @apiExample  {curl} Example usage:
 *     curl -i /login
 *     {
 *        phone: '15602941146',
 *        password: '123456'
 *     } 
 * @apiSuccess (200) {String} data information.
 * @apiVersion  1.0.0
 */
router.post('/login', Controller.login)


/**
 * @api {GET}  /user 获取用户信息
 * @apiDescription  获取用户信息接口
 * @apiName getUserInfo 
 * @apiGroup    Users
 * @apiHeader {String} token 请求头必须携带字段token
 * @apiExample  {curl} Example usage:
 *     curl -i /user
 * @apiSuccess (200) {String}  id 用户id
 * @apiSuccess (200) {String}  phone 用户id
 * @apiSuccess (200) {String}  username 用户名
 * @apiSuccess (200) {String}  password 密码
 * @apiSuccess (200) {String}  nickname 昵称
 * @apiSuccess (200) {String}  avatar 头像
 * @apiSuccess (200) {String}  gender 性别
 * @apiSuccess (200) {String}  sign 标签
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code":"200"
 *       "message": "success"
 *       "data": [
            {
              id: '1',
              phone: '15',
              username: '张三',
              password: '123456',
              nickname: '张三',
              avatar: 'http://47.99.134.126:28019/goods-img/ 23ac3107-6309-40c8-bd28-164eb1186b62.jpg',
              gender: '1',
              sign: '程序猿'
            }
 *        ]
 *     }
 * @apiVersion  1.0.0
 */
router.get('/user', auth,  Controller.getUserInfo)


/**
 * @api {POST}  /user 修改用户信息
 * @apiDescription  修改用户信息接口
 * @apiName updateUserInfo
 * @apiGroup    Users
 * @apiHeader {String} token 请求头必须携带字段token
 * @apiParam    {string}    phone 手机号(选填)
 * @apiParam    {string}    username 用户名(选填)
 * @apiParam    {string}    nickname 昵称(选填)
 * @apiParam    {string}    password 用户密码(选填) 
 * @apiParam    {string}    sign 个性签名(选填) 
 * @apiExample  {curl} Example usage:
 *     curl -i /user
 *     {
 *        phone: '15602941146',
 *        username: '123456',
 *        nickname: '15602941146',
 *        password: '123456',
 *        sign: 'hello',
 *     } 
 * @apiVersion  1.0.0
 */
router.post('/user', auth,  Controller.update)


/**
 * @api {POST}  /register 注册
 * @apiDescription  注册接口
 * @apiName register
 * @apiGroup    Users
 * @apiParam    {string}    phone 手机号(必填)
 * @apiParam    {string}    password 用户密码(必填) 
 * @apiExample  {curl} Example usage:
 *     curl -i /register
 *     {
 *        phone: '15602941146',
 *        password: '123456'
 *     } 
 * @apiVersion  1.0.0
 */
router.post('/register', Controller.register)

/**
 * @api {GET}  /address/id 获取收货地址详情
 * @apiDescription  获取收货地址接口
 * @apiName getAddress
 * @apiGroup    Users
 * @apiHeader {String} token 请求头必须携带字段token
 * @apiExample  {curl} Example usage:
 *     curl -i /address/4
 * @apiVersion  1.0.0
 */
router.get('/address/:addressId', auth, Controller.getAddressDetail)

/**
 * @api {GET}  /address 获取收货地址列表
 * @apiDescription  获取收货地址列表接口
 * @apiName getAddress
 * @apiGroup    Users
 * @apiHeader {String} token 请求头必须携带字段token
 * @apiExample  {curl} Example usage:
 *     curl -i /address
 * @apiVersion  1.0.0
 */
router.get('/address', auth, Controller.getAddress)

/**
 * @api {POST}  /address 添加收货地址
 * @apiDescription  添加收货地址接口
 * @apiName addAddress
 * @apiGroup    Users
 * @apiHeader {String} token 请求头必须携带字段token
 * @apiParam    {string}    defaultFlag 是否默认收货地址(必填,1是)
 * @apiParam    {string}    cityName 城市(必填) 
 * @apiParam    {string}    detailAddress 详细地址(必填)
 * @apiParam    {string}    provinceName 省(必填) 
 * @apiParam    {string}    regionName 区(必填)
 * @apiParam    {string}    userName 用户名(必填) 
 * @apiParam    {string}    userPhone 用户手机号(必填) 
 * @apiExample  {curl} Example usage:
 *     curl -i /address
 *     {
 *        defaultFlag: '1',
 *        cityName: '广州市',
 *        detailAddress: 'xxxxx',
 *        provinceName: '广东省',
 *        regionName: '天河区',
 *        userName: '张三',
 *        userPhone: '15602940000',
 *     } 
 * @apiVersion  1.0.0
 */
router.post('/address', auth, Controller.addAddress)

/**
 * @api {DELETE}  /address 删除收货地址
 * @apiDescription  删除收货地址
 * @apiName     deleteAddress
 * @apiGroup    Users
 * @apiParam    {Array}    ids 收货地址id(必填)
 * @apiHeader {String} token 请求头必须携带字段token
 * @apiExample  {curl} Example usage:
 *     curl -i /cart
 *     {
 *        ids: '1',
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
router.delete('/address', auth, Controller.deleteAddress)

/**
 * @api {GET}  /collection 获取收藏
 * @apiDescription  获取收藏接口
 * @apiName getCollection
 * @apiGroup    Users
 * @apiHeader {String} token 请求头必须携带字段token
 * @apiExample  {curl} Example usage:
 *     curl -i /collection
 * @apiVersion  1.0.0
 */
router.get('/collection', auth, Controller.getCollection)

/**
 * @api {GET}  /collection/count/goodsId 商品是否已收藏
 * @apiDescription  商品是否已收藏,
 * @apiName     getCollectionCountByGoodsId
 * @apiGroup    Users
 * @apiHeader {String} token 请求头必须携带字段token
 * @apiExample  {curl} Example usage:
 *     curl -i /collection/count/:goodsId
 * @apiSuccess (200) {String}  count 商品是否已收藏返回,count: 0则未收藏
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
router.get('/collection/count/:goodsId', auth, Controller.getCollectionCountByGoodsId)

/**
 * @api {POST}  /collection 添加收藏
 * @apiDescription  添加收藏接口
 * @apiName addCollection
 * @apiGroup    Users
 * @apiHeader {String} token 请求头必须携带字段token
 * @apiParam    {string}    goodsId 商品id(必填) 
 * @apiExample  {curl} Example usage:
 *     curl -i /collection
 *     {
 *        goodsId: '15',
 *     } 
 * @apiVersion  1.0.0
 */
router.post('/collection', auth, Controller.addCollection)

/**
 * @api {DELETE}  /collection 根据收藏id删除收藏
 * @apiDescription  删除收藏
 * @apiName     deleteCollection
 * @apiGroup    Users
 * @apiParam    {Array}    ids 收藏id(必填)
 * @apiHeader {String} token 请求头必须携带字段token
 * @apiExample  {curl} Example usage:
 *     curl -i /collection
 *     {
 *        ids: [1],
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
router.delete('/collection', auth, Controller.deleteCollection)

/**
 * @api {DELETE}  /collection/goodsId 根据商品id删除收藏
 * @apiDescription  删除收藏
 * @apiName     deleteCollectionByGoodsId
 * @apiGroup    Users
 * @apiParam    {Array}    ids 商品id(必填)
 * @apiHeader {String} token 请求头必须携带字段 token
 * @apiExample  {curl} Example usage:
 *     curl -i /collection/goodsId
 *     {
 *        ids: [1],
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
router.delete('/collection/goodsId', auth, Controller.deleteCollectionByGoodsId)

module.exports = router.routes()