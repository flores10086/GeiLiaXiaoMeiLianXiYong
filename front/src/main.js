import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// 导入路由
import router from './router'
// 导入element-plus icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入element-plus国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// svg图标
import 'virtual:svg-icons-register'
// 【关键】导入并全局注册 SvgIcon 组件（推荐全局注册，避免局部导入问题）
import SvgIcon from '@/components/SvgIcon.vue'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// 实例化
const pinia = createPinia()
const app = createApp(App)


// 注册 Element Plus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 【关键】全局注册 SvgIcon，所有页面直接用，无需导入
app.component('SvgIcon', SvgIcon)

// 注册 Element Plus（仅需一次）
app.use(ElementPlus, {
  locale: zhCn,
})

// 【关键】移除冗余的 use(ElementPlus)，只挂载一次
app.use(router).use(pinia).mount('#app')