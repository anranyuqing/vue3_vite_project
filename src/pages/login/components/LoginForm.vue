<!--
* @Author lixw
* @Date 2024-09-28 11:28:02
* @Description 登录表单
-->

<template>
  <n-form ref="formRef" :model="formInfo" :rules="Rules" class="w-80%" :show-label="false">
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

    <div class="w-full flex justify-center">
      <n-button type="primary" class="w-90%" round @click="handleLogin"> 登录 </n-button>
    </div>
  </n-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Rules } from '../constant'
import { useAuthStore } from '@/store'
import { useRouterTo } from '@/hooks'
const { login } = useAuthStore()
const { toHome } = useRouterTo()

const router = useRouter()
const formRef = ref()
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
  //表单校验
  await formRef.value.validate()

  const loginRes = await login(formInfo.value)
  console.log('home', loginRes)
  if (loginRes) {
    localStorage.setItem
    toHome()
  }
}
</script>
