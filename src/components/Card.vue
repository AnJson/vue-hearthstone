<template>
  <div id="card" @click="toggleFlipped">
    <div :class="frontClasses">
      <img class="h-full w-full object-contain" :src="props.front" />
    </div>
    <div :class="backClasses">
      <img class="h-full w-full object-contain" :src="props.back" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  front: String,
  back: String
})

const flipped = ref(false)

const frontClasses = computed(() => {
  return {
    ['card-side']: true,
    ['card-side--front']: true,
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
