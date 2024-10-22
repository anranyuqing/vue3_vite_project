<template>
  <div class="h-full flex flex-col">
    <div class="min-h-20"><slot name="header" /></div>
    <div class="grid grid-cols-7 row-span-4 flex-1">
      <div class="col-span-1 h-full"><slot name="aside" /></div>
      <div class="col-span-6">
        <slot name="main" />
      </div>
    </div>
    <div class="w-full min-h-14 bg-#999"><slot name="footer" /></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
