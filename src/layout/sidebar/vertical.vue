<template>
  <el-aside class="sidebar-container" :class="{ collapse: collapse }">
    <logo v-if="showLogo" />
    <el-scrollbar>
      <!-- :collapse-transition="false"-->
      <el-menu :collapse="collapse" :default-active="activeMenu" :unique-opened="uniqueOpened">
        <sidebar-item :menus="{ list: menus }" />
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import Logo from './logo.vue'
import SidebarItem from './sidebarItem.vue'
import { useRoute } from 'vue-router'
import useStore from '@/store'
const { themeConfig } = useStore()
const collapse = computed(() => themeConfig.getCollapse)
const showLogo = computed(() => themeConfig.getShowLogo)
const uniqueOpened = computed(() => themeConfig.getUniqueOpened)
const menus = []
const route = useRoute()
const activeMenu = computed(() => route.path)
</script>
