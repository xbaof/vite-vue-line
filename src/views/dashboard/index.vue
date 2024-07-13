<template>
  <div style="padding: 15px">
    <h1>这是首页</h1>
    <SelectIcon v-model="value" />
    <svg width="15" height="15" aria-label="Enter key" role="img">
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2">
        <path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" />
      </g>
    </svg>
    <el-radio-group v-model="radio1" class="ml-4">
      <el-radio value="vertical" size="large">vertical</el-radio>
      <el-radio value="horizontal" size="large">horizontal</el-radio>
      <el-radio value="mix" size="large">mix</el-radio>
    </el-radio-group>
  </div>
</template>
<script setup lang="ts">
import SelectIcon from '@/components/SelectIcon/index.vue'
import { ref, computed, h } from 'vue'
const value = ref('')
import useStore from '@/store'
const { setting } = useStore()

const radio1 = computed({
  get() {
    return setting.getLayout
  },
  set(val) {
    setting.setLayout(val)
    window.document.body.setAttribute('layout', val)
  }
})
</script>
