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
const activeMenu = computed(() => route.path)
</script>
