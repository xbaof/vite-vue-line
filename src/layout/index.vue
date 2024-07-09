<template>
  <el-container class="full">
    <layoutAside />
    <el-container>
      <el-header> <LayoutHeader /> </el-header>
      <el-main> <LayoutMain /> </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import LayoutMain from './routerView/main.vue'
import collapse from './aside/collapse.vue'
import LayoutHeader from './header/index.vue'
import Logo from './aside/logo.vue'
import Vertical from './aside/vertical.vue'
import { ElAside, ElScrollbar } from 'element-plus'
import { h, defineComponent } from 'vue'
import useStore from '@/store'
const { themeConfig } = useStore()
window.document.body.setAttribute('layout', themeConfig.getLayout)

const layoutAside = defineComponent({
  render() {
    return themeConfig.getLayout !== 'horizontal'
      ? h(
          ElAside,
          { class: ['layout-aside', themeConfig.getCollapse ? 'collapse' : ''] },
          {
            default: () => [
              h(Logo),
              h(ElScrollbar, { style: { height: 'calc(100% - 85px)' } }, { default: () => [h(Vertical)] }),
              h(collapse, { style: { height: '35px' } })
            ]
          }
        )
      : null
  }
})
</script>
<style scoped lang="scss">
.el-header {
  padding: 0;
}

.el-main {
  position: relative;
  width: 100%;
  padding: 0;
  overflow: hidden;
}
</style>
