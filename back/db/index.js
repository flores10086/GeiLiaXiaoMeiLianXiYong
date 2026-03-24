const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'xds',
    password: 'hdjz30536',
    database: 'back_system'
});

module.exports = db

