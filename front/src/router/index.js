import {
    //创建路由实例
    createRouter, 
    //创建路由的历史模式
    createWebHistory
} from 'vue-router'

const routes = [
    {
        path:'/',
        redirect:'/login'
    },
    {
        name:'login',
        path:'/login',
        component:()=>import('@/views/login/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router