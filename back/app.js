// 导入express
const express = require('express')
// 创建实例
const app = express()
// 导入body-parser
var bodyParser = require('body-parser')

//导入cors
const cors = require('cors')

//全局挂载
app.use(cors())

// multer是一个用来处理multipart/form-data类型1表单数据 主要用于上传文件
const multer = require('multer')
// 在server服务端下新建一个public文件,用于存放图片
const upload = multer({ dest: './public/upload' })
app.use(upload.any())
// 静态托管
app.use(express.static("./public"))

// parse application/x-www-form-urlencoded
// 当extended为false时，值为数组或字符串
// 当为true时值可以是任意类型
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.cc = (err, status = 1) => {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next()
})

const jwtconfig = require('./jwt_config/index.js')
const { expressjwt: jwt } = require('express-jwt')
// app.use(jwt({
//     secret: jwtconfig.jwtSecretKey, algorithms: ['HS256']
// }).unless({
//     path: [/^\/api\//]
// }))

const loginRouter = require('./router/login')
app.use('/api', loginRouter)

const userRouter = require('./router/userinfo')
app.use('/user', userRouter)

const setRouter = require('./router/setting')
app.use('/set', setRouter)

const productRouter = require('./router/product')
app.use('/pro', productRouter)

const messageRouter = require('./router/message')
app.use('/msg', messageRouter)

const fileRouter = require('./router/file')
app.use('/file', fileRouter)

const logLogRouter = require('./router/login_log')
app.use('/llog', logLogRouter)

const operationLogRouter = require('./router/operation_log.js')
app.use('/olog', operationLogRouter)

const overviewLogRouter = require('./router/overview.js')
app.use('/ov', overviewLogRouter)

const depMsgRouter = require('./router/department_msg.js')
app.use('/dm', depMsgRouter)

const Joi = require('joi');
// 对不符合joi的情况进行报错
app.use((err, req, res, next) => {
    if (err instanceof Joi.ValidationError) {
        res.send({
            status: 1,
            message: '输入的数据不符合规则'
        })
    }
})

// 绑定监听主机和端口
app.listen(3007, () => {
    console.log(`Server running at http://localhost:3007`);
})