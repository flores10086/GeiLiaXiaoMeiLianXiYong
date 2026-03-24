const db = require('../db/index')

// account 账号
// name 名字
// email 邮箱
// login_time 登陆时间

// 登录记录
exports.loginLog = (req, res) => {
    const { account, name, email } = req.body
    const login_time = new Date()
    const sql = 'INSERT INTO login_log SET?'
    db.query(sql, { account, name, email, login_time }, (err, result) => {
        if (err) return res.cc(err)
        res.send()
    })
}

// 返回登录记录
exports.loginLogList = (req, res) => {
    const sql = 'select * from login_log'
    db.query(sql, (err, result) => {
        if (err) return res.cc(err)
        res.send(result)
    })
}

// 搜素最近的十条登陆记录
exports.searchloginLogList = (req, res) => {
    const sql = 'select * from login_log where account = ? order by login_time limit 10'
    db.query(sql, req.body.account, (err, result) => {
        if (err) return res.cc(err)
        res.send(result)
    })
}

// 返回登录记录长度
exports.loginLogListLength = (req, res) => {
    const sql = 'select * from login_log'
    db.query(sql, (err, result) => {
        if (err) return res.cc(err)
        res.send({
            length: result.length
        })
    })
}

// 监听换页返回数据 登录日志列表
exports.returnLoginListData = (req, res) => {
    const number = (req.body.pager - 1) * 10
    const sql = `select * from login_log order by login_time limit 10 offset ${number}`
    db.query(sql, (err, result) => {
        if (err) return res.cc(err)
        res.send(result)
    })
}

// 清空登录日志 truncate
exports.clearloginLogList = (req, res) => {
    const sql = 'truncate table login_log'
    db.query(sql, (err, result) => {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            message: '数据表清空成功'
        })
    })
}