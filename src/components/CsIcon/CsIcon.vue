<!--
 * @author: lixw
 * @since: 2024-08-14
 * CsIcon.vue
-->
<template>
  <component :is="icon" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useIconRender } from "@/hooks";
const { iconRender } = useIconRender();

const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  },
  fontSize: {
    type: String,
    default: "18px",
  },
  isLocal: {
    type: Boolean,
    default: false,
  },
});

const icon = computed(() => {
  const def = {
    color: props.color,
    fontSize: props.fontSize,
  };
  return props.isLocal
    ? iconRender({ localIcon: props.icon ,...def })
    : iconRender({ icon: props.icon, ...def });
});
</script>

<style scoped></style>
