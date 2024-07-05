<template>
  <div class="flex" style="width: 100%; height: 100%">
    <layoutAside />
    <el-container style="flex-direction: column">
      <LayoutHeader />
      <LayoutMain />
    </el-container>
  </div>
</template>
<script setup lang="ts">
import LayoutMain from './routerView/main.vue'
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
          { default: () => [h(Logo), h(ElScrollbar, {}, { default: () => [h(Vertical)] })] }
        )
      : null
  }
})
</script>
