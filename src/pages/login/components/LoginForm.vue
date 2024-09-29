<!--
* @Author lixw
* @Date 2024-09-28 11:28:02
* @Description 登录表单
-->

<template>
  <n-form ref="formRef" :model="formInfo" :rules="Rules" class="w-90%" :show-label="false">
    <n-form-item path="account">
      <n-input v-model:value="formInfo.account" @keydown.enter.prevent placeholder="账号">
        <template #prefix> <cs-icon icon="material-symbols:person" class="mr-2.5" font-size="20px" /></template>
      </n-input>
    </n-form-item>

    <n-form-item path="account">
      <n-input v-model:value="formInfo.password" @keydown.enter.prevent placeholder="密码"
        ><template #prefix>
          <cs-icon icon="solar:lock-password-unlocked-bold" class="mr-2.5" font-size="20px" /></template
      ></n-input>
    </n-form-item>

    <n-form-item path="code">
      <n-input v-model:value="formInfo.code" @keydown.enter.prevent class="!w-50%" placeholder="验证码"
        ><template #prefix>
          <cs-icon icon="material-symbols:chat-info-sharp" class="mr-2.5" font-size="20px" /></template
      ></n-input>
    </n-form-item>

    <n-button type="primary" class="w-90%" round @click="handleLogin"> 登录 </n-button>
  </n-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Rules } from '../constant'
import { login } from '@/server'
import { setToken } from '@/utils/auth'
const router = useRouter()
const formInfo = ref({
  account: '',
  password: '',
  code: ''
})

/**
 *action:登录
 *description:~~
 */
async function handleLogin() {
  try {
    const res = await login(formInfo.value)
    let message = res.data.message

    if (res.data.code !== '200') {
      window.$notification.error({
        title: '登录失败',
        content: message,
        duration:2000
      })
      return
    }

    window.$notification.create({
      title: '登录成功',
      content: '欢迎回来',
       duration:2000
    })

    setToken(res.data.token)
    router.push('/')
  } catch (err) {
    window.$message.error('网络连接不稳定？别着急，稍等片刻再试试！')
  }
}
</script>
