export interface AppState {
  device: string
  size: 'default' | 'large' | 'small'
}
export interface ThemeConfigState {
  layout: 'vertical' | 'horizontal' | 'mix'
  collapse: boolean
  showLogo: boolean
  showTagsView: boolean
  uniqueOpened: boolean
  primary: string
  isUnFold: boolean
}
