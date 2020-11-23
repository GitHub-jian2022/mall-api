const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'mall',
  multipleStatements: true // 开启同时执行多条SQL
});


module.exports = {
  connection
};