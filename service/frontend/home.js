const {
  connection
} = require('../../config/sql');

module.exports = {
  //查找首页轮播图数据
  getBanner() {
    //获取轮播图
    const sql = `select * from banner`
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err)
        resolve(result)
      })
    })
  },
  //查找首页商品数据
  getGoods() {
    //获取商品数据,type=1 新品, 2 热门, 3 推荐
    const sql = `select * from goods where type<4`
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err)
        resolve(result)
      })
    })
  },
}