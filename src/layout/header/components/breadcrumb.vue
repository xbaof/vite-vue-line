<template>
  <el-breadcrumb separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item key="/index" :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path">
        <span v-if="!item.redirect || index == breadcrumbs.length - 1">{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const breadcrumbs = computed(() =>
  route.matched.filter((item) => item.meta && item.meta.title && !item.meta.noTagsView && item.name !== 'Dashboard')
)

const handleLink = (item) => {
  const { redirect, path } = item
  if (redirect) {
    router.push(redirect)
  } else {
    router.push(path)
  }
}
</script>

<style lang="scss" scoped>
::v-deep(.el-breadcrumb__inner) {
  a,
  &.is-link {
    font-weight: 400 !important;
  }
}

::v-deep(.el-breadcrumb__item:last-child) {
  span {
    color: #97a8be;
    cursor: text;

    &:hover {
      color: #97a8be;
    }
  }
}
</style>
