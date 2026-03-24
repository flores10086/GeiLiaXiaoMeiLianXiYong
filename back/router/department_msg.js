const express = require('express')
const router = express.Router()
const departmentHandler = require('../router_handle/department_msg.js')

// 获取部门消息
router.post('/getDepartmentMsg', departmentHandler.getDepartmentMsg)

// 获取部门消息
router.post('/getDepartmentMsgList', departmentHandler.getDepartmentMsgList)

// 返回用户阅读列表及状态
router.post('/getReadListAndStatus', departmentHandler.getReadListAndStatus)

//用户点击消息后，对read_list内的数组进行删减 参数
router.post('/clickDelete', departmentHandler.clickDelete)

// 把新发布文章的id插入到当前所属部门的用户的read_list中 
router.post('/changeUserReadList', departmentHandler.changeUserReadList)

// 把删除的文章的id从当前所属部门的用户的read_list中 删除
router.post('/changeUserReadListButDelete', departmentHandler.changeUserReadListButDelete)

module.exports = router