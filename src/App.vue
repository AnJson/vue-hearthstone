<template>
  <Header />
  <Suspense>
    <RouterView />
    <template #fallback>
      <h1>Loading...</h1>
    </template>
  </Suspense>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Layout/Header.vue'
</script>