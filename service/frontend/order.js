const {
    connection
  } = require('../../config/sql');
  
  module.exports = {
    //查询用户订单
    getOrderByUserId(userId) {
      // SELECT * from `order`,order_link_goods LEFT JOIN goods on goods.goodsId=order_link_goods.goodsId  WHERE userId=1

      const sql = `SELECT * from 'order',order_link_goods LEFT JOIN goods on goods.goodsId=order_link_goods.goodsId  WHERE userId=${userId}`
      return new Promise((resolve,reject) => {
        connection.query(sql, (err, result) => {
          err && reject(err)
          resolve(result)
        })
      })
    },
    //创建订单
    addOrder(params) {
      console.log('params: ', params);
      const {
        goodsList,
        address_name,
        phone,
        price,
        userId,
        status,
        orderId,
        create_time
      } = params;

      const sql = `INSERT INTO 'order' (orderId, userId, address_name, phone, price, status, create_time) VALUES (${orderId}, ${userId}, ${address_name}, ${phone}, ${price}, ${status}, ${create_time})`
      
      // const sql2 = `INSERT INTO order_link_goods (orderId, quanity, goodsId) VALUES (${orderId}, ${quanity}, ${goodsId})`

      const sql2 = "INSERT INTO order_link_goods (orderId, quanity, goodsId) VALUES ?";
      const values = goodsList.map(v => {
        v.orderId = orderId
        return v
      })
      console.log('values: ', values);

      // return new Promise((resolve,reject) => {
      //   connection.query(sql,sql2, (err, result) => {
      //     err && reject(err)
      //     resolve(result)
      //   })
      // })
    },
    //删除订单
    deleteOrder(params) {
      const { ids, userId } = params;
      // const sql = `DELETE from 'order' where where id in(1,2,3,5)`
      const sql = `DELETE from 'order' where where orderId in(${ids.join(',')})`
      const sql2 = `DELETE from order_link_goods where orderId in(${ids.join(',')})`

      return new Promise((resolve,reject) => {
        connection.query(sql,sql2, (err, result) => {
          err && reject(err)
          resolve(result)
        })
      })
    },
  }