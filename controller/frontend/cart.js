const Service = require('../../service/frontend/cart');
const { getUserId }= require("../../utils/jwt");

// 导入异常类
const { HttpException, ParameterException } = require('../../global/http-exception')

module.exports = {

  async getCartByUserId(ctx) {
    const userId = getUserId(ctx)
    const params = {
      userId,
      ...ctx.request.query
    }
    const res = await Service.getCartByUserId(params)
    if (res) {
      const data = res
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

  //获取商品在购物车中的数量，返回0则不存在购物车
  async getCartCountByUserId(ctx) {
    const id = getUserId(ctx)
    const res = await Service.getCartCountByUserId(id)
    if (res) {
      const data = res[0]['COUNT(1)']
      ctx.body = {
        code: 200,
        msg: 'success',
        data: {
          count: data
        }
      }
    } else {
      const error = new HttpException('服务器异常')
      throw error
    }
  },

  async addCart(ctx) {
    const userId = getUserId(ctx)
    const { goodsId, quanity } = ctx.request.body;
    if(!goodsId || !quanity) {
      const error = new ParameterException('参数有误', 10001)
      throw error
    }
    const params = {
      goodsId,
      quanity,
      userId
    }
    const res = await Service.addCart(params)
    if (res) {
      const data = res
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

  //删除购物车商品
  async deleteCart(ctx) {
    const userId = getUserId(ctx)
    console.log('ctx.request.body: ', ctx.request.body);

    const { ids } = ctx.request.body;
    console.log('deleteCart: ', ids);
    // 如果这个参数没有传入，那么会报错
    if(!ids) {
      const error = new ParameterException('id不能为空', 10001)
      throw error
    }
    const params = {
      ids,
      userId
    }
    const result = Service.deleteCart(params)
    if(result) {
      ctx.body = { 
        code: 200,
        msg: '删除成功',
      }
    } else {
      const error = new HttpException('服务器异常')
      throw error
    }
  },

}