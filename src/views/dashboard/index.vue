<template>
  <div style="padding: 15px">
    <h1>这是首页</h1>
    <SelectIcon v-model="value" />
    <svg width="15" height="15" aria-label="Enter key" role="img">
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2">
        <path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" />
      </g>
    </svg>
    <navbarLeft />
  </div>
</template>
<script setup lang="ts">
import SelectIcon from '@/components/SelectIcon/index.vue'
import { ref, defineComponent, h } from 'vue'
const value = ref('')
const navbarLeft = defineComponent({
  render() {
    return h(
      'div',
      { class: ['navbar-left'] },
      {
        default: () => [
          [
            h('span', { style: { color: 'red' } }, { default: () => ['span1'] }),
            h('span', { style: { color: 'red' } }, { default: () => ['span2'] })
          ]
        ]
      }
    )
  }
})
</script>
