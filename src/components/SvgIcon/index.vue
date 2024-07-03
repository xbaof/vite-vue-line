<template>
  <el-icon :size="props.size" :color="props.color">
    <icon />
  </el-icon>
</template>
<script setup lang="ts" name="SvgIcon">
import { h, defineComponent, computed, resolveComponent, defineAsyncComponent } from 'vue'
import { IconProps } from 'element-plus'

interface Props extends IconProps {
  name: string
}
const props = defineProps<Props>()

const modules = computed(() => {
  return import.meta.glob('@/assets/svg/*.svg')
})
const getIconComponent = () => {
  const fileName = `/${props.name.replace('local-', '')}.svg`
  const path = Object.keys(modules.value).find((o) => o.endsWith(fileName))
  return path ? defineAsyncComponent(() => modules.value[path]()) : undefined
}

const icon = defineComponent({
  render() {
    if (props.name.startsWith('el-icon-')) {
      return h(resolveComponent(props.name))
    } else if (props.name.startsWith('local-')) {
      const iconComponent = getIconComponent()
      return iconComponent ? h(iconComponent) : null
    }
    return h(
      'svg',
      { 'aria-hidden': true },
      {
        default: () => [
          h('use', {
            'xlink:href': `#${props.name}`
          })
        ]
      }
    )
  }
})
</script>
