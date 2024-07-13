import useAppStore from './modules/app'
import useSettingStore from './modules/setting'
import useAuthStore from './modules/auth'

const useStore = () => ({
  app: useAppStore(),
  auth: useAuthStore(),
  setting: useSettingStore()
})

export default useStore
