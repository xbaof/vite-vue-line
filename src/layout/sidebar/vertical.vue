<template>
  <!-- :collapse-transition="false"-->
  <el-menu :collapse="collapse" :default-active="activeMenu" :unique-opened="uniqueOpened">
    <sidebar-item :menus="{ list: menus }" />
  </el-menu>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import SidebarItem from './sidebarItem.vue'
import { useRoute } from 'vue-router'
import useStore from '@/store'
const { auth, themeConfig } = useStore()
const collapse = computed(() => themeConfig.getCollapse)
const uniqueOpened = computed(() => themeConfig.getUniqueOpened)
const menus = computed(() => (themeConfig.getLayout === 'mix' ? route.matched[1].children : auth.menus))
const route = useRoute()
const activeMenu = computed(() => route.path)
</script>
