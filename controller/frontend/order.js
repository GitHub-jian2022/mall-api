const Service = require('../../service/frontend/order');
const { getUserId }= require("../../utils/jwt");

// 导入异常类
const { HttpException, ParameterException } = require('../../global/http-exception')

module.exports = {

  async getOrder(ctx) {
    const id = getUserId(ctx)
    const res = await Service.getOrderByUserId(id)
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

  async addOrder(ctx) {
    const userId = getUserId(ctx)
    const { goodsList, address_name, phone, price } = ctx.request.body;
    if(!goodsList || !address_name || !phone || !price) {
      const error = new ParameterException('缺少参数', 10001)
      throw error
    }
    const orderId = new Date().getTime()+parseInt((Math.random()*100).toFixed(0))
    const create_time = new Date().getTime()
    const params = {
      goodsList,
      address_name,
      phone,
      price,
      userId,
      status: 1,
      orderId,
      create_time
    }
    const res = await Service.addOrder(params)
    if (res) {
      const data = res
      ctx.body = {
        code: 200,
        msg: 'ok',
        data
      }
    } else {
      const error = new HttpException('服务器异常')
      throw error
    }
  },

  //删除订单
  async deleteOrder(ctx) {
    const userId = getUserId(ctx)
    const { ids } = ctx.request.body;
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