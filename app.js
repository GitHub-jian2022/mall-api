const Koa = require('koa'),
      Router = require('koa-router'),
      Static = require('koa-static'),
      BodyParser = require('koa-bodyparser'),
      path = require('path'),
      jsonp = require('koa-json');
      
const { baseUrl, port } = require('./config/baseUrl')
;
// 引入并注册全局异常处理
// 注意：要放在代码前面，路由注册前面
const catchError = require('./middleware/exception')

const app = new Koa();

app.use(catchError)

//配置静态资源
app.use(Static(path.join(__dirname,'static')))
//配置打包资源路径
app.use(Static(path.join(__dirname,'public/dist')))

//配置post请求数据接收
app.use(BodyParser({
    multipart: true,
    strict:false,//设为false, 如果启用，则不解析GET，HEAD，DELETE请求，默认为true
    formidable: {
        maxFileSize: 200 * 1024 * 1024
    }
}));
//jsonp
app.use(jsonp());

//解决跨域
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', ctx.header.origin);
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild,token');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
        ctx.body = 200;
    } else {
        await next();
    }
});

//引入路由模块routes
const api = require('./router/index');
const router = new Router();
router.use('',api);

//启动路由
app.use(router.routes());
app.use(router.allowedMethods());

//启动服务器
app.listen(port, () => {
  console.log(`starting at ${baseUrl}:${port}`)
})

//定时清理图片
const { scheduleCronstyle } = require('./utils/schedule')
scheduleCronstyle('static/images/goods')



//apidom生成文档指令
//命令格式为apidoc -i 项目实际目录 -o 希望输出到的目录
//例如apidoc -i D:\workspace\test -o D:\api-output

// 根目录下输入指令

// 前台接口文档 
// 1、修改package.json文件 apidoc的url与sampleUrl为    http://127.0.0.1:8090/api
// 2、apidoc -i ./router/frontend -o ./static/apidom/frontend

// 后台系统接口文档 修改package.json文件 apidoc的url与sampleUrl为
// 1、修改package.json文件 apidoc的url与sampleUrl为    http://127.0.0.1:8090/admin
// 2、apidoc -i ./router/admin -o ./static/apidom/admin