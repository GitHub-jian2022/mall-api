const Service = require('../../service/admin/roles');

// 导入异常类
const { HttpException, ParameterException } = require('../../global/http-exception')

module.exports = {
  async getRolesByKeyWord(ctx) {
    console.log('getRolesByKeyWord: ', ctx.request.query);
    const result = await Service.getRolesByKeyWord(ctx.request.query)
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