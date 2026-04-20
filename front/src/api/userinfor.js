import instance from "@/http/index.js";
//获得用户信息
export const getUserInfor = id => {
    return instance ({
        url:'/user/getUserInfo',
        method:'POST',
        data:{
            id
        }
    })
}
//绑定图片地址跟账号
export const bindAccount = (account,onlyId,url) => {
    return instance ({
        url:'/user/bindAccount',
        method:'POST',
        data:{
            account,
            onlyId,
            url
        }
    })
}


//修改密码
export const changePassword = (id,oldPassword,newPassword) => {
    return instance ({
        url:'/user/changePassword',
        method:'POST',
        data:{
            id,
            oldPassword,
            newPassword
        }
    })
}
//修改姓名
export const changeName = (name,id) => {
    return instance ({
        url:'/user/changeName',
        method:'POST',
        data:{
            name,
            id
        }
    })
}
//修改性别
export const changeSex = (sex,id) => {
    return instance ({
        url:'/user/changeSex',
        method:'POST',
        data:{
            sex,
            id
        }
    })
}
//修改邮箱
export const changeEmail = (email,id) => {
    return instance ({
        url:'/user/changeEmail',
        method:'POST',
        data:{
            email,
            id
        }
    })
}