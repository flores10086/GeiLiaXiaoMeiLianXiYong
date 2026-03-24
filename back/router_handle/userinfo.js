const { ifError } = require('assert')
const db = require('../db/index.js')

const bcrypt = require('bcryptjs')

// 导入nodejs的crypto库生成uuid
const crypto = require('crypto')
// 处理文件路径
const fs = require('fs')

// 上传头像
exports.uploadAvatar = (req, res) => {
    //  生成唯一标识
    const onlyId = crypto.randomUUID()
    let oldName = req.files[0].filename;
    let newName = Buffer.from(req.files[0].originalname, 'latin1').toString('utf8')
    fs.renameSync('./public/upload/' + oldName, './public/upload/' + newName)
    const sql = 'insert into image set ? '
    db.query(sql, {
        image_url: `http://127.0.0.1:3007/upload/${newName}`,
        onlyId
    }, (err, result) => {
        if (err) return res.cc(err)
        res.send({
            onlyId,
            status: 0,
            url: 'http://127.0.0.1:3007/upload/' + newName
        })
    })
}

// 绑定账号 onlyId account url
exports.bindAccount = (req, res) => {
    const { account, onlyId, url } = req.body
    const sql = 'update image set account = ? where onlyid = ?'
    db.query(sql, [account, onlyId], (err, result) => {
        if (err) return res.cc(err)
        if (result.affectedRows == 1) {
            const sql1 = 'update users set image_url = ? where account = ?'
            db.query(sql1, [url, account], (err, result) => {
                if (err) return res.cc(err)
                res.send({
                    status: 0,
                    message: '修改成功'
                })
            })
        }
    })
}

// 修改用户密码 先输入旧密码oldPassword 新密码newPassword id
exports.changePassword = (req, res) => {
    const sql = 'select password from users where id = ?'
    db.query(sql, req.body.id, (err, result) => {
        if (err) return res.cc(err)

        // 校验是否查询到了用户
        if (result.length === 0) {
            return res.send({
                status: 1,
                message: '用户不存在'
            });
        }

        // bcrypt.compare是异步函数，需要用回调函数处理
        bcrypt.compare(req.body.oldPassword, result[0].password, (err, compareResult) => {
            if (err) return res.cc(err)
            if (!compareResult) {
                return res.send({
                    status: 1,
                    message: '原密码错误'
                })
            }

            // 对新密码进行加密
            req.body.newPassword = bcrypt.hashSync(req.body.newPassword, 10)

            const sql1 = 'update users set password = ? where id = ?'
            db.query(sql1, [req.body.newPassword, req.body.id], (err, result) => {
                if (err) return res.cc(err)
                if (result.affectedRows === 0) {
                    return res.send({
                        status: 1,
                        message: '修改密码失败'
                    });
                }
                res.send({
                    status: 0,
                    message: '修改成功'
                })
            })
        });
    })
}

// 获取用户信息 接收参数id
exports.getUserInfo = (req, res) => {
    const sql = 'select * from users where id = ? '
    db.query(sql, req.body.id, (err, result) => {
        if (err) return res.cc(err)
        result[0].password = ''
        res.send(
            result[0]
        )
    })
}

// 修改姓名 接收参数 id name
exports.changeName = (req, res) => {
    const { id, name } = req.body
    const sql = 'update users set name = ? where id = ?'
    db.query(sql, [name, id], (err, result) => {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            message: '修改成功'
        })
    })
}

// 修改性别
exports.changeSex = (req, res) => {
    const { id, sex } = req.body
    const sql = 'update users set sex = ? where id = ?'
    db.query(sql, [sex, id], (err, result) => {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            message: '修改成功'
        })
    })
}

// 修改邮箱
exports.changeEmail = (req, res) => {
    const { id, email } = req.body
    const sql = 'update users set email = ? where id = ?'
    db.query(sql, [email, id], (err, result) => {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            message: '修改成功'
        })
    })
}

// 验证账户和邮箱是否一致 email account
exports.verifyAccountAndEmail = (req, res) => {
    const {
        account,
        email
    } = req.body
    const sql = 'select * from users where account = ?'
    db.query(sql, account, (err, result) => {
        if (err) return res.cc(err)
        // res.send(result[0])
        if (email === result[0].email) {
            res.send({
                status: 0,
                message: '账户和邮箱一致',
                id: result[0].id
            })
        } else {
            res.send({
                status: 1,
                message: '账户和邮箱不一致'
            })
        }
    })
}

// 登陆页面修改密码 参数 newPassword
exports.changePasswordInLogin = (req, res) => {
    const user = req.body
    user.newPassword = bcrypt.hashSync(user.newPassword, 10)
    const sql = 'update users set password = ? where id = ?'
    db.query(sql, [user.newPassword, user.id], (err, sult) => {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            message: '修改成功'
        })
    })
}

// -------------------------------------用户管理-------------------------------------

