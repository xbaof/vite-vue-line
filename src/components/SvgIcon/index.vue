<template>
  <el-icon :size="props.size" :color="props.color">
    <icon />
  </el-icon>
</template>
<script setup lang="ts" name="SvgIcon">
import { h, defineComponent, resolveComponent } from 'vue'
import { IconProps } from 'element-plus'

interface Props extends IconProps {
  name: string
}
const props = defineProps<Props>()

const icon = defineComponent({
  render() {
    if (props.name.startsWith('el-icon-') || props.name.startsWith('local-')) {
      return h(resolveComponent(props.name))
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
