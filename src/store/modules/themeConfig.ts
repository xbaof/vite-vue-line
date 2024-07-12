import { defineStore } from 'pinia'
import { ThemeConfigState } from '../interface'

const useThemeConfigStore = defineStore({
  id: 'themeConfig',
  state: (): ThemeConfigState => ({
    layout: 'vertical',
    collapse: true,
    showTagsView: true,
    showLogo: true,
    uniqueOpened: true,
    primary: '#409eff',
    isUnFold: false
  }),
  getters: {
    getLayout(): 'vertical' | 'horizontal' | 'mix' {
      return this.layout
    }
  },
  actions: {
    setLayout(value: 'vertical' | 'horizontal' | 'mix') {
      this.layout = value
    }
  },
  persist: {
    storage: localStorage,
    paths: ['layout', 'collapse']
  }
})
export default useThemeConfigStore
