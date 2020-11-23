const {
  connection
} = require('../../config/sql');

module.exports = {
  //
  getGoodsById(goodsId) {
    const sql = `select * from goods where goodsId=${goodsId}`
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err)
        resolve(result)
      })
    })
  },

  searchGoods(params) {
    console.log('params: ', params);
    const { categoryId, keyword, page=1, size=10, sort } = params;
    const start = (page-1)*size
    const end = size
    let sql1 = `SELECT  goods.*,cate.category_name FROM goods,cate where goods.categoryId=cate.id and 1=1`
    let sql2 = `select COUNT(1) from goods WHERE 1=1`
    if (categoryId) {
      sql1 += ` and categoryId=${categoryId}`
      sql2 += ` and categoryId=${categoryId}`
    } 
    if (keyword) {
      sql1 += ` and goodsName like '%${keyword}%'`
      sql2 += ` and goodsName like '%${keyword}%'`

    }
    if (sort == 1) {
      sql1 += ` ORDER BY goods.sellingPrice limit ${start},${end}`
    }else if(sort == 0) {
      sql1 += ` ORDER BY goods.sellingPrice DESC limit ${start},${end}`
    }  else {
      sql1 += ` ORDER BY goods.create_time DESC limit ${start},${end}`
    }
    console.log('sql1: ', sql1);

    const sql = `${sql1};${sql2}`;
    return new Promise((resolve, reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err)
        resolve(result)
      })
    })
  },
}