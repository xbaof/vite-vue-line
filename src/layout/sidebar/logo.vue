<template>
  <div v-if="isCollapse" class="flex logo-size">
    <img src="@/assets/vue.svg?url" />
  </div>
  <div v-else class="flex-center logo">
    <img src="@/assets/vue.svg?url" />
    <span>{{ title }}</span>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import useStore from '@/store'
const { app, setting } = useStore()
const isCollapse = computed(() => !app.sidebar.opened && setting.layout !== 'horizontal')
const title = computed(() => import.meta.env.VITE_GLOB_TITLE)
</script>

<style scoped lang="scss">
.logo-size,
.logo {
  width: 100%;
  height: var(--header-height);
  font-weight: 600;
  color: var(--basis-color);
  cursor: pointer;
}

@keyframes lighter-background-color {
  from {
    background-color: var(--el-menu-bg-color);
  }

  to {
    background-color: #ffffff;
  }
}

.logo-size {
  animation: logo-animation 0.3s ease-in-out;

  &:hover {
    img {
      animation: logo-animation 0.3s ease-in-out;
    }
  }

  img {
    width: 32px;
    height: 32px;
    margin: auto;
  }
}

.logo {
  animation: logo-animation 0.5s ease-in-out;

  img {
    width: 32px;
    height: 32px;
    margin: 0 12px;
  }
}
</style>
