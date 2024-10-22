<template>
  <button @click="initData">发送请求</button>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store'
import { getPermissionInfo } from '@/server/api'

async function initData() {
  const data = await getPermissionInfo({})
}
</script>

<style scoped></style>
