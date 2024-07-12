<template>
  <el-menu mode="horizontal" :default-active="activeMenu">
    <template v-for="menu in menus" :key="menu.path">
      <el-sub-menu v-if="menu.children && menu.children.length > 0" :key="menu.path + 'el-sub-menu'" :index="menu.path">
        <template #title>
          <svg-icon v-if="menu.meta.icon" :name="menu.meta.icon" />
          <span>{{ menu.meta.title }}</span>
        </template>
        <MenuSubItem :menus="{ list: menu.children }" />
      </el-sub-menu>
      <el-menu-item v-else :key="menu.path + 'el-menu-item'" :index="menu.path" @click="handleclick(menu)">
        <svg-icon v-if="menu.meta.icon" :name="menu.meta.icon" />
        <template #title>
          <span>{{ menu.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter, RouteRecordRaw } from 'vue-router'
import { openLink } from '@/utils'
import MenuSubItem from './menuSubItem.vue'
import useStore from '@/store'
const { auth, themeConfig } = useStore()

const menus = computed(() => auth.getMenus)
const route = useRoute()
const router = useRouter()
const activeMenu = computed(() => (themeConfig.getLayout === 'mix' ? route.matched[1].path : route.path))
const handleclick = (menu: RouteRecordRaw) => {
  if (menu.meta?.isLink) {
    openLink(menu.meta?.linkUrl as string)
  } else {
    router.push(menu.path).catch((err) => {
      console.log(err)
    })
  }
}
</script>
