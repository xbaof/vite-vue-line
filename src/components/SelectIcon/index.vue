<template>
  <el-input
    ref="inputRef"
    v-model="activeName"
    style="width: 240px"
    readonly
    placeholder="请选择图标"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <template #prepend>
      <svg-icon name="exit-fullscreen" />
    </template>
    <template #suffix>
      <el-icon v-if="showClear" class="el-input__icon" @click="handleClear">
        <el-icon-CircleClose />
      </el-icon>
      <el-icon v-else class="el-input__icon">
        <el-icon-ArrowDown />
      </el-icon>
    </template>
  </el-input>
</template>
<script setup lang="ts" name="SelectIcon">
import { ref, computed, onMounted } from 'vue'
import { inputProps } from 'element-plus'

const inputRef = ref()
const props = defineProps(inputProps)

const hovering = ref(false)
const showClear = computed(() => activeName.value && props.clearable && hovering.value)
const handleMouseLeave = (evt: FocusEvent) => {
  hovering.value = false
}
const handleMouseEnter = (evt: MouseEvent) => {
  hovering.value = true
}
const handleClear = () => {
  inputRef.value.clear()
}
onMounted(() => {
  console.log(inputRef)
})

const activeName = ref('first')
const value1 = ref<string>('Option1')

const options = [
  {
    value: 'Option1',
    label: '生产排名'
  },
  {
    value: 'Option2',
    label: '生产排名'
  },
  {
    value: 'Option3',
    label: '生产排名'
  },
  {
    value: 'Option4',
    label: '生产排名'
  },
  {
    value: 'Option5',
    label: 'Label5'
  }
]
</script>
<style scoped lang="scss">
:deep(.el-icon),
:deep(.el-input__wrapper),
:deep(input) {
  cursor: pointer;
}

:deep(.el-input-group__prepend) {
  padding: 0 10px;
}
</style>
