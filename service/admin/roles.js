const {
  connection
} = require('../../config/sql');

module.exports = {
  //条件查找角色
  getRolesByKeyWord(params) {
    const {
      keyword,
      page = 1,
      size = 10,
    } = params;
    const start = (page - 1) * size;
    const end = size
    let sql1 = `SELECT * from roles WHERE 1=1`
    let sql2 = `select COUNT(1) from roles WHERE 1=1`
    if (keyword) {
      sql1 += ` and (type_en LIKE '%${keyword}%' OR type_cn LIKE '${keyword}%')`
      sql2 += ` and (type_en LIKE '%${keyword}%' OR type_cn LIKE '${keyword}%')`
    }
    sql1 += ` limit ${start},${end}`

    const sql = `${sql1};${sql2}`;
    return new Promise((resolve, reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err)
        resolve(result)
      })
    })
  },
}