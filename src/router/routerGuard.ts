import useStore from '@/store'
import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false }) // 进度环显示/隐藏
// 白名单路由
const whiteList = ['/login', '/redirect']

router.beforeEach((to, from, next) => {
  NProgress.start()
  const { auth } = useStore()
  const token = auth.token
  // 已登录
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (auth.menus.length === 0) {
        auth
          .afterLogin()
          .then(() => {
            if (!router.hasRoute(to.name)) {
              if (to.path === '/404' && to.redirectedFrom !== undefined) {
                next({ path: to.redirectedFrom?.fullPath, replace: true })
              } else {
                next({ ...to, replace: true })
              }
            } else {
              next()
            }
          })
          .catch((error) => {
            auth.resetToken()
            return next('/login')
          })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.redirectedFrom !== undefined ? to.redirectedFrom?.fullPath : to.path}`)
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
