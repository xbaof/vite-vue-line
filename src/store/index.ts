import useAppStore from './modules/app'
import useThemeConfigStore from './modules/themeConfig'
import useAuthStore from './modules/auth'

const useStore = () => ({
  app: useAppStore(),
  auth: useAuthStore(),
  themeConfig: useThemeConfigStore()
})

export default useStore
