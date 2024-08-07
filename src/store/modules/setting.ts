import { defineStore } from 'pinia'
import { SettingState } from '../interface'

const useSettingStore = defineStore({
  id: 'setting',
  state: (): SettingState => ({
    layout: 'vertical',
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
    paths: ['layout']
  }
})
export default useSettingStore
