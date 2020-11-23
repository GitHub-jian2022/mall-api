const {
  connection
} = require('../../config/sql');
const { v4: uuidv4 } = require('node-uuid');



module.exports = {
  //查找商品分类数据
  getCate() {
    const sql = `SELECT * from cate`
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err)
        // var arr = treeMenu(result,15,1);
        // console.log(arr);
        resolve(result)
      })
    })
  },

  // 多条件搜索商品分类
  searchCategories(params) {
    //sort 1:升序,0:降序
    const {
      categoryId,
      keyword,
      page = 1,
      size = 10,
      level
    } = params;
    const start = (page - 1) * size;
    const end = size;
    let sql1 = `SELECT * from cate WHERE 1=1`
    let sql2 = `select COUNT(1) from cate WHERE 1=1`
    if (categoryId) {
      sql1 += ` and id=${categoryId}`
      sql2 += ` and id=${categoryId}`
    } 
    if (keyword) {
      sql1 += ` and category_name like '%${keyword}%'`
      sql2 += ` and category_name like '%${keyword}%'`

    }
    if (level) {
      sql1 += ` and level=${level}`
      sql2 += ` and level=${level}`
    } 
    sql1 += ` ORDER BY create_time DESC limit ${start},${end}`
    const sql = `${sql1};${sql2}`;
    return new Promise((resolve, reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err)
        resolve(result)
      })
    })
  },

  // 根据层级获取商品分类
  searchCategoriesByLevel(params) {
    console.log('params: ', params);
    const { level } = params
    const sql = `SELECT * from cate where level=${level}`
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err)
        resolve(result)
      })
    })
  },

  //添加商品分类
  addCategories(params) {
    const {
      level,
      category_name,
      parentId
    } = params;
    console.log('params: ', params);
    const create_time = new Date().getTime()
    const sql = `INSERT INTO cate (level, category_name, parentId,create_time) VALUES (${level}, '${category_name}', '${parentId}',${create_time})`
    return new Promise((resolve, reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err);
        resolve(result);
      })
    })
  },

  //删除分类
  deleteCategories(params) {
    const {
      ids
    } = params
    const sql = `DELETE from cate where id in(${ids.join(',')})`
    console.log('sql: ', sql);
    return new Promise((resolve, reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err);
        resolve(result);
      })
    })
  },

  // 根据分类id获取分类数据
  hasChildren(params) {
    const {
      ids
    } = params
    const sql = `SELECT * from cate where parentId in('${ids.join(',')}')`
    return new Promise((resolve, reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err);
        resolve(result);
      })
    })
  }
}