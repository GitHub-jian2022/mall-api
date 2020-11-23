const Service = require('../../service/admin/user');
const { sign } = require('../../utils/jwt')
const { getUserId }= require("../../utils/jwt");

// 导入异常类
const { HttpException, ParameterException } = require('../../global/http-exception')

module.exports = {
  // 用户请求登录处理
  async login(ctx) {
    let { phone, password } = ctx.request.body
    if(!phone || !password) {
      const error = new ParameterException('请输入账号和密码', 10001)
      throw error
    }
    const result = await Service.getUser(phone)
    if (result) {
      if (result.password === password) {
          const token = sign({userId: result.id,date: new Date().getTime()},'7d');  //加密，设置有效期7天，返回token
          ctx.body = { 
            code: 200,
            msg: 'ok',
            data: {
              token
            }
          }
      } else {
        const error = new ParameterException('密码不正确', 10001)
        throw error
      }
    } else {
      const error = new ParameterException('账号不存在', 10001)
      throw error
    }
  },

  async getUserInfo(ctx) {
    const id = getUserId(ctx)

    const result = await Service.getUserInfo(id)
    if (result) {
      const { type_en } = result
      let roles = []
      roles.push(type_en)
      const data = {
        ...result,
        roles
      }
      ctx.body = { 
        code: 200,
        msg: 'success',
        data
      }
    } else {
      const error = new HttpException('服务器异常')
      throw error
    }
  },

  // 修改用户信息
  async update(ctx) {
    const id = getUserId(ctx)
    const params = {
      ...ctx.request.body,
      id
    }
    const result = Service.update(params)
    if(result) {
      const data = await Service.getUserInfo(id)
      ctx.body = { 
        code: 200,
        msg: '修改成功',
        data
      }
    } else {
      const error = new HttpException('服务器异常')
      throw error
    }
  },

  // 上传头像
  async updateAvatar(ctx) {
    const { body, file } = ctx.req
    const params = {
      id: body.id,
      avatar: `/images/avatar/${file.filename}`
    }
    const result = await Service.updateAvatar(params)
    if(result['affectedRows'] > 0) {
      ctx.body = {
        code: 200,
        msg: 'success',
        data: {
          avatar: params.avatar
        }
      }
    }
  },

  async getUserByKeyWord(ctx) {
    console.log('ctx.request.query: ', ctx.request.query);
    const result = await Service.getUserByKeyWord(ctx.request.query)
    if (result) {
      const total = result[1][0]['COUNT(1)']
      const data = result[0]
      ctx.body = { 
        code: 200,
        msg: 'success',
        data: {
          data,
          total
        },
      }
    } else {
      const error = new HttpException('服务器异常')
      throw error
    }
  },
}