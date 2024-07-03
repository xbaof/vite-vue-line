import type { App } from 'vue'
// element icon
import * as Icons from '@element-plus/icons-vue'

const registerIcons = (app: App) => {
  for (const [key, component] of Object.entries(Icons)) {
    app.component(`el-icon-${key}`, component)
  }

  import SvgIcon from '@/components/SvgIcon/index.vue'
  app.component('SvgIcon', SvgIcon)
}

export default registerIcons
