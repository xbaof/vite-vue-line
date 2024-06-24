import { createApp } from 'vue'

import App from './App.vue'

// vue router
import router from '@/router'
import '@/router/routerGuard'

// pinia
import { createPinia } from 'pinia'
// 持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './assets/iconfont/iconfont.js'

import './styles/reset.scss'
import './styles/index.scss'

// element icon
import * as Icons from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(Icons)) {
  app.component(`el-icon-${key}`, component)
}
import SvgIcon from '@/components/SvgIcon/index.vue'
app.component('SvgIcon', SvgIcon)

app.use(router).use(createPinia().use(piniaPluginPersistedstate)).use(ElementPlus).mount('#app')
