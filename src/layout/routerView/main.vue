<template>
  <el-main class="layout-main">
    <el-scrollbar>
      <router-view v-slot="{ Component, route }">
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
        </transition>
      </router-view>
    </el-scrollbar>
    <el-backtop target=".layout-main .el-scrollbar .el-scrollbar__wrap" />
  </el-main>
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
