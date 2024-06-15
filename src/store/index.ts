import useAppStore from './modules/app'
import useThemeConfigStore from './modules/themeConfig'

const useStore = () => ({
  app: useAppStore(),
  themeConfig: useThemeConfigStore()
})

export default useStore
