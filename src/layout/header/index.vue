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
import Logo from '../aside/logo.vue'
import Horizontal from '../aside/horizontal.vue'
import Hamburger from './components/hamburger.vue'
import Screenfull from './components/screenfull.vue'
import SizeSelect from './components/sizeSelect.vue'
import Breadcrumb from './components/breadcrumb.vue'
import { defineComponent, h } from 'vue'
import { ElMessageBox } from 'element-plus'
import useStore from '@/store'
import { openLink } from '@/utils'
const { auth, themeConfig } = useStore()
const navbarLeft = defineComponent({
  render() {
    return h(
      'div',
      { class: ['navbar-left'] },
      {
        default: () => [
          themeConfig.getLayout === 'horizontal'
            ? [h(Logo), h(Horizontal)]
            : [h(Hamburger), themeConfig.getLayout === 'vertical' ? h(Breadcrumb) : h(Horizontal)]
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
<style scoped lang="scss">
$navbar-right-min-width: 300px;

.navbar-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px; /******************* */
  padding: 0;
  background-color: var(--header-bg-color);
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

  .navbar-left {
    display: flex;
    align-items: center;
    width: calc(100% - $navbar-right-min-width);
    height: 100%;
  }

  .navbar-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-width: $navbar-right-min-width;

    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 56px; /******************* */
      line-height: 56px; /******************* */
      color: #000000; /******************* */
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: #000000; /******************* */
      }
    }

    .avatar-container {
      width: auto;
      padding: 0 8px;

      .avatar-wrapper {
        display: flex;
        align-items: center;

        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        .nick-name {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
