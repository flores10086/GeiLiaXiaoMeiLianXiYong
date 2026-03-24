const db = require('../db/index')

// 获取部门消息
exports.getDepartmentMsg = (req, res) => {
    const { id, department } = req.body
    // 根据发布消息的时候的部门获取到用户的部门消息 并形成数组
    const sql = 'select * from message where message_receipt_object = ? and message_status = 0'
    db.query(sql, department, (err, result) => {
        if (err) return res.cc(err)
        let msgArr = []
        result.forEach((e) => {
            msgArr.push(e.id)
        })
        let msg = result
        // 更新用户的 未读列表read_list 以及 read_status
        const sql1 = 'update users set read_list = ? , read_status = 1 where id = ?'
        db.query(sql1, [JSON.stringify(msgArr), id], (err, result) => {
            if (err) return res.cc(err)
            res.send({
                status: 0,
                id,
                read_list: msgArr,
                msg
            })
        })
    })
}

// 获取部门消息
exports.getDepartmentMsgList = (req, res) => {
    const { department } = req.body
    const sql = 'select * from message where message_receipt_object = ? and message_status = 0'
    db.query(sql, department, (err, result) => {
        if (err) return res.cc(err)
        res.send(result)
    })

}

// 返回用户阅读列表及状态
exports.getReadListAndStatus = (req, res) => {
    const sql = 'select read_list,read_status from users where id = ?'
    db.query(sql, req.body.id, (err, result) => {
        if (err) return res.cc(err)
        res.send(result)
    })
}

//用户点击消息后，对read_list内的数组进行删减 参数
exports.clickDelete = (req, res) => {
    const sql = 'select read_list from users where id = ?'
    db.query(sql, req.body.id, (err, result) => {
        if (err) return res.cc(err)

        // 检查read_list是否为null，避免TypeError
        let readList = result[0].read_list ? JSON.parse(result[0].read_list) : [];

        // 过滤掉指定的消息id
        const updatedList = readList.filter(item => item != req.body.readid)

        // 讲过滤后的结果转换为字符串
        const list = JSON.stringify(updatedList)

        const sql = 'update users set read_list = ? where id = ?'
        db.query(sql, [list, req.body.id], (err, result) => {
            if (err) return res.cc(err)
            res.send({
                status: 0,
                message: '已读'
            })
        })
    })
}

// 把文章的id插入到当前所属部门的用户的read_list中 
exports.changeUserReadList = (req, res) => {
    const sql = 'select read_list, read_status, id from users where department = ?';
    db.query(sql, req.body.department, (err, result) => {
        if (err) return res.cc(err);

        result.forEach((e) => {
            if (e.read_status == 1) {
                let arr = [];
                // 检查read_list是否为null或为空
                if (e.read_list) {
                    try {
                        arr = JSON.parse(e.read_list);
                    } catch (err) {
                        return res.cc('read_list解析失败');
                    }
                }
                // 将newid插入数组，如果需要字符串形式，使用String转换
                arr.push(String(req.body.newid));  // 确保newid是字符串
                arr = JSON.stringify(arr);  // 将数组转换为JSON字符串
                console.log('1',arr);
                const sql1 = 'update users set read_list = ? where id = ?';
                // 更新数据库中的read_list
                db.query(sql1, [arr, e.id], (err, result) => {
                    if (err) return res.cc(err);
                });
            }
        });
        res.send({
            status: 0,
            message: '更新成功',
        });
    });
};

// 把删除的文章的id从当前所属部门的用req.body.newid中 
exports.changeUserReadListButDelete = (req, res) => {
    const sql = 'select read_list , read_status , id from users where department =?'
    db.query(sql, req.body.department, (err, result) => {
        if (err) return res.cc(err)
        result.forEach((e) => {
            if (e.read_status == 1) {
                let arr = JSON.parse(e.read_list)
                arr = arr.filter(item => {
                    return item != req.body.deleteid
                })
                arr = JSON.stringify(arr)
                const sql1 = 'update users set read_list = ? where id = ?'
                console.log('2',arr);
                db.query(sql1, [arr, e.id], (err, result) => { })
            }
        })
        res.send({
            status: 0,
            message: '更新成功'
        })
    })
}