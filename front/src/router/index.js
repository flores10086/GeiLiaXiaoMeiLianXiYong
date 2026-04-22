import {
    //创建路由实例
    createRouter,
    //创建路由的历史模式
    createWebHistory
} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('@/views/login/index.vue')
    },
    {
        name: 'menu',
        path: '/menu',
        component: () => import('@/views/menu/index.vue'),
        children: [
            {
                name: 'home',
                path: '/home',
                component: () => import('@/views/home/index.vue'),
            },
            {
                name:'set',
                path:'/set',
                component: () => import('@/views/set/index.vue')
            },
            {
                name:'overview',
                path:'/overview',
                component: () => import('@/views/overview/index.vue')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

