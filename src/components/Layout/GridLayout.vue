<script setup>
defineProps({
  center: Boolean
})
</script>

<template>
  <div :class="{ grid: true, center }">
    <slot></slot>
  </div>
</template>

<style scoped>
  .grid {
    @apply flex flex-wrap gap-2 w-full;
  }

  .center {
    @apply justify-center;
  }
</style>
