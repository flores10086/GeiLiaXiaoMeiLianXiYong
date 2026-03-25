const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',//mysql用户名
    password: '092110',//mysql密码
    database: 'mydbtest'//mysql数据库名
});

module.exports = db

