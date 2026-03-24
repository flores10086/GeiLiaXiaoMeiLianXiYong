const express = require('express');
const router = express.Router()

const loginLogHandler = require('../router_handle/login_log.js')

// 登陆记录
router.post('/loginLog', loginLogHandler.loginLog)

// 返回登录记录
router.post('/loginLogList', loginLogHandler.loginLogList)

// 搜素最近的十条登陆记录
router.post('/searchloginLogList', loginLogHandler.searchloginLogList)

// 返回登录记录长度
router.post('/loginLogListLength', loginLogHandler.loginLogListLength)

// 监听换页返回数据 登录日志列表
router.post('/returnLoginListData', loginLogHandler.returnLoginListData)

// 清空登录日志 truncate
router.post('/clearloginLogList', loginLogHandler.clearloginLogList)




module.exports = router