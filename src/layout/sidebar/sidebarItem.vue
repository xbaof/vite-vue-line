<template>
  <template v-for="menu in menus.list" :key="menu.path">
    <el-sub-menu v-if="menu.children && menu.children.length > 0" :key="menu.path" :index="menu.path">
      <template #title>
        <icon v-if="menu.meta.icon" :name="menu.meta.icon" />
        <span>{{ menu.meta.title }}</span>
      </template>
      <sidebarItem :menus="{ list: menu.children }" />
    </el-sub-menu>
    <el-menu-item v-else :index="menu.path" @click="handleclick(menu)">
      <icon v-if="menu.meta.icon" :name="menu.meta.icon" />
      <template #title>
        <span>{{ menu.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { RouteRecordRaw, useRouter } from 'vue-router'
import { openLink } from '@/utils'

const props = defineProps({
  menus: {
    type: Object,
    required: true
  }
})
const router = useRouter()
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
