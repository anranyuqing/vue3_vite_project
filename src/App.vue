<script setup lang="ts">
import autofit from 'autofit.js'
import { onMounted, ref, Ref } from 'vue'
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'
const themeOverrides: Ref<GlobalThemeOverrides> = ref({
  common: {
    primaryColor: '#3975c6',
    primaryColorHover: '#3975c6'
  }
})
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
  <n-config-provider :theme-overrides="themeOverrides" class="h-full">
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
