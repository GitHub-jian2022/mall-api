/**
 * http 错误类型的 对象
 */

class HttpException extends Error {
    /**
     * 构造函数，可以设置默认值
     * @param {返回的错误信息} msg 
     * @param {错误编号} errorCode 
     * @param {httpcode} code 
     */
    constructor(msg = '服务器异常', errorCode = 10000, code = 500) {
        super()
        this.errorCode = errorCode
        this.code = code
        this.msg = msg
    }

}

/**
 * 参数错误 的异常类
 */
class ParameterException extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 400
        this.msg = msg || '参数错误'
        this.errorCode = errorCode || 100001
    }
}

module.exports = {
    HttpException,
    ParameterException
}