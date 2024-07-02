<template>
  <el-dropdown trigger="click" @command="handleSetSize">
    <svg-icon name="icon-size" size="16px" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item of sizeOptions"
          :key="item.value"
          :disabled="(size || 'default') == item.value"
          :command="item.value"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import useStore from '@/store'
const { app } = useStore()
const size = computed(() => app.getSize)

const sizeOptions = ref([
  { label: '默认', value: 'default' },
  { label: '大型', value: 'large' },
  { label: '小型', value: 'small' }
])

function handleSetSize(size: 'default' | 'large' | 'small') {
  app.setSize(size)
}
</script>
