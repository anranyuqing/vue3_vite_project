<!--
 * @author: lixw
 * @since: 2024-07-25
 * login-layout.vue
-->
<template>
  <div class="w-full h-100% login">
    <div class="fixed right-60 top-50% translate-y--50%">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.login {
  background-image: url('@/assets/images/login_bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
