const db = require('../db/index')

// 产品入库 创建产品
exports.createProduct = (req, res) => {
    const {
        product_id,
        product_name,
        product_category,
        product_unit,
        product_inwarehouse_number,
        product_single_price,
        product_create_person,
        in_memo
    } = req.body

    const product_create_time = new Date()
    const product_all_price = product_inwarehouse_number * 1 * product_single_price * 1
    const sql0 = 'SELECT * from product where product_id = ?'
    db.query(sql0, product_id, (err, result) => {
        if (result.length > 0) {
            res.send({
                status: 1,
                message: '该产品编号存在'
            })
        }
        const sql = 'INSERT INTO product SET ?'
        db.query(sql, {
            product_id,
            product_name,
            product_category,
            product_unit,
            product_inwarehouse_number,
            product_single_price,
            product_all_price,
            product_create_person,
            product_create_time,
            in_memo
        }, (err, result) => {
            if (err) return res.cc(err)
            res.send({
                status: 0,
                message: '添加产品成功',
            })
        })
    })
}

// 删除产品 
exports.deleteProduct = (req, res) => {
    const sql = 'delete from product where id = ?'
    db.query(sql, req.body.id, (err, results) => {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            message: '删除产品成功',
        })
    })
}

// 编辑产品信息
exports.editProduct = (req, res) => {
    const {
        product_name,
        product_category,
        product_unit,
        product_inwarehouse_number,
        product_single_price,
        in_memo,
        id
    } = req.body
    const product_update_time = new Date()
    const product_all_price = product_inwarehouse_number * 1 * product_single_price * 1
    const sql = `UPDATE product 
                 SET product_name = ?, 
                     product_category = ?, 
                     product_unit = ?, 
                     product_inwarehouse_number = ?, 
                     product_single_price = ?, 
                     product_all_price = ?, 
                     product_update_time = ?, 
                     in_memo = ? 
                 WHERE id = ?`
    db.query(sql, [
        product_name,
        product_category,
        product_unit,
        product_inwarehouse_number,
        product_single_price,
        product_all_price,
        product_update_time,
        in_memo,
        id
    ], (err, result) => {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            message: '编辑产品信息成功',
        })
    })
}

// 获取产品列表
exports.getProductList = (req, res) => {
    const sql = 'SELECT * FROM product where product_inwarehouse_number >= 0'
    db.query(sql, (err, results) => {
        if (err) return res.cc(err)
        res.send(results)
    })
}

// 产品申请出库
exports.applyOutProduct = (req, res) => {
    const product_out_status = '申请出库'
    const {
        id,
        product_out_id,
        product_single_price,
        product_out_number,
        product_out_apply_person,
        apply_memo
    } = req.body
    const product_apply_time = new Date()
    const product_out_price = product_out_number * 1 * product_single_price * 1
    const sql0 = 'SELECT * from product where product_out_id = ?'
    db.query(sql0, product_out_id, (err, result) => {
        if (result.length > 0) {
            res.send({
                status: 1,
                message: '申请出库编号存在'
            })
        }
        else {
            const sql = `UPDATE product 
            SET product_out_status = ?, 
                product_out_id = ?, 
                product_out_number = ?, 
                product_out_price = ?, 
                product_out_apply_person = ?, 
                apply_memo = ? ,
                product_apply_time = ?
            WHERE id = ?`
            db.query(sql, [
                product_out_status,
                product_out_id,
                product_out_number,
                product_out_price,
                product_out_apply_person,
                apply_memo,
                product_apply_time,
                id
            ], (err, result) => {
                if (err) {
                    return res.cc(err)
                }
                res.send({
                    status: 0,
                    message: '申请出库成功',
                })
            })
        }
    })

}

// 产品审核列表
exports.applyProductList = (req, res) => {
    const sql = 'SELECT * FROM product WHERE product_out_status not in ("同意")'
    db.query(sql, (err, results) => {
        if (err) return res.cc(err)
        res.send(results)
    })
}

// 对产品进行撤回申请
exports.withdrawApplyProduct = (req, res) => {
    const sql = `update product set 
        product_out_id = NULL , 
        product_out_status = NULL,
        product_out_number = NULL , 
        product_out_apply_person = NULL ,
        apply_memo = NULL, 
        product_out_price = NULL,
        product_apply_time = NULL
        where id = ?`
    db.query(sql, req.body.id, (err, result) => {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            message: '撤回申请成功',
        })
    })
}

