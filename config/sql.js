const mysql = require('mysql');
const connection = mysql.createConnection({
  // host: '127.0.0.1',
  host: '47.100.138.242',
  user: 'root',
  // password: 'root',
  password: 'Abcd1234.',
  database: 'mall',
  multipleStatements: true // 开启同时执行多条SQL
});


module.exports = {
  connection
};