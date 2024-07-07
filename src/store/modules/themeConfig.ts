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
    getCollapse(): boolean {
      return this.collapse
    },
    getLayout(): 'vertical' | 'horizontal' | 'mix' {
      return this.layout
    },
    getShowLogo(): boolean {
      return this.showLogo
    },
    getUniqueOpened(): boolean {
      return this.uniqueOpened
    },
    getPrimary(): string {
      return this.primary
    },
    getTagsView(): boolean {
      return this.showTagsView
    },
    getiIsUnFold(): boolean {
      return this.isUnFold
    }
  },
  actions: {
    setLayout(value: 'vertical' | 'horizontal' | 'mix') {
      this.layout = value
    },
    setCollapse(collapse: boolean) {
      this.collapse = collapse
    },
    setSideTheme(theme: 'dark' | 'light') {
      this.sideTheme = theme
    },
    setShowLogo(value: boolean) {
      this.showLogo = value
    },
    setUniqueOpened(value: boolean) {
      this.uniqueOpened = value
    },
    setPrimary(value: string) {
      this.primary = value
    },
    setiIsUnFold() {
      this.isUnFold = !this.isUnFold
    }
  },
  persist: {
    storage: localStorage,
    paths: ['layout', 'collapse']
  }
})
export default useThemeConfigStore
