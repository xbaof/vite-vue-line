<template lang="">
  <el-icon>
    <icon />
  </el-icon>
</template>
<script setup lang="ts" name="SvgIcon">
import { h, computed, defineComponent, CSSProperties, resolveComponent, Component, defineAsyncComponent } from 'vue'
import { ElIcon } from 'element-plus'

interface Props {
  name: string
  size?: string
  color?: string
}
const props = withDefaults(defineProps<Props>(), {
  name: '',
  size: 'inherit',
  color: 'var(--color)'
})

const iconStyle = computed((): CSSProperties => {
  const { size, color } = props
  return {
    fontSize: size,
    color: color
  }
})

const icon = defineComponent({
  render() {
    if (props.name.startsWith('el-icon-')) {
      return h(resolveComponent(props.name))
    } else if (props.name.startsWith('local-')) {
      const modules = import.meta.glob('@/assets/svg/*.svg', {
        as: 'component'
      })
      const getIconComponent = () => {
        const fileName = `/${props.name.replace('local-', '')}.svg`
        const path = Object.keys(modules).find((o) => o.endsWith(fileName))
        return path ? defineAsyncComponent(() => modules[path]()) : undefined
      }
      const iconComponent = getIconComponent()
      return iconComponent ? h(iconComponent, { class: 'el-icon', style: iconStyle.value }) : null
    }
    return h(
      'svg',
      {
        style: iconStyle.value,
        'aria-hidden': true,
        class: 'el-icon'
      },
      {
        default: () => [
          h('use', {
            'xlink:href': `#icon-${props.name}`
          })
        ]
      }
    )
  }
})
</script>
