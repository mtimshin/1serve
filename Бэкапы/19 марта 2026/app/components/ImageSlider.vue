<template>
  <div v-if="images && images.length" class="slider" @touchstart="onTouchStart" @touchend="onTouchEnd">
    <div class="slider__container" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div v-for="(image, index) in images" :key="index" class="slider__slide">
        <NuxtImg 
          :src="image" 
          :alt="`Gallery Image ${index + 1}`" 
          class="slider__image"
          loading="lazy"
          format="webp"
          quality="80"
          width="1200"
          height="675"
          @click="$emit('image-click', index)"
        />
      </div>
    </div>
    
    <div v-if="images.length > 1" class="slider__controls">
      <button @click="prev" class="slider__btn slider__btn--prev" aria-label="Previous">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
      </button>
      <button @click="next" class="slider__btn slider__btn--next" aria-label="Next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </button>
    </div>

    <div v-if="images.length > 1" class="slider__dots">
      <button 
        v-for="(_, index) in images" 
        :key="index" 
        @click="currentSlide = index"
        class="slider__dot"
        :class="{ 'slider__dot--active': currentSlide === index }"
      ></button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

defineEmits(['image-click'])

const currentSlide = ref(0)
let touchStartX = 0
let touchEndX = 0

const next = () => {
  currentSlide.value = (currentSlide.value + 1) % props.images.length
}

const prev = () => {
  currentSlide.value = (currentSlide.value - 1 + props.images.length) % props.images.length
}

const onTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX
}

const onTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
}

const handleSwipe = () => {
  const swipeDistance = touchEndX - touchStartX
  if (swipeDistance < -50) {
    next()
  } else if (swipeDistance > 50) {
    prev()
  }
}
</script>

<style lang="scss" scoped>
.slider__image {
  cursor: pointer;
}
</style>
