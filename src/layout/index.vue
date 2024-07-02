<template>
  <div class="layout-wrapper">
    <vertical />
    <el-container style="flex-direction: column">
      <LayoutHeader />
      <LayoutMain />
    </el-container>
  </div>
</template>
<script setup lang="ts">
import vertical from './aside/vertical.vue'
import LayoutMain from './routerView/main.vue'
import LayoutHeader from './header/index.vue'
</script>
