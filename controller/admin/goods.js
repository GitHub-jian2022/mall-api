const Service = require('../../service/admin/goods');
// 导入异常类
const {
  HttpException,
  ParameterException
} = require('../../global/http-exception')

module.exports = {
  //根据商品id查找商品
  async getGoodsById(ctx) {
    console.log('ctx.params: ', ctx.params);
    const {
      goodsId
    } = ctx.params
    if (!goodsId) {
      const error = new ParameterException('商品id不能为空', 10001)
      throw error
    }
    const res = await Service.getGoodsById(goodsId)
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

  async searchGoods(ctx) {
    const params = ctx.request.query
    const result = await Service.searchGoods(params)
    if (result) {
      const data = result[0]
      const total = result[1][0]['COUNT(1)']
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

  //查找全部商品
  async getAllGoods(ctx) {
    const res = await Service.getAllGoods()
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

  //添加商品
  async addGoods(ctx) {
    const { body, file } = ctx.req
    console.log('file: ', file);
    const params = JSON.parse(body.goods)
    let path = file.destination + file.filename
    params.goodsCoverImg = path.replace('static','')
    console.log('params: ', params);
    const { goodsName, goodsIntro, goodsCoverImg, sellingPrice, tag, type, categoryId } = params
    //判断是否缺少参数
    if (!goodsName || !goodsIntro || !goodsCoverImg || !sellingPrice  || !type || !categoryId) {
      const error = new ParameterException('商品参数有误', 10001)
      throw error
    }
    const res = await Service.addGoods(params)
    if (res) {
      const data = res
      ctx.body = {
        code: 200,
        msg: '添加成功',
      }
    } else {
      const error = new HttpException('服务器异常')
      throw error
    }
  },

  //删除商品分类
  async deleteGoods(ctx) {
    console.log('deleteGoods: ', ctx.request.body);
    const { ids } = ctx.request.body;
    // 如果这个参数没有传入，那么会报错
    if(!ids) {
      const error = new ParameterException('id未传递', 10001)
      throw error
    }
    const params = {
      ids,
    }
    const result = Service.deleteGoods(params)
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