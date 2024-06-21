import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 非layout布局的路由
const outsideLayout: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: '登录',
      isHide: true
    }
  }
]

// 其他功能性路由
const otherRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    meta: { title: 'redirect', noTagsView: true, isHide: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/layout/routerView/redirect.vue')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/error/404.vue'),
    meta: { title: '404' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/404'
  }
]

export const routes: RouteRecordRaw[] = [...outsideLayout, ...otherRoutes]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  strict: false,
  // 切换页面，滚动到最顶部
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
