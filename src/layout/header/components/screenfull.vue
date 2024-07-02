<template>
  <div>
    <svg-icon size="16px" :name="isFullscreen ? 'icon-exit-fullscreen' : 'icon-fullscreen'" @click="toggle" />
  </div>
</template>

<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, toggle } = useFullscreen()
</script>
