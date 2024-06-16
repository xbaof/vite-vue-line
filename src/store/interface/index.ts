import { RouteRecordRaw, RouteLocationNormalized } from 'vue-router'

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

export interface AuthState {
  token: string
  name: string
  nickName: string
  avatar: string
  // like [ 'sys:user:add', 'sys:user:update' ]
  perms: string[]
  /** 用来渲染菜单的路由(去掉隐藏属性的路由) */
  menus: RouteRecordRaw[]
}
