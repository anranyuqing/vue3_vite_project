<!--
 * @author: lixw
 * @since: 2024-07-20
 * index.vue
-->
<template>
  <login-contain>
    <div class="w-80 h-100 bg-#fff rounded-1 shadow relative">
      <div class="flex justify-center py-8 text-5 sub-text-color">
        <div class="mx-5 c-#000 font-bold">账号登录</div>
      </div>
      <div class="flex-center flex-col">
        <login-form class="mb-4"/>
        <third-party class="absolute bottom-4"/>
      </div>
    </div>
  </login-contain>
</template>

<script setup lang="ts">
import { LoginForm, ThirdParty } from './components'
import { LoginContain } from './layout'
</script>

<style scoped></style>
