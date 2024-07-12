<template>
  <Logo v-if="showLogo" />
  <el-scrollbar>
    <el-menu
      :collapse-transition="false"
      :collapse="collapse"
      :default-active="activeMenu"
      :unique-opened="uniqueOpened"
    >
      <MenuSubItem :menus="{ list: menus }" />
    </el-menu>
  </el-scrollbar>
  <Hamburger />
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import MenuSubItem from './menuSubItem.vue'
import Logo from './logo.vue'
import Hamburger from './hamburger.vue'
import { useRoute } from 'vue-router'
import useStore from '@/store'
const { auth, themeConfig } = useStore()
const { showLogo, collapse, uniqueOpened } = storeToRefs(themeConfig)
const menus = computed(() => (themeConfig.getLayout === 'mix' ? route.matched[1].children : auth.getMenus))
const route = useRoute()
const activeMenu = computed(() => route.path)
</script>
