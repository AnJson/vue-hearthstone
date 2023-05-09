<template>
  <main class="flex flex-1">
    <div class="flex flex-col">
      <ul class="h-full flex flex-col list-none m-0 text-sm mr-4">
        <li
          v-for="className in classes"
          :key="className"
          @click="setSelectedClass(className)"
          :class="`py-2 px-1 border-b cursor-pointer hover:border-hs-green-1 ${selectedClass === className ? 'active' : '' }`">{{ className }}</li>
      </ul>
    </div>
    <div class="flex flex-1 w-full">
      <h1 v-if="hasError" class="text-lg text-hs-green-1 font-semibold">
        Ooops, something went wrong!
      </h1>
      <h1 v-else-if="isLoading" class="text-lg text-hs-green-1 font-semibold">
        Loading...
      </h1>
      <CardGrid v-else :currentPage="currentPage" :cardsToShow="8" :cards="data" />
    </div>
  </main>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CardGrid from '@/components/CardGrid.vue'
import { repository as hsRepository } from '@/repository/HsRepository.js'
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

const route = useRoute()
const router = useRouter()
const selectedClass = ref(null)
const data = ref([])
const isLoading = ref(false)
const hasError = ref(false)
const currentPage = computed(() => {
  return Number.parseInt(route.query.page || 1) 
})

const setSelectedClass = (className) => {
  if (!isLoading.value) {
    selectedClass.value = className
  }
}

const displayCards = async () => {
  try {
    router.replace({ query: {} })
    hasError.value = false
    isLoading.value = true
    const formattedClassName = selectedClass.value.replace(' ', '-').toLowerCase()
    const responseData = await hsRepository.getByClass(formattedClassName)
    data.value = responseData.filter(card => card.img)
    isLoading.value = false
  } catch (error) {
    console.log(error)
    isLoading.value = false
    hasError.value = true
  }
}

onMounted(() => {
  setSelectedClass('Death Knight')
})
watch(selectedClass, displayCards)
</script>

<style scoped>
.active {
  @apply text-hs-green-1 font-bold;
}
</style>