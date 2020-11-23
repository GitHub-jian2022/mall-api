const Service = require('../../service/frontend/cate');
const { treeMenu } = require('../../utils/treeMenu')
// 导入异常类
const { HttpException } = require('../../global/http-exception')

module.exports = {

  async getCate(ctx) {
    const res = await Service.getCate()
    let data = []
    treeMenu(res,(list => {
      data = list
    }))
    if (res) {
      // let data = treeMenu(res)();
      ctx.body = { 
        code: 200,
        msg: 'ok',
        data,
      }
    } else {
      const error = new HttpException('服务器异常')
      throw error
    }
  },
}