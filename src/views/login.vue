<template>
  <el-button @click="handleLogin">登录</el-button>
</template>

<script setup lang="ts">
import useStore from '@/store'
import { useRoute, useRouter } from 'vue-router'
const { auth } = useStore()
const route = useRoute()
const router = useRouter()
const handleLogin = () => {
  auth
    .login({ userName: 'admin', password: '123456', captchaId: '', verifyCode: '' })
    .then((res) => {
      setTimeout(() => router.replace((route.query.redirect as string) ?? '/'))
    })
    .catch((res) => {
      console.log(res)
    })
}
</script>
