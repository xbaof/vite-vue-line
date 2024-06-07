<template>
  <el-select
    v-model="activeName"
    clearable
    collapse-tags
    filterable
    placeholder="Select"
    :max-collapse-tags="1"
    style="width: 240px"
    popper-class="select-icon-popper"
  >
    <template #header>
      <el-tabs v-model="currentActiveType">
        <el-tab-pane v-for="(pane, index) in tabsList" :key="index" :label="pane.label" :name="pane.name" />
      </el-tabs>
    </template>
    <el-option v-for="(iconName, index) in el_IconList" :key="index" :label="iconName" :value="iconName">
      <svg-icon :name="iconName" size="20" />
    </el-option>
  </el-select>
</template>
<script setup lang="ts" name="SelectIcon">
import { ref, computed, onMounted } from 'vue'
import * as elIcons from '@element-plus/icons-vue'

const currentActiveType = ref('el-icon-')
const tabsList = [
  {
    label: 'Element Plus',
    name: 'el-icon-'
  },
  {
    label: 'IconFont',
    name: 'icon-'
  },
  {
    label: 'SVG',
    name: 'local-'
  }
]

import { inputProps } from 'element-plus'

const el_IconList = computed(() => {
  return Object.keys(elIcons).map((o) => `el-icon-${o}`)
})

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
onMounted(() => {})

const activeName = ref('first')
const value1 = ref<string>('Option1')

const options = ref([
  {
    value: 'first',
    label: 'User'
  },
  {
    value: 'second',
    label: 'Config'
  },
  {
    value: 'third',
    label: 'Role'
  },
  {
    value: 'fourth',
    label: 'Task'
  },
  {
    value: 'Option5',
    label: 'Label5'
  }
])
</script>
<style scoped lang="scss">
:deep(.el-tabs__nav-next) {
  font-size: 15px;
  line-height: 38px;
  box-shadow: -5px 0 5px -6px #cccccc;
}

:deep(.el-tabs__nav-prev) {
  font-size: 15px;
  line-height: 38px;
  box-shadow: 5px 0 5px -6px #cccccc;
}

:deep(.el-tabs__nav-wrap) {
  padding: 0 24px;
}

:deep(.el-tabs__item) {
  height: 35px;
  font-size: 12px;
  font-weight: normal;
  line-height: 35px;
}

:deep(.el-tabs__header) {
  position: static;
  margin: 0;
  box-shadow: 0 2px 5px rgb(0 0 0 / 6%);
}
</style>
<style lang="scss">
.select-icon-popper {
  max-width: 350px;

  .el-select-dropdown__header {
    padding: 0;
    border-bottom: none;
  }

  .el-select-dropdown__list {
    display: flex;
    flex-wrap: wrap;
    padding: 6px 12px;

    .el-select-dropdown__item {
      width: calc(20px + 1rem);
      height: calc(20px + 1rem);
      padding: 0.5em;
      margin-top: 0.25rem;
      margin-right: 0.5rem;
      line-height: initial;
      border: 1px solid rgb(229 231 235);

      &.is-hovering,
      &.is-selected {
        color: var(--el-color-primary);
        background-color: transparent;
        border-color: var(--el-color-primary);
      }
    }
  }
}
</style>
