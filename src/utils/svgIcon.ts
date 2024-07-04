import type { App } from 'vue'
import { defineAsyncComponent } from 'vue'
// element icon
import * as Icons from '@element-plus/icons-vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

const registerIcons = (app: App) => {
  for (const [key, component] of Object.entries(Icons)) {
    app.component(`el-icon-${key}`, component)
  }

  const modules = import.meta.glob('@/assets/svg/*.svg')
  for (const path in modules) {
    const fileName = path.split('/').pop()
    const component = defineAsyncComponent(() => modules[path]())
    app.component(`local-${fileName.substring(0, fileName.lastIndexOf('.svg'))}`, component)
  }

  app.component('SvgIcon', SvgIcon)
}

export default registerIcons
