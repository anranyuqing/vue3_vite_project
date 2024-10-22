<!--
 * @author: lixw
 * @since: 2024-07-11
 * BasicLayout.vue
-->
<template>
  <AdminLayout>
    <template #header>
      <layout-header />
    </template>
    <template #aside><layout-aside /></template>
    <template #main>
      <div class="bg-#F2F3F7 p-2.5 box-border h-full">
        <router-view />
      </div>
    </template>
    <template #footer>22</template>
  </AdminLayout>
</template>

<script setup lang="ts">
import { LayoutHeader, LayoutAside } from './components'
import AdminLayout from '../AdminLayout/AdminLayout.vue'
</script>

<style scoped></style>
