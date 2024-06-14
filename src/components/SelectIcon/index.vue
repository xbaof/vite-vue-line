<template>
  <el-select
    ref="selectRef"
    v-model="selectedIcon"
    v-bind="{
      filterable: true,
      placeholder: placeholder,
      noMatchText: noMatchText,
      noDataText: noDataText,
      ...$attrs
    }"
    :style="{ width: width }"
    popper-class="select-icon-popper"
    @visible-change="handleVisibleChange"
  >
    <template #label="{ label, value }">
      <svg-icon :name="value" size="20" />
      <span>&nbsp;{{ label }}</span>
    </template>
    <template #header>
      <el-tabs v-model="currentActiveType">
        <el-tab-pane v-for="(pane, index) in tabsList" :key="index" :label="pane.label" :name="pane.name" />
      </el-tabs>
    </template>
    <el-option v-for="(iconName, index) in iconOptions" :key="index" :label="iconName" :value="iconName">
      <svg-icon :name="iconName" size="20" />
    </el-option>
  </el-select>
</template>
<script setup lang="ts" name="SelectIcon">
import { ref, computed, onMounted } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import * as elIcons from '@element-plus/icons-vue'
import iconFont from '@/assets/iconfont/iconfont.json'

const props = defineProps({
  modelValue: {
    type: String,
    require: false,
    default: ''
  },
  width: {
    type: String,
    default: '100%'
  },
  placeholder: {
    type: String,
    default: '请选择图标'
  },
  noMatchText: {
    type: String,
    default: '未能找到相符的图标'
  },
  noDataText: {
    type: String,
    default: '图标列表为空'
  }
})
const emit = defineEmits(['update:modelValue'])
const selectedIcon = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})

const modules = computed(() => {
  return import.meta.glob('@/assets/svg/*.svg', {
    query: '?component'
  })
})
const tabsList = [
  {
    // Element Plus图标集合
    label: 'Element Plus',
    name: 'el-icon-',
    icons: Object.keys(elIcons).map((o) => `el-icon-${o}`)
  },
  {
    // IconFont图标集合
    label: 'IconFont',
    name: 'icon-',
    icons: iconFont.glyphs.map((o) => `${iconFont.css_prefix_text}${o.font_class}`)
  },
  {
    // 本地SVG图标集合
    label: 'SVG',
    name: 'local-',
    icons: Object.keys(modules.value).map((o) => {
      const fileName = o.split('/').pop()
      return `local-${fileName.substring(0, fileName.lastIndexOf('.svg'))}`
    })
  }
]
// 默认激活的Tab
const currentActiveType = ref(tabsList[0].name)
const iconOptions = computed(() => {
  return tabsList.find((o) => o.name === currentActiveType.value)?.icons || []
})
const initActiveType = () => {
  if (props.modelValue) {
    const tab = tabsList.find((o) => props.modelValue.startsWith(o.name))
    if (tab) {
      currentActiveType.value = tab.name
    }
  }
}
const handleVisibleChange = (visible: boolean) => {
  if (visible) {
    initActiveType()
  }
}
const selectRef = ref<HTMLElement | null>(null)
const updateMaxWidth = () => {
  const offsetWidth = selectRef.value?.offsetWidth || 0
  const element: HTMLElement = document.querySelector('.select-icon-popper')
  element.style.maxWidth = offsetWidth > 320 ? `${offsetWidth}px` : '320px'
}
onMounted(() => {
  updateMaxWidth()
  useResizeObserver(selectRef.value, updateMaxWidth)
})
</script>
<style scoped lang="scss">
:deep(.el-tabs__header) {
  margin: 0 0 0.25rem;
}

:deep(.el-tabs__nav-wrap.is-scrollable) {
  padding: 0 26px;
}

:deep(.el-tabs__nav-wrap) {
  padding: 0 18px;
}

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

:deep(.el-tabs__item) {
  height: 35px;
  font-size: 12px;
  font-weight: normal;
  line-height: 35px;
}

:deep(.el-select__placeholder) {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
<style lang="scss">
.select-icon-popper {
  .el-select-dropdown__header {
    padding: 0;
    border-bottom: none;
  }

  .el-select-dropdown__list {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin-top: -0.25rem;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;

    .el-select-dropdown__item {
      width: calc(20px + 1rem);
      height: calc(20px + 1rem);
      padding: 0.5em;
      margin-top: 0.5rem;
      margin-right: 0.5rem;
      line-height: initial;
      border: 1px solid rgb(229 231 235);
      transition: all 0.3s;

      &.is-selected {
        color: var(--el-color-primary);
        background-color: transparent;
        border-color: var(--el-color-primary);
      }
    }
  }
}
</style>
