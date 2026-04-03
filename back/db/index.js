const mysql = require('mysql2')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',//mysql用户名
    password: '092110',//mysql密码
    database: 'mydbtest'//mysql数据库名
});

// ✅ 主动测试连接（关键！！）
db.getConnection((err, connection) => {
    if (err) {
        console.log('数据库连接失败 ❌：', err)
    } else {
        console.log('数据库连接成功 ✅')
        connection.release()
    }
})

module.exports = db

