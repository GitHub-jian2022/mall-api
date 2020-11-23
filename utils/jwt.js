const jwt = require('jsonwebtoken') 
//token秘钥
const privateKey = 'uwsaosaouwuwsao'

/*
* @param param 要签名的参数
* @param time '15d'表示15天,'2h'表示2小时
* */

const sign = function (params, time = '2d') {
    const payload = params
    let token = jwt.sign(payload, privateKey, { expiresIn: time });
    return token
}

const verify = function (token) {
    let result = {};
    jwt.verify(token, privateKey, (error, decoded) => {
        if (error) {
            console.log('error: ', error);
            result.success = false
        } else {
            result.success = true
            result.decoded = decoded
        }
    });
    return result
}

//截取请求头token
const getUserId = (ctx) => {
    // const { token } = ctx.request.header
    const { token } = ctx.request.header
    // let token = token.split(' ').pop()
    // token = token.replace(/\"/g, "")
    const res = verify(token).decoded
    return res.userId
}

module.exports = {
    sign,
    verify,
    getUserId
}