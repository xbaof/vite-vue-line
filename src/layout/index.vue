<template>
  <el-container class="full" :class="[showLogo ? 'has-logo' : 'no-logo']">
    <el-aside v-if="layout !== 'horizontal'" :class="['layout-aside', collapse ? 'collapse' : '']">
      <LayoutAside />
    </el-aside>
    <el-container>
      <el-header> <LayoutHeader /> </el-header>
      <el-main> <LayoutMain /> </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import LayoutMain from './routerView/main.vue'
import LayoutHeader from './header/index.vue'
import LayoutAside from './aside/vertical.vue'
import useStore from '@/store'
const { themeConfig } = useStore()
const { showLogo, layout, collapse } = storeToRefs(themeConfig)
window.document.body.setAttribute('layout', layout.value)
</script>
<style scoped lang="scss">
.el-header {
  height: auto;
  padding: 0;
}

.el-main {
  position: relative;
  width: 100%;
  padding: 0;
  overflow: hidden;
}
</style>
