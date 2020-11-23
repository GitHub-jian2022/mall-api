const {
  connection
} = require('../../config/sql');

module.exports = {
  //查询用户购物车列表数据
  getCartByUserId(params) {
    const { userId, page=1, size=10 } = params
    const start = (page - 1) * size;
    const end = size
    const sql = `SELECT * from cart,goods where cart.goodsId=goods.goodsId AND cart.userId=${userId} limit ${start},${end}`
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err)
        resolve(result)
      })
    })
  },

  //获取商品在购物车中的数量，返回0则不存在购物车
  getCartCountByUserId(userId) {
    const sql = `SELECT COUNT(1) FROM cart where userId=${userId}`
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err)
        resolve(result)
      })
    })
  },

  //加入购物车
  addCart(params) {
    console.log('params: ', params);
    const { goodsId, quanity, userId } = params;
    const sql = `INSERT INTO cart (goodsId, quanity, userId) VALUES (${goodsId}, ${quanity}, ${userId})`
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err)
        resolve(result)
      })
    })
  },

  //删除购物车商品
  deleteCart(params) {
    console.log('params: ', params);
    const { ids, userId } = params;
    const sql = `DELETE from cart where id in(${ids.join(',')})`
    console.log('sql: ', sql);
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err)
        resolve(result)
      })
    })
  },
}