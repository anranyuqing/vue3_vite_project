<!--
 * @author: lixw
 * @since: 2024-09-27
 * Application.vue
-->
<template>
  <n-dialog-provider>
    <dialog-content />
    <n-notification-provider>
      <notification-content/>
      <n-message-provider>
        <message-content />
        <slot />
      </n-message-provider>
    </n-notification-provider>
  </n-dialog-provider>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
