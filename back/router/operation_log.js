const express = require('express');
const router = express.Router()

const operationLogHandler = require('../router_handle/operation_log.js')

// 操作记录
router.post('/operationLog', operationLogHandler.operationLog)

// 返回操作日志记录
router.post('/operationLogList', operationLogHandler.operationLogList)

// 搜素最近的十条操作记录
router.post('/searchOperationLogList', operationLogHandler.searchOperationLogList)

// 返回操作记录长度
router.post('/operationLogListLength', operationLogHandler.operationLogListLength)

// 监听换页返回数据 操作日志列表
router.post('/returnOperationListData', operationLogHandler.returnOperationListData)

// 清空登录日志 truncate
router.post('/clearOperationLogList', operationLogHandler.clearOperationLogList)


module.exports = router