const { verify }= require("../utils/jwt");

async function auth(ctx,next){
  const { token } = ctx.request.header
  console.log('token: ', token);


  if(verify(token).success){
    await next();
  }else{
    ctx.body = {
      code  : 403,
      msg: '登录验证已过期,请重新登录'
    }
  }
}

module.exports = auth