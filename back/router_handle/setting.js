const db = require('../db/index.js');
const fs = require('fs')

// 上传轮播图  set_value  set_name
exports.uploadSwiper = (req, res) => {
    let oldName = req.files[0].filename;
    let newName = Buffer.from(req.files[0].originalname, 'latin1').toString('utf8')
    fs.renameSync('./public/upload/' + oldName, './public/upload/' + newName)
    const sql = 'update setting set set_value = ? where set_name = ?'
    db.query(sql, [`http://127.0.0.1:3007/upload/${newName}`, req.body.name], (err, result) => {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            message: '上传轮播图成功'
        })
    })
}

// 获取所有轮播图
exports.getAllSwiper = (req, res) => {
    // like 匹配字段是否符合 前缀为... 
    const sql = "select * from setting where set_name like 'swiper%'"
    db.query(sql, (err, result) => {
        if (err) return res.cc(err)
        let array = []
        result.forEach((e) => {
            array.push(e.set_value)
        })
        res.send(array)
    })
}

// 获取公司名称 
exports.getCompanyName = (req, res) => {
    const sql = 'select * from setting where set_name = "公司名称" '
    db.query(sql, req.body.id, (err, result) => {
        if (err) return res.cc(err)
        res.send(result[0].set_value)
    })
}

// 修改公司名称 set_value
exports.changeCompanyName = (req, res) => {
    const sql = 'update setting set set_value = ? where set_name = "公司名称"'
    db.query(sql, req.body.set_value, (err, result) => {
        if (err) {
            return res.cc(err)
        }
        res.send({
            status: 0,
            message: '修改公司名称成功'
        })
    })
}

// 编辑公司介绍接口 set_text set_name
exports.changeCompanyIntroduce = (req, res) => {
    const sql = 'update setting set set_text = ? where set_name = ?'
    db.query(sql, [req.body.set_text, req.body.set_name], (err, result) => {
        if (err) {
            return res.cc(err)
        }
        res.send({
            status: 0,
            message: '修改公司介绍成功'
        })
    })
}

// 获取公司介绍  set_name   
exports.getCompanyIntroduce = (req, res) => {
    const sql = 'select * from setting where set_name = ? '
    db.query(sql, req.body.set_name, (err, result) => {
        if (err) return res.cc(err)
        res.send(result[0].set_text)
    })
}

// 获取所有公司有关的信息 
exports.getAllCompanyIntroduce = (req, res) => {
    const sql = 'select * from setting where set_name like "公司%" '
    db.query(sql, (err, result) => {
        if (err) return res.cc(err)
        res.send(result)
    })
}

// -------------------------------------其他设置-------------------------------------

// 部门设置 
exports.setDepartment = (req, res) => {
    const sql = 'update setting set set_value = ? where set_name = "部门设置"'
    db.query(sql, [req.body.set_value], (err, result) => {
        if (err) {
            return res.cc(err)
        }
        res.send({
            status: 0,
            message: '修改部门设置成功'
        })
    })
}

// 获取部门 
exports.getDepartment = (req, res) => {
    const sql = 'select set_value from setting where set_name = "部门设置"'
    db.query(sql, (err, result) => {
        if (err) return res.cc(err)
        res.send(result[0].set_value)
    })
}

// 产品设置 
exports.setProduct = (req, res) => {
    const sql = 'update setting set set_value = ? where set_name = "产品设置"'
    db.query(sql, [req.body.set_value], (err, result) => {
        if (err) {
            return res.cc(err)
        }
        res.send({
            status: 0,
            message: '修改产品设置成功'
        })
    })
}

// 获取产品 
exports.getProduct = (req, res) => {
    const sql = 'select set_value from setting where set_name = "产品设置"'
    db.query(sql, (err, result) => {
        if (err) return res.cc(err)
        res.send(result[0].set_value)
    })
}