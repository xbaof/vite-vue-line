import { createApp } from 'vue'

import App from './App.vue'

// vue router
import router from '@/router'
import '@/router/routerGuard'

// pinia
import { createPinia } from 'pinia'
// 持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import registerIcons from '@/utils/svgIcon'

// element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './assets/iconfont/iconfont.js'

import './styles/reset.scss'
import './styles/index.scss'

const app = createApp(App)

registerIcons(app)

app.use(router).use(createPinia().use(piniaPluginPersistedstate)).use(ElementPlus).mount('#app')
