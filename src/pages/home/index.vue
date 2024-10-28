<template>
  <button @click="initData">发送请求</button>
  <img :src="qrcodeSrc" alt="" />
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store'
import { ref } from 'vue'
console.log('href', window.location.hash)
const qrcodeSrc = ref('')

</script>

<style scoped></style>
