const Service = require('../../service/frontend/goods');
// 导入异常类
const { HttpException, ParameterException } = require('../../global/http-exception')

const fs = require('fs');
const path = require('path');

module.exports = {

  async getGoodsById(ctx) {
    // console.log('ctx.params: ', ctx.params);
    const { goodsId } = ctx.params
    if(!goodsId) {
      const error = new ParameterException('商品id不能为空', 10001)
      throw error
    }
    const res = await Service.getGoodsById(goodsId)
    if (res) {
      let json = await JSON.parse(fs.readFileSync(path.join(__dirname,'../../static/goods_detail.json'),'utf8'))
      const data = res[0]
      data.goods_detail = json.goods_detail
      ctx.body = {
        code: 200,
        msg: 'success',
        data: {
          data
        }
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
}