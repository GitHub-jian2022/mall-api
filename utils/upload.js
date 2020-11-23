
const multer = require('koa-multer')

const createUpload = (url) => {
  //上传的文件保存在 url
  const storage = multer.diskStorage({
  //存储的位置
    destination(ctx, file, cb) {
      cb(null, url)
    },
    //文件名字的确定 multer默认帮我们取一个没有扩展名的文件名，因此需要我们自己定义
    filename(ctx, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })
  return multer({ storage })  // 文件储存路径
}

module.exports = {
  // upload
  createUpload
}