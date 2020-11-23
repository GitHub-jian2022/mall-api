const {
  connection
} = require('../../config/sql');

module.exports = {
  //查找用户, user_type=1是管理员
  getUser(phone) {
    const sql = `select * from user where phone='${phone}'  and user_type=1`
    return new Promise((resolve, reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err)
        resolve(result[0])
      })
    })
  },
  //根据id获取用户信息
  getUserInfo(id) {
    const sql = `SELECT roles.*,user.* from roles,user where roles.type = user.user_type AND user.id=${id}`;
    return new Promise((resolve, reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err);
        resolve(result[0]);
      })
    })
  },
  update(data) {
    const { phone, username, password, id } = data;
    const sql = `UPDATE user SET phone='${phone}', username='${username}',password='${password}' WHERE (id)=('${id}')`
    return new Promise((resolve, reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err);
        resolve(result);
      })
    })
  },

  // 上传头像
  updateAvatar(params) {
    const { id, avatar } = params
    const sql = `UPDATE user SET avatar='${avatar}' WHERE id='${id}'`
    return new Promise((resolve, reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err)
        resolve(result)
      })
    })
  },


    // 多条件查找用户
    getUserByKeyWord(params) {
    const {
      keyword,
      page = 1,
      size = 10,
    } = params;
    const start = (page - 1) * size;
    const end = size
    let sql1 = `SELECT * from user WHERE 1=1`
    let sql2 = `select COUNT(1) from user WHERE 1=1`
    if (keyword) {
      sql1 += ` and (username LIKE '%${keyword}%' OR phone LIKE '${keyword}%' OR nickname LIKE '${keyword}%')`
      sql2 += ` and (username LIKE '%${keyword}%' OR phone LIKE '${keyword}%' OR nickname LIKE '${keyword}%')`
    }
    sql1 += ` ORDER BY user.create_time DESC limit ${start},${end}`

    const sql = `${sql1};${sql2}`;
    return new Promise((resolve, reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err)
        resolve(result)
      })
    })
  },

}