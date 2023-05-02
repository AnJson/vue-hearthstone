<template>
  <main class="flex">
    <div class="flex flex-col">
      <h2 class="text-lg text-hs-green-1 font-semibold">Classes</h2>
      <ul class="h-full flex flex-col list-none m-0 text-sm mr-4">
        <li v-for="className in classes" :key="className" class="py-2 px-1 border-b cursor-pointer hover:border-hs-green-1">{{ className }}</li>
      </ul>
    </div>
    <Welcome>
      <h1 class="text-lg text-hs-green-1 font-semibold">
        Choose a class to display cards...
      </h1>
    </Welcome>
  </main>
</template>

<script setup>
import Welcome from '@/components/Welcome.vue'

const classes = [
  "Death Knight",
  "Druid",
  "Hunter",
  "Mage",
  "Paladin",
  "Priest",
  "Rogue",
  "Shaman",
  "Warlock",
  "Warrior",
  "Dream",
  "Neutral",
  "Whizbang",
  "Demon Hunter"
]
</script>
