<template>
  <GridLayout>
    <Card v-for="card in props.cards" :key="card.cardId" :front="card.img" back="https://youre.outof.games/media/uploads/6c/94/6c945403-1207-454b-a953-a1787ba9016f/cardback_0.png" />
  </GridLayout>
</template>

<script setup>
import GridLayout from '@/components/Utils/GridLayout.vue'
import Card from '@/components/Card.vue'

const props = defineProps({
  cards: Array
})

</script>