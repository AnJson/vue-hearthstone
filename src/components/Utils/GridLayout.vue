<template>
  <div :class="gridClasses">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  center: Boolean
})

const gridClasses = computed(() => {
  return {
    grid: true,
    center: props.center
  }
})
</script>

<style scoped>
  .grid {
    @apply flex flex-wrap gap-2 w-full max-h-screen;
  }

  .center {
    @apply justify-center;
  }
</style>
