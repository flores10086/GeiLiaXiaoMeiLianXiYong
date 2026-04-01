import instance from "@/http/index";
//注册
export const register = (data) => {
    const{
        account,
        password,
    } = data
    return instance ({
        url:'/api/register',
        method:'POST',
        data:{
            account,
            password,
        }
    });
}

//登录
export const login = (data) => {
    const{
        account,
        password,
    } = data
    return instance ({
        url:'/api/login',
        method:'POST',
        data:{
            account,
            password,
        }
    });
}