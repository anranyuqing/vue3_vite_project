<!--
 * @author: lixw
 * @since: 2024-09-27
 * Application.vue
-->
<template>
  <n-dialog-provider>
    <dialog-content />
    <n-message-provider>
      <message-content />
      <slot />
    </n-message-provider>
  </n-dialog-provider>
</template>

<script setup lang="ts"></script>

<style scoped></style>
