const express = require('express')

const router = express.Router()

const overviewHandler = require('../router_handle/overview.js')

// 获取产品类别和总价
router.post('/getCategoryAndNumber', overviewHandler.getCategoryAndNumber)

// 获取不同角色与数量
router.post('/getAdminAndNumber', overviewHandler.getAdminAndNumber)

// 获取不同消息和等级
router.post('/getLevelAndNumber', overviewHandler.getLevelAndNumber)

// 返回每天登陆人数
router.post('/getDayAndNumber', overviewHandler.getDayAndNumber)



module.exports = router


