<template>
  <div class="navbar-container">
    <navbarLeft />
    <div class="navbar-right">
      <!-- size设置 -->
      <size-select class="navbar-right-item" />
      <!-- 全屏 -->
      <screenfull class="navbar-right-item" />
      <!-- 退出登陆 -->
      <el-dropdown class="navbar-right-item avatar-container" @command="handleCommandClick">
        <div class="avatar-wrapper">
          <img :src="auth.getAvatar" class="user-avatar" />
          <span class="nick-name">{{ auth.nickName }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="index">首页</el-dropdown-item>
            <el-dropdown-item command="Gitee">Gitee</el-dropdown-item>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item command="logOut" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts" setup name="LayoutHeader">
import Logo from '../sidebar/logo.vue'
import Horizontal from '../sidebar/horizontal.vue'
import Screenfull from './components/screenfull.vue'
import SizeSelect from './components/sizeSelect.vue'
import Breadcrumb from './components/breadcrumb.vue'
import { defineComponent, h } from 'vue'
import { ElMessageBox } from 'element-plus'
import useStore from '@/store'
import { openLink } from '@/utils'
const { auth, setting } = useStore()

const navbarLeft = defineComponent({
  render() {
    return h(
      'div',
      { class: ['navbar-left'] },
      {
        default: () => [
          setting.getLayout === 'horizontal'
            ? [h(Logo), h(Horizontal)]
            : setting.getLayout === 'vertical'
              ? h(Breadcrumb)
              : h(Horizontal)
        ]
      }
    )
  }
})
import { useRouter } from 'vue-router'
const router = useRouter()
// 下拉点击
const handleCommandClick = (command: string) => {
  switch (command) {
    case 'index':
      router.push('/index')
      break
    case 'Gitee':
      openLink('https://gitee.com/coepi/vite-vue-learn')
      break
    case 'logOut':
      ElMessageBox({
        closeOnClickModal: false,
        closeOnPressEscape: false,
        title: '提示',
        message: '此操作将退出登录, 是否继续?',
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        buttonSize: 'default',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '退出中'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 700)
          } else {
            done()
          }
        }
      })
        .then(async () => {
          auth.resetToken()
          // 使用 reload 时，不需要调用 resetRoute() 重置路由
          window.location.reload()
        })
        .catch(() => {})
      break
    default:
      break
  }
}
</script>
