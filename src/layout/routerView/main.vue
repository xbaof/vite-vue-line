<template>
  <el-scrollbar>
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </el-scrollbar>
</template>
<script lang="ts" setup name="LayoutMain"></script>
<style scoped lang="scss">
.layout-main {
  position: relative;
  width: 100%;
  padding: 0;
  overflow: hidden;
}
</style>
