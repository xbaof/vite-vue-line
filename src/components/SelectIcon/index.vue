<template>
  <el-select
    v-model="activeName"
    clearable
    collapse-tags
    filterable
    placeholder="请选择图标"
    no-match-text="未能找到符合的图标"
    no-data-text="图标列表为空"
    :max-collapse-tags="1"
    style="width: 240px"
    popper-class="select-icon-popper"
    @visible-change="onVisibleChange"
  >
    <template #header>
      <el-tabs v-model="currentActiveType">
        <el-tab-pane v-for="(pane, index) in tabsList" :key="index" :label="pane.label" :name="pane.name" />
      </el-tabs>
    </template>
    <el-option
      v-for="(iconName, index) in iconOptions"
      :id="index + 'sss'"
      :key="index"
      :label="iconName"
      :value="iconName"
    >
      <svg-icon :name="iconName" size="20" />
    </el-option>
  </el-select>
</template>
<script setup lang="ts" name="SelectIcon">
import { ref, computed, onMounted } from 'vue'
import * as elIcons from '@element-plus/icons-vue'
import iconFont from '@/assets/iconfont/iconfont.json'

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

const activeName = ref('')
// 默认激活的Tab
const currentActiveType = ref('')
const iconOptions = computed(() => {
  return tabsList.find((o) => o.name === currentActiveType.value)?.icons || []
})
const init = () => {
  if (activeName.value) {
    for (const tab of tabsList) {
      if (activeName.value.startsWith(tab.name)) {
        currentActiveType.value = tab.name
      }
    }
  } else {
    currentActiveType.value = tabsList[0].name
  }
  console.log(tabsList)
}
const onVisibleChange = (visible: boolean) => {
  if (visible) {
    init()
  }
}
onMounted(() => {
  init()
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
</style>
<style lang="scss">
.select-icon-popper {
  max-width: 320px;

  .el-select-dropdown__header {
    padding: 0;

    /* padding-bottom: 5px; */
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
