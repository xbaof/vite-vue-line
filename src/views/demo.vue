<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
import SelectIcon from '@/components/SelectIcon/index.vue'
import vertical from '@/layout/sidebar/vertical.vue'
import horizontal from '@/layout/sidebar/horizontal.vue'
import { useCssVar } from '@vueuse/core'
const el = ref(null)
import { computed, ref } from 'vue'

const test = ref()
test.value = import.meta.env.VITE_PUBLIC_PATH
const select = ref('local-enter')
import useStore from '@/store'
const { themeConfig } = useStore()
window.document.body.setAttribute('layout', themeConfig.getLayout)
</script>

<template>
  <div class="card">
    <h1>{{ test }}</h1>
    <span>el-icon：</span>
    <svg-icon name="el-icon-Edit" size="20" color="red" />
    <span>iconfont：</span>
    <svg-icon name="icon-exit-fullscreen" size="20" color="red" />
    <span>local：</span>
    <svg-icon name="local-enter" size="20" />
    <br />
    <span>SelectIcon：</span>
    <select-icon v-model="select" clearable width="240px" />
  </div>
  <div style="width: 200px">
    <vertical />
  </div>
  <div style="margin-top: 50px">
    <horizontal />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888888;
}
</style>
