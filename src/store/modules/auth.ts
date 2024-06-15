import { defineStore } from 'pinia'
import { AuthState } from '../interface'
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum'
import { login, getUser, getPermission } from '@/api/auth'
import { Local } from '@/utils/storage'
import generatorDynamicRouter from '@/router/async-router'
import { RouteRecordRaw } from 'vue-router'

const useAuthStore = defineStore({
  id: 'auth',
  state: (): AuthState => ({
    token: Local.get(ACCESS_TOKEN_KEY),
    name: '',
    nickName: '',
    avatar: '',
    perms: [],
    menus: []
  }),
  getters: {
    getToken(): string {
      return this.token
    },
    getName(): string {
      return this.name
    },
    getAvatar(): string {
      return this.avatar
    },
    getMenus(): RouteRecordRaw[] {
      return this.menus
    }
  },
  actions: {
    // 情况token及用户信息
    resetToken() {
      this.name = this.avatar = ''
      this.perms = []
      this.menus = []
      Local.clear()
    },
    /**
     *  @description：登录
     */
    login(params: API.LoginParam) {
      return new Promise((resolve, reject) => {
        login(params)
          .then((res) => {
            const { data } = res
            Local.set(ACCESS_TOKEN_KEY, data.token)
            this.token = data.token
            resolve(data.token)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    /**
     * @description：获取用户信息（昵称、头像、权限集合、菜单）
     */
    async afterLogin() {
      try {
        const [user, permission] = await Promise.all([getUser(), getPermission()])
        const { UserName, NickName, Avatar } = user.data
        const { Perms, Menus } = permission.data
        this.name = UserName
        this.nickName = NickName
        this.avatar = Avatar ?? (await import('@/assets/images/avatar.png')).default
        this.perms = Perms
        this.menus = generatorDynamicRouter(Menus)
        return Promise.resolve(this.menus)
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
})

export default useAuthStore
