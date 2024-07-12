import { defineStore } from 'pinia'
import { AppState } from '../interface'

const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    device: 'desktop',
    size: 'default'
  }),
  getters: {},
  actions: {},
  persist: {
    storage: localStorage,
    paths: ['size']
  }
})

export default useAppStore
