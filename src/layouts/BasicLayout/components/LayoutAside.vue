
<template>
  <n-menu :options="Menu" accordion v-model:value="activeValue" @update:value="handleUpdateMenu" />
</template>

<script setup lang="ts">
import { Menu } from '@/mock'
import { useRoute, useRouter } from 'vue-router'
const { name } = useRoute()
const { push } = useRouter()
const activeValue = name

function handleUpdateMenu(key: string, item: any) {
  push(key)
}
</script>

<style scoped>
</style>
