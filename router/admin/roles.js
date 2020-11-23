const Router = require('koa-router')
let router = new Router()
const Controller = require('../../controller/admin/roles')

const auth = require('../../middleware')

/**
 * @api {GET}  /roles/search 条件查找角色
 * @apiDescription  条件查找角色接口
 * @apiName getAllRoles
 * @apiGroup    Roles
 * @apiHeader {String} authorization 请求头必须携带字段authorization
 * @apiExample  {curl} Example usage:
 *     curl -i /roles/search
 * @apiSuccess (200) {String}  id 角色id
 * @apiSuccess (200) {String}  type 角色类型
 * @apiSuccess (200) {String}  type_en 角色类型英文显示
 * @apiSuccess (200) {String}  type_cn 角色类型中文显示
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code":"200"
 *       "message": "success"
 *       "data": [
            {
              id: '1',
              type: '1',
              type_en: 'admin',
              type_cn: '管理员',
            }
 *        ]
 *     }
 * @apiVersion  1.0.0
 */
router.get('/roles/search', auth,  Controller.getRolesByKeyWord)

module.exports = router.routes()