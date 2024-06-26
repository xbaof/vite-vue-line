<template>
  <el-menu mode="horizontal" :default-active="activeMenu">
    <template v-for="menu in menus" :key="menu.path">
      <el-sub-menu v-if="menu.children && menu.children.length > 0" :key="menu.path + 'el-sub-menu'" :index="menu.path">
        <template #title>
          <icon v-if="menu.meta.icon" :name="menu.meta.icon" />
          <span>{{ menu.meta.title }}</span>
        </template>
        <SidebarItem :menus="{ list: menu.children }" />
      </el-sub-menu>
      <el-menu-item v-else :key="menu.path + 'el-menu-item'" :index="menu.path">
        <icon v-if="menu.meta.icon" :name="menu.meta.icon" />
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
import SidebarItem from './sidebarItem.vue'

import { openLink } from '@/utils'

const menus = [
  { path: '/index', name: 'Dashboard', meta: { title: '首页', icon: 'el-icon-HomeFilled', isAffix: true, sort: 0 } },
  {
    meta: {
      title: '测试页面',
      icon: 'el-icon-Setting',
      noTagsView: false,
      isHide: false,
      isKeepAlive: false,
      isAffix: true,
      isLink: false,
      linkUrl: '',
      sort: 1
    },
    path: '/test',
    name: 'Test'
  },
  {
    meta: {
      title: '内嵌测试',
      icon: 'el-icon-Setting',
      noTagsView: false,
      isHide: false,
      isKeepAlive: false,
      isAffix: false,
      isLink: false,
      linkUrl: 'http://192.168.0.37/BOSURE_MES_V2.1.2.2/index.html?uname=admin&pwd=123456',
      sort: 1
    },
    path: '/vitejs',
    name: 'Vitejs'
  },
  {
    meta: {
      title: '外链测试',
      icon: 'el-icon-Setting',
      noTagsView: true,
      isHide: false,
      isKeepAlive: false,
      isAffix: false,
      isLink: true,
      linkUrl: 'https://www.baidu.com',
      sort: 2
    },
    path: '/baidu',
    name: 'Baidu'
  },
  {
    meta: { title: '菜单嵌套', icon: 'el-icon-Discount' },
    path: '/menu',
    children: [
      {
        meta: { title: '菜单1', icon: 'el-icon-Setting' },
        path: '/menu/menu1',
        children: [
          {
            meta: {
              title: '菜单1-1',
              icon: 'el-icon-Setting',
              noTagsView: false,
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isLink: false,
              sort: 9
            },
            path: '/menu/menu1/menu11',
            name: 'Menu11'
          },
          {
            meta: { title: '菜单1-2', icon: 'el-icon-Setting' },
            path: '/menu/menu1/menu12',
            children: [
              {
                meta: {
                  title: '菜单1-2-1',
                  icon: 'el-icon-Setting',
                  noTagsView: false,
                  isHide: false,
                  isKeepAlive: true,
                  isAffix: false,
                  isLink: false,
                  sort: 9
                },
                path: '/menu/menu1/menu12/menu121',
                name: 'Menu121'
              }
            ],
            redirect: '/menu/menu1/menu12/menu121'
          }
        ],
        redirect: '/menu/menu1/menu11'
      },
      {
        meta: {
          title: '菜单2',
          icon: 'el-icon-Setting',
          noTagsView: false,
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isLink: false,
          sort: 9
        },
        path: '/menu/menu2',
        name: 'Menu2'
      }
    ],
    redirect: '/menu/menu1'
  }
]

const route = useRoute()
const router = useRouter()
const activeMenu = computed(() => route.path)
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

<style lang="scss" scoped></style>
