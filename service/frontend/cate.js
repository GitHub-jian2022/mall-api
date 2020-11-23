const {
  connection
} = require('../../config/sql');



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
}