import instance from "@/http/index.js";
//注册
export const getUserInfor = id => {
    return instance ({
        url:'/user/getUserInfo',
        method:'POST',
        data:{
            id
        }
    });
}
