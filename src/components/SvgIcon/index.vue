<!--
 * @author: lixw
 * @since: 2024-08-16
 * SvgIcon.vue
-->
<template>
  <svg aria-hidden="true" width="1em" height="1em" v-bind="bindAttrs" v-if="renderLocalIcon">
    <use :xlink:href="symbolId" fill="currentColor" />
  </svg>
  <Icon :icon="icon" v-bind="bindAttrs" v-else />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { computed, ref, useAttrs } from 'vue'

const attrs = useAttrs()

const bindAttrs = computed(() => ({
  class: attrs.class,
  style: attrs.style
}))
const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  localIcon: {
    type: String,
    default: ''
  }
})

const renderLocalIcon = computed(() => {
  return !!props.localIcon
})

const symbolId = computed(() => {
  const { VITE_ICON_LOCAL_PREFIX: prefix } = import.meta.env

  const defaultLocalIcon = 'no-icon'

  const icon = props.localIcon || defaultLocalIcon
  return `#${prefix}-${icon}`
})
</script>

<style scoped></style>
