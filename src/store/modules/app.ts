import { defineStore } from 'pinia'
import { AppState } from '../interface'

const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    device: 'desktop',
    size: 'default'
  }),
  getters: {
    getSize(): 'default' | 'large' | 'small' {
      return this.size
    }
  },
  actions: {
    setSize(size: 'default' | 'large' | 'small') {
      this.size = size
    }
  },
  persist: {
    storage: localStorage,
    paths: ['size']
  }
})

export default useAppStore
