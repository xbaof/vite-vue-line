<template>
  <el-menu mode="horizontal" :default-active="activeMenu">
    <MenuSubItem :menus="{ list: menus }" />
  </el-menu>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MenuSubItem from './menuSubItem.vue'
import useStore from '@/store'
const { auth, themeConfig } = useStore()

const menus = computed(() => auth.menus)
const route = useRoute()
const activeMenu = computed(() => (themeConfig.getLayout === 'mix' ? route.matched[1].path : route.path))
</script>
