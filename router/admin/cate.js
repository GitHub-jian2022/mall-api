const Router = require('koa-router')
let router = new Router()
const Controller = require('../../controller/admin/cate')

const auth = require('../../middleware')

/**
 * @api {GET}  /categories 商品分类
 * @apiDescription  商品分类接口
 * @apiName getCategories
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

/**
 * @api {GET}  /categories/search 多条件搜索商品分类
 * @apiDescription  多条件搜索商品分类
 * @apiName     searchCategories
 * @apiGroup    Categories
 * @apiParam    {string}    categoryId 商品分类id(选填)
 * @apiParam    {string}    level 层级(选填)
 * @apiParam    {string}    keyword 分类名称(选填)
 * @apiParam    {string}    page 页码(必填)
 * @apiParam    {string}    size 页数(必填)
 * @apiExample  {curl} Example usage:
 *     curl -i /categories/search
 *     {
 *        categoryId: '1',
 *        level: '1',
 *        keyword: '手机',
 *        page: '1',
 *        size: '10',
 *     } 
 * @apiSuccess (200) {Array}  Categories information
 * @apiVersion  1.0.0
 */
router.get('/categories/search', Controller.searchCategories)


/**
 * @api {GET}  /categories/level 根据层级获取商品分类
 * @apiDescription  根据层级获取商品分类
 * @apiName     levelCategories
 * @apiGroup    Categories
 * @apiParam    {string}    level 层级(必填)
 * @apiExample  {curl} Example usage:
 *     curl -i /categories/level
 *     {
 *        level: '1',
 *     } 
 * @apiSuccess (200) {Array}  Categories information
 * @apiVersion  1.0.0
 */
router.get('/categories/level', Controller.searchCategoriesByLevel)



/**
 * @api {POST}  /categories 添加商品分类
 * @apiDescription  添加商品分类接口
 * @apiName addCategories
 * @apiGroup    Categories
 * @apiHeader {String} authorization 请求头必须携带字段authorization
 * @apiParam    {string}    level   商品分类级别(必填) 
 * @apiParam    {string}    category_name 商品分类名称(必填) 
 * @apiParam    {string}    parentId 上级商品id(必填，1级商品分类传NULL) 
 * @apiExample  {curl} Example usage:
 *     curl -i /categories
 *     {
 *        level: '2',
 *        category_name: '手机',
 *        parentId: '15',
 *     } 
 * @apiVersion  1.0.0
 */
router.post('/categories', auth, Controller.addCategories)

/**
 * @api {DELETE}  /categories 删除商品分类
 * @apiDescription  删除商品分类
 * @apiName     deleteCategories
 * @apiGroup    Categories
 * @apiParam    {Array}    ids 商品分类id(必填)
 * @apiHeader {String} authorization 请求头必须携带字段authorization
 * @apiExample  {curl} Example usage:
 *     curl -i /categories
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
router.delete('/categories', auth, Controller.deleteCategories)

module.exports = router.routes()