// 产品审核
exports.auditProduct = (req, res) => {
    const {
        id,
        product_out_id,
        product_out_status,
        audit_memo,
        product_out_price,
        product_out_audit_person,
        product_out_apply_person,
        product_inwarehouse_number,
        product_single_price,
        product_out_number,
        product_apply_time
    } = req.body
    const product_audit_time = new Date()
    if (product_out_status == '同意') {
        // // 产品出库总价
        // product_out_price = product_out_number * 1 * product_single_price * 1
        // 新的库存数量
        const newWarehouseNumber = product_inwarehouse_number * 1 - product_out_number * 1
        // 新的库存总价
        const product_all_price = newWarehouseNumber * 1 * product_single_price * 1
        const sql = 'insert into outproduct set ?'
        db.query(sql, {
            product_out_id,
            product_out_number,
            product_out_price,
            product_out_audit_person,
            product_out_apply_person,
            product_audit_time,
            audit_memo,
            product_apply_time
        }, (err, result) => {
            if (err) return res.cc(err)
            //      id,
            //     product_out_id,
            //     product_single_price,
            //     product_out_number,
            //     product_out_apply_person,
            //     apply_memo
            const sql1 = ` 
            update product set 
                product_inwarehouse_number = ?,
                product_all_price = ?,
                product_out_status = NULL,
                product_out_id = NULL ,
                product_single_price = NULL ,
                product_out_number = NULL , 
                product_out_apply_person = NULL ,
                apply_memo = NULL, 
                product_out_price = NULL,
                product_apply_time = NULL 
              where id = ?`
            db.query(sql1, [newWarehouseNumber, product_all_price, req.body.id], (err, result) => {
                res.send({
                    status: 0,
                    message: '产品出库成功',
                })
            })
        })
    }
    if (product_out_status == '否决') {
        const sql = 'update product set audit_memo = ?, product_out_status = ?,product_audit_time = ?,product_out_audit_person = ? where id = ?'
        db.query(sql, [audit_memo, product_out_status, product_audit_time, product_out_audit_person, id], (err, result) => {
            if (err) return res.cc(err)
            res.send({
                status: 0,
                message: '产品出库否决成功',
            })
        })
    }
}

// 通过入库编号对产品搜索 
exports.searchProductForId = (req, res) => {
    const sql = 'select * from product where product_id = ?'
    db.query(sql, req.body.product_id, (err, results) => {
        if (err) return res.cc(err)
        res.send(results)
    })
}

// 通过出库申请编号对产品搜索 
exports.searchProductForApplyId = (req, res) => {
    const sql = 'select * from product where product_out_id = ?'
    db.query(sql, req.body.product_out_id, (err, results) => {
        if (err) return res.cc(err)
        res.send(results)
    })
}

// 通过出库编号对产品搜索
exports.searchProductForOutId = (req, res) => {
    const sql = 'select * from outproduct where product_out_id = ?'
    db.query(sql, req.body.product_out_id, (err, results) => {
        if (err) return res.cc(err)
        res.send(results)
    })
}

// 获取产品总数
exports.getProductLength = (req, res) => {
    const sql = 'SELECT * FROM product where product_inwarehouse_number >= 0'
    db.query(sql, (err, results) => {
        if (err) return res.cc(err)
        res.send({
            length: results.length
        })
    })
}

// 获取申请出库产品总数
exports.getApplyProductLength = (req, res) => {
    const sql = 'select * from product where product_out_status ="申请出库" || product_out_status ="否决"'
    db.query(sql, (err, results) => {
        if (err) return res.cc(err)
        res.send({
            length: results.length
        })
    })
}

// 出库产品列表
exports.auditProductList = (req, res) => {
    const sql = 'SELECT * FROM outproduct'
    db.query(sql, (err, results) => {
        if (err) return res.cc(err)
        res.send(results)
    })
}

// 获取出库产品总数
exports.getOutProductLength = (req, res) => {
    const sql = 'select * from outproduct'
    db.query(sql, (err, results) => {
        if (err) return res.cc(err)
        res.send({
            length: results.length
        })
    })
}

// 监听换页并返回数据  产品页面
exports.returnProductListData = (req, res) => {
    const number = (req.body.pager - 1) * 10;
    // const sql = `SELECT * FROM product WHERE product_out_status = NULL order by product_create_time LIMIT 10 OFFSET ${number}`;
    const sql = `SELECT * FROM product WHERE product_out_status IS NULL ORDER BY product_create_time LIMIT 10 OFFSET ${number}`;
    db.query(sql, (err, results) => {
        if (err) return res.cc(err);
        res.send(results);
    });
}

// 监听换页并返回数据  申请出库页面
exports.returnApplyProductListData = (req, res) => {
    const number = (req.body.pager - 1) * 10;
    const sql = `SELECT * FROM product WHERE product_out_status not in  ("NULL") order by product_apply_time LIMIT 10 OFFSET ${number}`;
    db.query(sql, (err, results) => {
        if (err) return res.cc(err);
        res.send(results);
    });
}

// 监听换页并返回数据  出库页面
exports.returnOutProductListData = (req, res) => {
    const number = (req.body.pager - 1) * 10;
    const sql = `SELECT * FROM outproduct order by product_audit_time LIMIT 10 OFFSET ${number}`;
    db.query(sql, (err, results) => {
        if (err) return res.cc(err);
        res.send(results);
    });
}