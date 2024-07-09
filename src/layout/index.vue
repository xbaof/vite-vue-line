<template>
  <el-container class="full">
    <el-aside v-if="layout !== 'horizontal'" :class="['layout-aside', themeConfig.getCollapse ? 'collapse' : '']">
      <LayoutAside />
    </el-aside>
    <el-container>
      <el-header> <LayoutHeader /> </el-header>
      <el-main> <LayoutMain /> </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import LayoutMain from './routerView/main.vue'
import LayoutHeader from './header/index.vue'
import LayoutAside from './aside/vertical.vue'
import useStore from '@/store'
const { themeConfig } = useStore()
const layout = computed(() => themeConfig.getLayout)
window.document.body.setAttribute('layout', layout.value)
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
