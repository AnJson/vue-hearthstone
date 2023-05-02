<template>
  <main class="flex">
    <div class="flex flex-col">
      <h2 class="text-lg text-hs-green-1 font-semibold">Classes</h2>
      <ul class="h-full flex flex-col list-none m-0 text-sm mr-4">
        <li
          v-for="className in classes"
          :key="className"
          @click="displayCards(className)"
          class="py-2 px-1 border-b cursor-pointer hover:border-hs-green-1">{{ className }}</li>
      </ul>
    </div>
    <h1 v-if="hasError" class="text-lg text-hs-green-1 font-semibold">
      Ooops, something went wrong!
    </h1>
    <h1 v-else-if="isLoading" class="text-lg text-hs-green-1 font-semibold">
      Loading...
    </h1>
    <Welcome v-else-if="!data" />
    <h1 v-else>There is data now!</h1>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Welcome from '@/components/Welcome.vue'
import { repository as hsRepository } from '@/repository/HsRepository.js'

const data = ref(null)
const isLoading = ref(false)
const hasError = ref(false)

const displayCards = async (className) => {
  try {
    hasError.value = false
    isLoading.value = true
    data.value = await hsRepository.getByClass(className.toLowerCase())
    isLoading.value = false
  } catch (error) {
    console.log(error)
    isLoading.value = false
    hasError.value = true
  }
}

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
