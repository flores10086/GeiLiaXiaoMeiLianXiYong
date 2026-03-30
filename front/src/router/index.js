import {
    //创建路由实例
    createRouter, 
    //创建路由的历史模式
    createWebHistory
} from 'vue-router'

const routes = [
    {
        path:'/',
        redirect:'/menu'
    },
    {
        name:'login',
        path:'/login',
        component:()=>import('@/views/login/index.vue')
    },
    {
        name:'menu',
        path:'/menu',
        component:()=>import('@/views/menu/index.vue'),
        children:[{
            name:'home',
            path:'/home',
            component:()=>import('@/views/home/index.vue')
        }]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router