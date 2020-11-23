const Service = require('../../service/frontend/home');
// 导入异常类
const { HttpException } = require('../../global/http-exception')

module.exports = {

  async getInfos(ctx) {

    const res1 = await Service.getBanner()
    const res2 = await Service.getGoods()
    if (res1 && res2) {
      const newGoodses = res2.filter(v => v.type == 1)
      const hotGoodses = res2.filter(v => v.type == 2)
      const recommendGoodses = res2.filter(v => v.type == 3)
      const data = {
        carousels: res1,
        newGoodses,
        hotGoodses,
        recommendGoodses
      }
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
}