<template>
  <div id="card" @click="toggleFlipped">
    <div :class="frontClasses"></div>
    <div :class="backClasses"></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

defineProps({
  front: String,
  back: String
})

const flipped = ref(false)

const frontClasses = computed(() => {
  return {
    ['card-side']: true,
    ['card-side--front']: true,
    ['bg-hs-green-1']: true,
    ['hide-front']: flipped.value
  }
})

const backClasses = computed(() => {
  return {
    ['card-side']: true,
    ['card-side--back']: true,
    ['reveal-back']: flipped.value
  }
})

const toggleFlipped = () => {
  flipped.value = !flipped.value
}
</script>

<style scoped>
#card {
  position: relative;
  height: 208px;
  width: 160px;
  cursor: pointer;
  perspective: 50rem;
  -moz-perspective: 50rem;
}

.card-side {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: all 1s ease;
  backface-visibility: hidden;
  border-radius: 3px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, .3);
  transform-origin: 50% 50%;
}

.card-side--back {
  transform: rotateY(180deg);
}

.card-side--front {
  transform: rotateY(0)
}

.reveal-back {
  transform: rotateY(0);
}

.hide-front {
  transform: rotateY(-180deg);
}
</style>
