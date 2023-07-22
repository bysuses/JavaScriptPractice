const mysql = require('mysql2/promise');

// create connection to database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'todoList',
  password: '12345678mko',
  decimalNumbers: true,
  namedPlaceholders: true,
});

module.exports = { pool };
