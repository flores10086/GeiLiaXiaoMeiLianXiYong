const joi = require('joi');

// string 值只能为字符串
// alphanum 值只能为a-z 0-9
// min 最小长度 max 最大长度
// required 必填项
// pattern 正则
const account = joi.string().alphanum().min(6).max(12).required()

const password = joi.string().pattern(/^(?![0-9]+$)[a-z0-9]{1,59}$/).required()

exports.login_limit = {
    body: {
        account,
        password
    }
}