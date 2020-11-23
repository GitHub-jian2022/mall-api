//异常处理
const { HttpException } = require('../global/http-exception')

const catchError = async (ctx, next) => {
  // 尝试拦截错误
  try {

    await next()

  } catch (error) {

    // 判断是否是定义过的错误类型
    if (error instanceof HttpException) {
      ctx.body = {
        msg: error.msg,
        error_code: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = error.code

    }
  }
}

module.exports = catchError