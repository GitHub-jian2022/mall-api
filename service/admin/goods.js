const {
  connection
} = require('../../config/sql');

module.exports = {
  //根据商品id查找商品
  getGoodsById(goodsId) {
    const sql = `select * from goods where goodsId=${goodsId}`
    return new Promise((resolve, reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err)
        resolve(result)
      })
    })
  },

  searchGoods(params) {
    //sort 1:价格升序,0:价格降序
    const {
      categoryId,
      keyword,
      page = 1,
      size = 10,
      sort = 0
    } = params;
    const start = (page - 1) * size;
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
    } else {
      sql1 += ` ORDER BY goods.create_time DESC limit ${start},${end}`
    }

    const sql = `${sql1};${sql2}`;
    return new Promise((resolve, reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err)
        resolve(result)
      })
    })
  },

  //查找全部商品
  getAllGoods() {
    //sort 1:升序,0:降序
    const {
      page = 1, size = 10, sort = 0
    } = params;
    const start = (page - 1) * size;
    const end = size
    let sql = ''
    if (sort == 1) {
      //默认升序
      sql = `select * from goods ORDER BY goods.sellingPrice limit ${start},${end}`
    } else {
      sql = `select * from goods ORDER BY goods.sellingPrice DESC limit ${start},${end}`
    }
    return new Promise((resolve, reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err)
        resolve(result)
      })
    })
  },

  //添加商品
  addGoods(params) {
    const {
      goodsName,
      goodsIntro,
      goodsCoverImg,
      sellingPrice,
      tag,
      type,
      categoryId
    } = params;
    const create_time = new Date().getTime()
    const sql = `INSERT INTO goods (goodsName, goodsIntro, goodsCoverImg, sellingPrice, tag, type, categoryId, create_time) VALUES ('${goodsName}', '${goodsIntro}', '${goodsCoverImg}', ${sellingPrice}, '${tag}', ${type}, ${categoryId}, ${create_time})`
    return new Promise((resolve, reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err);
        resolve(result);
      })
    })
  },

  //删除商品
  deleteGoods(params) {
    const {
      ids
    } = params
    const sql = `DELETE from goods where goodsId in(${ids.join(',')})`
    console.log('sql: ', sql);
    return new Promise((resolve, reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err);
        resolve(result);
      })
    })
  },
}