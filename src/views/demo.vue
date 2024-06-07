<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
import SelectIcon from '@/components/SelectIcon/index.vue'
import { ref } from 'vue'
const test = ref()
test.value = import.meta.env.VITE_PUBLIC_PATH
</script>

<template>
  <div class="card">
    <h1>{{ test }}</h1>
    <span>el-icon：</span>
    <svg-icon name="el-icon-Edit" size="20" color="red" />
    <span>iconfont：</span>
    <svg-icon name="exit-fullscreen" size="20" color="red" />
    <span>local：</span>
    <svg-icon name="local-enter" size="20" />
    <br />
    <span>SelectIcon：</span>
    <select-icon clearable />
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888888;
}
</style>
