<template>
  <button @click="initData">发送请求</button>
  <img :src="qrcodeSrc" alt="">
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store'
import { getQrcode } from '@/server/api'
import { ref } from 'vue'

const qrcodeSrc = ref('')
async function initData() {
  const res = await getQrcode({})
  console.log('data',res)
  qrcodeSrc.value = res.data.code
}
</script>

<style scoped></style>
