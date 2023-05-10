<template>
  <div class="flex flex-col gap-3 w-full">
    <h2 class="text-lg">{{ indexOfLastCurrentCard }} / {{ totalResult }}</h2>
    <GridLayout>
      <Card v-for="card in currentCards" :key="card.cardId" :front="card.img" back="https://youre.outof.games/media/uploads/6c/94/6c945403-1207-454b-a953-a1787ba9016f/cardback_0.png" />
    </GridLayout>
    <div class="flex justify-between mt-auto pb-5 px-3">
      <h2 class="text-lg">Page {{ currentPage }}</h2>
      <div class="flex gap-3">
        <button v-if="previousPage" role="link" class="text-lg" @click="currentPage--">Previous</button>
        <button v-if="nextPage" role="button" class="text-lg" @click="currentPage++">Next</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import GridLayout from '@/components/Utils/GridLayout.vue'
import Card from '@/components/Card.vue'

const props = defineProps({
  cards: Array,
  cardsToShow: Number
})

const currentPage = ref(1)

const currentCards = computed(() => {
  const startIndex = ((currentPage.value - 1) * props.cardsToShow)
  return [...props.cards].splice(startIndex, props.cardsToShow) 
})

const previousPage = computed(() => {
  const previousPage = currentPage.value - 1
  const firstPage = 1
  return previousPage >= firstPage ? previousPage : undefined
})

const nextPage = computed(() => {
  const nextPage = currentPage.value + 1
  const maxPage = Math.ceil(props.cards.length / props.cardsToShow)
  return nextPage <= maxPage ? nextPage : undefined
})

const totalResult = computed(() => {
  return props.cards.length
})

const indexOfLastCurrentCard = computed(() => {
  const index = currentPage.value * props.cardsToShow
  return index < totalResult.value ? index : totalResult.value
})
</script>