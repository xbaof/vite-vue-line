<template>
  <Logo v-if="showLogo" />
  <el-scrollbar>
    <!-- :collapse-transition="false"-->
    <el-menu :collapse="!app.sidebar.opened" :default-active="activeMenu" :unique-opened="uniqueOpened">
      <MenuSubItem :menus="{ list: menus }" />
    </el-menu>
  </el-scrollbar>
  <Collapse />
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import MenuSubItem from './menuSubItem.vue'
import Logo from './logo.vue'
import Collapse from './collapse.vue'
import { useRoute } from 'vue-router'
import useStore from '@/store'
const { auth, setting, app } = useStore()
const { showLogo, uniqueOpened } = storeToRefs(setting)
const menus = computed(() => (setting.getLayout === 'mix' ? route.matched[1].children : auth.getMenus))
const route = useRoute()
const activeMenu = computed(() => route.path)
</script>