// 添加管理员
exports.createAdmin = (req, res) => {
    const {
        account,
        password,
        name,
        sex,
        department,
        email,
        identity,
    } = req.body
    // 判断账号是否存在于数据库中
    const sql = 'select * from users where account = ?'
    db.query(sql, account, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (results.length > 0) {
            return res.send({
                status: 1,
                message: '该账户已存在'
            })
        }
        const hashpassword = bcrypt.hashSync(password, 10)
        const sql1 = 'insert into users set ?'
        const create_time = new Date()
        db.query(sql1, {
            account,
            password: hashpassword,
            identity,
            create_time,
            status: 0,
            name,
            sex,
            department,
            email,
        }, (err, results) => {
            if (err) {
                return res.cc(err)
            }
            if (results.affectedRows !== 1) {
                return res.send({
                    status: 1,
                    message: '创建管理员失败'
                })
            }
            res.send({
                status: 0,
                message: '创建管理员成功',
                id: results.insertId
            })
        })
    })
}

// 获取管理员 identity
exports.getAdminList = (req, res) => {
    const sql = 'select * from users where identity = ?'
    db.query(sql, req.body.identity, (err, results) => {
        if (err) return res.cc(err)
        results.forEach((e) => {
            e.password = ''
            e.create_time = ''
            e.image_url = ''
            e.status = ''
        })
        res.send(results)
    })
}

// 编辑管理员信息 id,name,sex,email,department
exports.editAdmin = (req, res) => {
    const {
        id,
        name,
        sex,
        email,
        department
    } = req.body;
    const date = new Date();

    const sql0 = 'select department from users where id = ?';
    db.query(sql0, id, (err, result) => {
        if (err) return res.cc(err);

        // 判断是否修改了部门
        const updateContent = {
            id,
            name,
            sex,
            email,
            department,
            update_time: date
        };

        if (result[0].department !== department) {
            // 部门发生变化时，重置 read_list 和 read_status
            updateContent.read_list = JSON.stringify([]); // 设置为空数组
            updateContent.read_status = 0;
        }

        const sql = 'update users set ? where id = ?';
        db.query(sql, [updateContent, id], (err, results) => {
            if (err) return res.cc(err);
            res.send({
                status: 0,
                message: '修改管理员信息成功'
            });
        });
    });
};


// 对管理员取消赋权 id 
exports.changeIdentityToUser = (req, res) => {
    const identity = '用户'
    const sql = 'update users set identity = ? where id = ?'
    db.query(sql, [identity, req.body.id], (err, results) => {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            message: '降级成功'
        })
    })
}

// 对用户赋权 id identity
exports.changeIdentityAdmin = (req, res) => {
    const date = new Date
    const sql = 'update users set identity = ?, update_time = ? where id = ?'
    db.query(sql, [req.body.identity, date, req.body.id], (err, results) => {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            message: '赋权成功'
        })
    })
}

// 通过账号对用户搜索  account identity
exports.searchUser = (req, res) => {
    const { account, identity } = req.body
    const sql = 'select * from users where account = ? and identity = ?'
    db.query(sql, [account, identity], (err, results) => {
        if (err) return res.cc(err)
        results.forEach((e) => {
            e.password = ''
            e.create_time = ''
            e.image_url = ''
            e.status = ''
        })
        res.send(results)
    })
}

// 通过部门对用户搜索  department
exports.searchUserByDepartment = (req, res) => {
    const sql = 'select * from users where department = ? and identity = "用户"'
    db.query(sql, req.body.department, (err, results) => {
        if (err) return res.cc(err)
        result.forEach((e) => {
            e.password = ''
            e.image_url = ''
        })
        res.send(results)
    })
}

// 冻结用户 把 status 置为 1
exports.banUser = (req, res) => {
    const status = 1
    const sql = 'update users set status = ? where id = ?'
    db.query(sql, [status, req.body.id], (err, results) => {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            message: '冻结成功'
        })
    })
}

// 解冻用户
exports.hotUser = (req, res) => {
    const status = 0
    const sql = 'update users set status = ? where id = ?'
    db.query(sql, [status, req.body.id], (err, results) => {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            message: '解冻成功'
        })
    })
}

// 获取冻结用户列表
exports.getBanList = (req, res) => {
    const sql = 'select * from users where status = "1"'
    db.query(sql, (err, results) => {
        if (err) return res.cc(err)
        res.send(results)
    })
}

// 删除用户 id 
exports.deleteUser = (req, res) => {
    const sql = 'delete from users where id = ?'
    db.query(sql, req.body.id, (err, results) => {
        if (err) return res.cc(err)
        const sql1 = 'delete from image where account = ?'
        db.query(sql1, req.body.id, (err, results) => {
            if (err) return res.cc(err)
            res.send({
                status: 0,
                message: '删除用户成功'
            })
        })
    })
}

// 获取对应身份的总人数 identity
exports.getAdminListLength = (req, res) => {
    const sql = 'select * from users where identity = ?'
    db.query(sql, req.body.identity, (err, results) => {
        if (err) return res.cc(err)
        res.send({
            length: results.length
        })
    })
}

// 监听换页并返回数据 页码pager identity
exports.returnListData = (req, res) => {
    const { pager, identity } = req.body;
    // 确保页码不小于 1
    const validPager = pager >= 1 ? pager : 1;
    const number = (validPager - 1) * 10;

    const sql = `SELECT * FROM users WHERE identity = ? LIMIT 10 OFFSET ?`;
    db.query(sql, [identity, number], (err, results) => {
        if (err) {
            return res.cc(err);
        }
        res.send(results);
    });
}
