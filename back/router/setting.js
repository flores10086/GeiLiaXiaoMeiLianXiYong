// 系统设置模块路由

const express = require('express')

const router = express.Router()

const setHandler = require('../router_handle/setting')

// 上传轮播图
router.post('/uploadSwiper', setHandler.uploadSwiper)

// 获取所有轮播图
router.post('/getAllSwiper', setHandler.getAllSwiper)

// 获取公司名称
router.post('/getCompanyName', setHandler.getCompanyName)

// 修改公司名称
router.post('/changeCompanyName', setHandler.changeCompanyName)

// 编辑公司介绍
router.post('/changeCompanyIntroduce', setHandler.changeCompanyIntroduce)

// 获取公司介绍
router.post('/getCompanyIntroduce', setHandler.getCompanyIntroduce)

// 获取所有公司信息
router.post('/getAllCompanyIntroduce', setHandler.getAllCompanyIntroduce)

// 部门设置 
router.post('/setDepartment', setHandler.setDepartment)

// 获取部门 
router.post('/getDepartment', setHandler.getDepartment)

// 产品设置 
router.post('/setProduct', setHandler.setProduct)

// 获取产品 
router.post('/getProduct', setHandler.getProduct)

module.exports = router