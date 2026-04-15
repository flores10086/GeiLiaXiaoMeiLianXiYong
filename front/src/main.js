import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon.vue'
// ✅ 必须在 createPinia 之后、app.use(pinia) 之前注册
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
// ✅ 注册插件顺序绝对不能错！
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

// 注册图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.component('SvgIcon', SvgIcon)
app.use(ElementPlus, { locale: zhCn })
// ✅ 先use(pinia)，再use(router)
app.use(pinia)
app.use(router)
app.mount('#app')