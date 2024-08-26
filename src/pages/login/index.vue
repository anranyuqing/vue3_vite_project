<!--
 * @author: lixw
 * @since: 2024-07-20
 * index.vue
-->
<template>
  <login-contain>
    <div class="w-80 h-100 bg-#fff rounded-1 shadow">
      <div class="flex justify-center py-8 text-5 sub-text-color">
        <div class="mx-5 c-#000 font-bold">账号登录</div>
      </div>

      <div class="flex justify-center flex-col items-center mb-8">
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
        </n-form>

        <n-button type="primary" class="w-90%" round> 登录 </n-button>

      </div>

      <third-party/>

    </div>
  </login-contain>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LoginContain } from './components/layout'
import { Rules } from './constant'
import {ThirdParty} from './businessComponents'
const formInfo = ref({
  account: '22',
  password: '',
  code: ''
})
</script>

<style scoped></style>
