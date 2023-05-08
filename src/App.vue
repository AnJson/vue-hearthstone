<template>
  <div class="flex flex-col w-full min-h-screen">
    <Header />
    <Suspense>
      <RouterView />
      <template #fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Layout/Header.vue'
</script>