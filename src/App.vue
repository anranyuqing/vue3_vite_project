<script setup lang="ts">
import autofit from 'autofit.js'
import { onMounted, ref, Ref } from 'vue'
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'
import { AppProvider } from '@/components/Application'

const themeOverrides: Ref<GlobalThemeOverrides> = ref({
  common: {
    primaryColor: '#3975c6',
    primaryColorHover: '#3975c6'
  }
})
onMounted(() => {
  autofit.init({
    dh: 667,
    dw: 375,
    el: 'body',
    resize: true
  })
})
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides" class="h-full">
    <app-provider>
      <router-view />
    </app-provider>
  </n-config-provider>
</template>

<style>
html,
body,
#app {
  height: 100%;
}
</style>
