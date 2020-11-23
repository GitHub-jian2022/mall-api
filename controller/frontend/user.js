const Service = require('../../service/frontend/user');
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
    console.log('id: ', id);

    const result = await Service.getUserInfo(id)
    if (result) {
      const { type_cn } = result
      let roles = []
      roles.push(type_cn)
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

  // 用户注册
  async register(ctx) {
    let { phone, password } = ctx.request.body
    const result = await Service.getUser(phone)
    if (result) {
      const error = new ParameterException('账号已存在', 10001)
      throw error
    } else {
      const params = {
        phone,
        password,
      }
      const result = await Service.register(params)
      console.log('result: ', result);
      if(result) {
        ctx.body = { 
          code: 200,
          msg: '注册成功'
        }
      }else {
        const error = new ParameterException('注册失败', 10001)
        throw error
      }
    }
  },

  //获取收货地址详情
  async getAddressDetail(ctx) {
    const { addressId } = ctx.params
    console.log('addressId: ', addressId);
    const result = await Service.getAddressDetail(addressId)
    if(result) {
      const data = result;
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

  //获取收货地址列表
  async getAddress(ctx) {
    const userId = getUserId(ctx)
    const result = await Service.getAddress(userId)
    if(result) {
      const data = result;
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
  
  //添加收货地址
  async addAddress(ctx) {
    const userId = getUserId(ctx)
    const params = {
      ...ctx.request.body,
      userId
    }
    const result = Service.addAddress(params)
    if(result) {
      ctx.body = { 
        code: 200,
        msg: '添加成功',
      }
    } else {
      const error = new HttpException('服务器异常')
      throw error
    }
  },

  //删除收货地址
  async deleteAddress(ctx) {
    const userId = getUserId(ctx)
    console.log('deleteAddress: ', ctx.request.body);
    const { ids } = ctx.request.body;
    // 如果这个参数没有传入，那么会报错
    if(!ids) {
      const error = new ParameterException('参数未传递', 10001)
      throw error
    }
    const params = {
      ids,
      userId
    }
    const result = Service.deleteAddress(params)
    if(result) {
      ctx.body = { 
        code: 200,
        msg: '删除成功'
      }
    }else {
      const error = new HttpException('服务器异常')
      throw error
    }
  },

  //获取收藏
  async getCollection(ctx) {
    const userId = getUserId(ctx)
    const params = {
      userId,
      ...ctx.request.body
    }
    const result = await Service.getCollection(params)
    if(result) {
      const data = result;
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

  //商品是否已收藏
  async getCollectionCountByGoodsId(ctx) {
    const userId = getUserId(ctx)
    console.log('ctx.params: ', ctx.params);
    const { goodsId } = ctx.params
    if(!goodsId) {
      const error = new ParameterException('商品id不能为空', 10001)
      throw error
    }
    const result = await Service.getCollectionCountByGoodsId(userId,goodsId)
    if(result) {
      const count = result[0]['COUNT(1)'];
      ctx.body = { 
        code: 200,
        msg: 'success',
        data: {
          count
        }
      }
    } else {
      const error = new HttpException('服务器异常')
      throw error
    }
  },
  
  //添加收藏
  async addCollection(ctx) {
    const userId = getUserId(ctx)
    const { goodsId } = ctx.request.body;
    if(!goodsId) {
      const error = new ParameterException('商品id未传递', 10001)
      throw error
    }
    const params = {
      goodsId,
      userId
    }
    const result = Service.addCollection(params)
    if(result) {
      ctx.body = { 
        code: 200,
        msg: '添加成功',
      }
    } else {
      const error = new HttpException('服务器异常')
      throw error
    }
  },

  //根据收藏id删除收藏
  async deleteCollection(ctx) {
    const userId = getUserId(ctx)
    console.log('deleteCollection: ', ctx.request.body);
    const { ids } = ctx.request.body;
    // 如果这个参数没有传入，那么会报错
    if(!ids || ids.length < 1) {
      const error = new ParameterException('请传id', 10001)
      throw error
    }
    const params = {
      ids,
      userId
    }
    const result = Service.deleteCollection(params)
    if(result) {
      ctx.body = { 
        code: 200,
        msg: '删除成功'
      }
    } else {
      const error = new HttpException('服务器异常')
      throw error
    }
  },

  //根据商品id删除收藏
  async deleteCollectionByGoodsId(ctx) {
    const userId = getUserId(ctx)
    console.log('deleteCollectionByGoodsId: ', ctx.request.body);
    const { ids } = ctx.request.body;
    // 如果这个参数没有传入，那么会报错
    if(!ids || ids.length < 1) {
      const error = new ParameterException('请传id', 10001)
      throw error
    }
    const params = {
      ids,
      userId
    }
    const result = Service.deleteCollectionByGoodsId(params)
    if(result) {
      ctx.body = { 
        code: 200,
        msg: '删除成功'
      }
    } else {
      const error = new HttpException('服务器异常')
      throw error
    }
  },
}