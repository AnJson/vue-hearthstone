<template>
  <header>
    <div class="w-full py-4 text-2xl">
      <nav class="flex gap-2">
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'cards' }">Cards</RouterLink>
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'

</script>