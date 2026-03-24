const joi = require('joi');

// string 值只能为字符串
// alphanum 值只能为a-z 0-9
// min 最小长度 max 最大长度
// required 必填项
// pattern 正则

const id = joi.required()

const name = joi.string().pattern(/^[\u4e00-\u9fa5]{2,4}(·[\u4e00-\u9fa5]{2,4})?|^[a-zA-Z\.\s]{2,20}/).required()

const email = joi.string().pattern(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/).required()

const oldPassword = joi.string().pattern(/^(?![0-9]+$)[a-z0-9]{1,59}$/).required()

const newPassword = joi.string().pattern(/^(?![0-9]+$)[a-z0-9]{1,59}$/).required()

exports.password_limit = {
    body: {
        id,
        oldPassword,
        newPassword
    }
}

exports.name_limit = {
    body: {
        id,
        name,
    }
}

exports.email_limit = {
    body: {
        id,
        email
    }
}

exports.forgetPassword_limit = {
    body: {
        id,
        newPassword
    }
}