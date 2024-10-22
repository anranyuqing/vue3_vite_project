<template>
  <a-table :dataSource="dataSource" :columns="columns" />
</template>

<script setup lang="ts">
import { PropType } from 'vue'
defineProps({
  dataSource: {
    type: Array,
    require: true
  },
  columns: {
    type: Array,
    require: true
  },
  pagination: {
    type: Object as PropType<Pagination | boolean>,
    require: true
  }
})
</script>

<style></style>
