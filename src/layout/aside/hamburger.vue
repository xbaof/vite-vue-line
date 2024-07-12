<template>
  <div class="hamburger-wrapper">
    <svg
      :class="[collapse || 'is-active']"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      @click="toggleCollapse"
    >
      <path
        d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
      />
    </svg>
  </div>
</template>
<script setup lang="ts">
import { unref } from 'vue'
import { storeToRefs } from 'pinia'
import useStore from '@/store'
const { themeConfig } = useStore()
const { collapse } = storeToRefs(themeConfig)
const toggleCollapse = () => {
  const collapsed = unref(collapse)
  collapse.value = !collapsed
}
</script>

<style lang="scss" scoped>
.hamburger-wrapper {
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
  box-shadow: 0 0 6px -3px var(--el-color-primary);
  transition: background 0.3s;

  svg {
    width: 18px;
    height: 18px;
    margin-left: var(--el-menu-base-level-padding);

    /* 快速点击时不选中内容 */
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE/Edge */
    user-select: none; /* 标准语法 */
    fill: #ffffff;

    &.is-active {
      transform: rotate(180deg);
    }
  }
}
</style>
