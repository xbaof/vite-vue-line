<template>
  <div v-if="collapse" class="flex logo-size">
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
const { themeConfig } = useStore()
const collapse = computed(() => themeConfig.getCollapse && themeConfig.getLayout !== 'horizontal')
const title = computed(() => import.meta.env.VITE_GLOB_TITLE)
</script>

<style scoped lang="scss">
.logo-size {
  width: 100%;
  height: 50px;
  cursor: pointer;
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
  width: 100%;
  height: 50px;
  font-weight: 600;
  cursor: pointer;
  animation: logo-animation 0.5s ease-in-out;

  img {
    width: 32px;
    height: 32px;
    margin: 0 12px;
  }
}
</style>
