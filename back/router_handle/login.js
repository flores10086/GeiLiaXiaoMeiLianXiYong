const db = require('../db/index.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtconfig = require('../jwt_config/index.js');

// 注册
exports.register = (req, res) => {
    const reginfo = req.body;
    if (!reginfo.account || !reginfo.password) {
        return res.send({
            status: 1,
            message: '账号或密码不能为空'
        });
    }

    const sql = 'SELECT * FROM users WHERE account = ?';
    db.query(sql, reginfo.account, (err, results) => {
        if (err) return res.send({ status: 1, message: '查询失败' });
        if (results.length > 0) {
            return res.send({
                status: 1,
                message: '账号已存在'
            });
        }

        // 加密密码
        reginfo.password = bcrypt.hashSync(reginfo.password, 10);

        // 插入数据表
        const sqlInsert = 'INSERT INTO users SET ?';
        const identity = '用户';
        const create_time = new Date();
        const read_list = JSON.stringify([]);

        db.query(sqlInsert, {
            account: reginfo.account,
            password: reginfo.password,
            identity,
            create_time,
            read_list,
            status: 0,
        }, (err, results) => {
            if (err) {
                return res.send({
                    status: 1,
                    message: '注册失败',
                    err: err.message
                });
            }
            res.send({
                status: 0,
                message: '注册成功'
            });
        });
    });
};

// 登录
exports.login = (req, res) => {
    const loginfo = req.body;
    const sql = 'SELECT * FROM users WHERE account = ?';

    db.query(sql, loginfo.account, (err, results) => {
        if (err) return res.send({ status: 1, message: '查询失败' });
        if (results.length !== 1) return res.send({ status: 1, message: '账号不存在' });

        // 检查密码是否匹配
        const compareResult = bcrypt.compareSync(loginfo.password, results[0].password);
        if (!compareResult) {
            return res.send({
                status: 1,
                message: '登录失败,账号或密码错误',
            });
        }

        // 检查账号状态
        if (results[0].status == 1) {
            return res.send({ status: 1, message: '账号已被冻结' });
        }

        // 生成 Token
        const user = {
            ...results[0],
            password: '',
            imageUrl: '',
            create_time: '',
            update_time: ''
        };
        const token = jwt.sign(user, jwtconfig.jwtSecretKey, {
            expiresIn: '7h'
        });
        res.send({
            results: results[0],
            status: 0,
            message: '登录成功',
            token: 'Bearer ' + token,
        });
    });
};

const superAdminRouter = [
    {
        name: 'home',
        path: '/home',
        meta: { title: '首页' },
        component: 'home/index'
    },
    {
        name: 'set',
        path: '/set',
        meta: { title: '设置' },
        component: 'set/index'
    },
    {
        name: 'overview',
        path: '/overview',
        meta: { title: '概览' },
        component: 'overview/index'
    },
    {
        name: 'product_manage',
        path: '/product_manage',
        meta: { title: '产品管理' },
        component: 'user_manage/product_manage/index'
    },
    {
        name: 'message_manage',
        path: '/message_manage',
        meta: { title: '消息管理' },
        component: 'user_manage/message_manage/index'
    },
    {
        name: 'user_list',
        path: '/user_list',
        meta: { title: '用户列表' },
        component: 'user_manage/user_list/index'
    },
    {
        name: 'users_manage',
        path: '/users_manage',
        meta: { title: '用户管理' },
        component: 'user_manage/users_manage/index'
    },
    {
        name: 'product_manage_list',
        path: '/product_manage_list',
        meta: { title: '产品管理列表' },
        component: 'product/product_manage_list/index'
    },
    {
        name: 'out_product_manage_list',
        path: '/out_product_manage_list',
        meta: { title: '产品出库列表' },
        component: 'product/out_product_manage_list/index'
    },
    {
        name: 'message_list',
        path: '/message_list',
        meta: { title: '消息列表' },
        component: 'message/message_list/index'
    },
    {
        name: 'recycle',
        path: '/recycle',
        meta: { title: '消息回收站' },
        component: 'message/recycle/index'
    },
    {
        name: 'file',
        path: '/file',
        meta: { title: '文件' },
        component: 'file/index'
    },
    {
        name: 'operation_log',
        path: '/operation_log',
        meta: { title: '操作日志' },
        component: 'operation_log/index'
    },
    {
        name: 'login_log',
        path: '/login_log',
        meta: { title: '登录日志' },
        component: 'login_log/index'
    }
]

const userAdminRouter = [
    {
        name: 'home',
        path: '/home',
        meta: { title: '首页' },
        component: 'home/index'
    },
    {
        name: 'set',
        path: '/set',
        meta: { title: '设置' },
        component: 'set/index'
    },
    {
        name: 'overview',
        path: '/overview',
        meta: { title: '概览' },
        component: 'overview/index'
    },
    {
        name: 'product_manage',
        path: '/product_manage',
        meta: { title: '产品管理' },
        component: 'user_manage/product_manage/index'
    },
    {
        name: 'message_manage',
        path: '/message_manage',
        meta: { title: '消息管理' },
        component: 'user_manage/message_manage/index'
    },
    {
        name: 'user_list',
        path: '/user_list',
        meta: { title: '用户列表' },
        component: 'user_manage/user_list/index'
    },
    {
        name: 'users_manage',
        path: '/users_manage',
        meta: { title: '用户管理' },
        component: 'user_manage/users_manage/index'
    },
    {
        name: 'file',
        path: '/file',
        meta: { title: '文件' },
        component: 'file/index'
    },
]

const productAdminRouter = [
    {
        name: 'home',
        path: '/home',
        meta: { title: '首页' },
        component: 'home/index'
    },
    {
        name: 'set',
        path: '/set',
        meta: { title: '设置' },
        component: 'set/index'
    },
    {
        name: 'overview',
        path: '/overview',
        meta: { title: '概览' },
        component: 'overview/index'
    },
    {
        name: 'product_manage',
        path: '/product_manage',
        meta: { title: '产品管理' },
        component: 'user_manage/product_manage/index'
    },
    {
        name: 'product_manage_list',
        path: '/product_manage_list',
        meta: { title: '产品管理列表' },
        component: 'product/product_manage_list/index'
    },
    {
        name: 'out_product_manage_list',
        path: '/out_product_manage_list',
        meta: { title: '产品出库列表' },
        component: 'product/out_product_manage_list/index'
    },
    {
        name: 'file',
        path: '/file',
        meta: { title: '文件' },
        component: 'file/index'
    },
]

const messageAdminRouter = [
    {
        name: 'home',
        path: '/home',
        meta: { title: '首页' },
        component: 'home/index'
    },
    {
        name: 'set',
        path: '/set',
        meta: { title: '设置' },
        component: 'set/index'
    },
    {
        name: 'overview',
        path: '/overview',
        meta: { title: '概览' },
        component: 'overview/index'
    },
    {
        name: 'message_manage',
        path: '/message_manage',
        meta: { title: '消息管理' },
        component: 'user_manage/message_manage/index'
    },
    {
        name: 'message_list',
        path: '/message_list',
        meta: { title: '消息列表' },
        component: 'message/message_list/index'
    },
    {
        name: 'recycle',
        path: '/recycle',
        meta: { title: '消息回收站' },
        component: 'message/recycle/index'
    },
    {
        name: 'file',
        path: '/file',
        meta: { title: '文件' },
        component: 'file/index'
    },

]

const userRouter = [
    {
        name: 'home',
        path: '/home',
        meta: { title: '首页' },
        component: 'home/index'
    },
    {
        name: 'set',
        path: '/set',
        meta: { title: '设置' },
        component: 'set/index'
    },
    {
        name: 'overview',
        path: '/overview',
        meta: { title: '概览' },
        component: 'overview/index'
    },
    {
        name: 'file',
        path: '/file',
        meta: { title: '文件' },
        component: 'file/index'
    },
]

// 返回用户的路由列表
exports.returnMenuList = (req, res) => {
    const sql = 'select identity from users where id = ?'
    db.query(sql, req.body.id, (err, result) => {
        if (err) return res.cc(err)
        let menu = []
        if (result[0].identity == '超级管理员') {
            menu = superAdminRouter
        }
        if (result[0].identity == '用户管理员') {
            menu = userAdminRouter
        }
        if (result[0].identity == '产品管理员') {
            menu = productAdminRouter
        }
        if (result[0].identity == '消息管理员') {
            menu = messageAdminRouter
        }
        if (result[0].identity == '用户') {
            menu = userRouter
        }
        res.send(menu)
    })
}