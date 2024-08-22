<script setup lang="ts">
import autofit from 'autofit.js'
import { onMounted, ref } from 'vue'
import { darkTheme } from 'naive-ui'

const theme = ref(null)
onMounted(() => {
  autofit.init({
    dh: 1080,
    dw: 1920,
    el: 'body',
    resize: true
  })
})
</script>

<template>
  <n-config-provider :theme="theme" class="h-full">
    <router-view />
  </n-config-provider>
</template>

<style>
html,
body,
#app {
  height: 100%;
}
</style>
