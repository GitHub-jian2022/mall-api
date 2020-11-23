const {
  connection
} = require('../../config/sql');

module.exports = {
  //查找用户
 getUser(phone) {
    const sql = `select * from user where phone='${phone}'`
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err)
        resolve(result[0])
      })
    })
  },
  //根据id获取用户信息
  getUserInfo(id) {
    const sql = `SELECT roles.*,user.* from roles,user where roles.type = user.user_type AND user.id=${id}`;
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err);
        resolve(result[0]);
      })
    })
  },
  update(data) {
    const { id, phone, username, nickname, password, sign  } = data;
    let arr = []
    if(phone) {
      arr.push(`phone=${phone}`)
    }
    if(username) {
      arr.push(`username='${username}'`)
    }
    if(nickname) {
      arr.push(`nickname='${nickname}'`)
    }
    if(password) {
      arr.push(`password='${password}'`)
    }
    if(sign) {
      arr.push(`sign='${sign}'`)
    }
    const str = arr.join(',')
    const sql = `UPDATE user SET ${str} WHERE id='${id}'`
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err);
        resolve(result);
      })
    })
  },
  
  register(params) {
    console.log('register: ', params);
    const { phone, password} = params;
    // user_type=10是普通用户
    const user_type = 10
    const sql = `INSERT INTO user (phone, password, user_type) VALUES (${phone}, '${password}', ${user_type})`
    console.log('sql: ', sql);
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err);
        resolve(result);
      })
    })
  },

  //获取收货地址详情
  getAddressDetail(addressId) {
    const sql = `select * from address where id=${addressId}`
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err);
        resolve(result);
      })
    })
  },

  //获取收货地址
  getAddress(userId) {
    const sql = `select * from address where userId=${userId}`
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err);
        resolve(result);
      })
    })
  },

  //添加收货地址
  addAddress(data) {
    console.log('data: ', data);
    const { defaultFlag, cityName, detailAddress, provinceName, regionName, userName, userPhone, userId  } = data
    const sql = `INSERT INTO address (defaultFlag, city_name, detail_address,province_name, region_name, username, phone, userId) VALUES (${defaultFlag}, '${cityName}', '${detailAddress}', '${provinceName}', '${regionName}', '${userName}','${userPhone}', ${userId})`
    console.log('sql: ', sql);
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err);
        resolve(result);
      })
    })
  },

  //删除收货地址
  deleteAddress(params) {
    const { ids } = params
    const sql = `DELETE from address where id in(${ids.join(',')})`
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err);
        resolve(result);
      })
    })
  },

  //获取收藏
  getCollection(params) {
    const { userId, page=1, size=10 } = params
    const start = (page - 1) * size;
    const end = size
    const sql = `select * from collection,goods where collection.userId=${userId} AND collection.goodsId=goods.goodsId limit ${start},${end}`
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err);
        resolve(result);
      })
    })
  },

 //商品是否已收藏
 getCollectionCountByGoodsId(userId,goodsId) {
    const sql = `SELECT COUNT(1) FROM collection where userId=${userId} and goodsId=${goodsId}`
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err);
        resolve(result);
      })
    })
  },

  //添加收藏
  addCollection(params) {
    const { goodsId, userId } = params;
    const sql = `INSERT INTO collection (goodsId, userId) VALUES (${goodsId}, ${userId})`
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err);
        resolve(result);
      })
    })
  },
  
  //根据收藏id删除收藏
  deleteCollection(params) {
    const { ids, userId } = params
    const sql = `DELETE from collection where id in(${ids.join(',')}) AND userId=${userId}`
    console.log('sql: ', sql);
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err);
        resolve(result);
      })
    })
  },

  //根据商品id删除收藏
  deleteCollectionByGoodsId(params) {
    const { ids, userId } = params
    const sql = `DELETE from collection where goodsId in(${ids.join(',')}) AND userId=${userId}`
    return new Promise((resolve,reject) => {
      connection.query(sql, (err, result) => {
        err && reject(err);
        resolve(result);
      })
    })
  },
}