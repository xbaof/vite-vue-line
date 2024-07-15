<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
// 导入 Element Plus 语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import useStore from '@/store'
const { app } = useStore()
const { size } = storeToRefs(app)

const locale = ref()
locale.value = zhCn

import { setTheme } from '@/layout/theme'
// setTheme('dark')
</script>

<template>
  <el-config-provider :locale="locale" :size="size">
    <router-view />
  </el-config-provider>
</template>
