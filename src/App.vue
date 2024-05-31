<script setup lang="ts">
import { ref, computed } from 'vue'
// 导入 Element Plus 语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import useStore from '@/store'
const { app } = useStore()
const size = computed(() => app.getSize)

const locale = ref()
locale.value = zhCn
import demo from '@/views/demo.vue'
</script>

<template>
  <demo />
  <el-config-provider :locale="locale" :size="size">
    <router-view />
  </el-config-provider>
</template>
