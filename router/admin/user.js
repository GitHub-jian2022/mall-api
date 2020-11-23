const Router = require('koa-router')
let router = new Router()
const Controller = require('../../controller/admin/user')

const auth = require('../../middleware')
const { createUpload } = require('../../utils/upload')

/**
 * @api {POST}  /login 用户登录
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
 * @apiHeader {String} authorization 请求头必须携带字段authorization
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
 * @apiHeader {String} authorization 请求头必须携带字段authorization
 * @apiParam    {string}    phone 手机号(必填)
 * @apiParam    {string}    username 用户名(必填)
 * @apiParam    {string}    password 用户密码(必填) 
 * @apiExample  {curl} Example usage:
 *     curl -i /user
 *     {
 *        phone: '15602941146',
 *        username: '123456',
 *        password: '123456',
 *     } 
 * @apiVersion  1.0.0
 */
router.post('/user', auth,  Controller.update)

//上传图片预览接口
router.post('/user/upload/preview', (ctx) => {
  ctx.body = {
    code: 200,
    msg: '上传成功'
  }
})

/**
 * @api {POST}  /user/upload 上传头像
 * @apiDescription  上传头像接口
 * @apiName updateAvatar
 * @apiGroup    Users
 * @apiHeader {String} authorization 请求头必须携带字段authorization
 * @apiParam    {formData}    formData (必填)
 * @apiExample  {curl} Example usage:
 *     curl -i /user
 *     {
 *        formData: file,
 *     } 
 * @apiVersion  1.0.0
 */
router.post('/user/upload',  createUpload('static/images/avatar/').single('file'), Controller.updateAvatar)

/**
 * @api {GET}  /user/search 多条件查找用户
 * @apiDescription  多条件查找用户接口
 * @apiName getUserByKeyWord
 * @apiGroup    Users
 * @apiHeader {String} authorization 请求头必须携带字段authorization
 * @apiExample  {curl} Example usage:
 *     curl -i /user/all
 * @apiParam    {string}    page 页码(必填)
 * @apiParam    {string}    size 页数(必填)
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
              sign: '程序猿',
              type: 1,
              type_cn: '管理员'
            }
 *        ]
 *     }
 * @apiVersion  1.0.0
 */
router.get('/user/search', auth,  Controller.getUserByKeyWord)


module.exports = router.routes()