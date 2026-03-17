<template>
  <div class="slider">
    <div class="slider__container" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div v-for="(image, index) in images" :key="index" class="slider__slide">
        <NuxtImg 
          :src="image" 
          :alt="`Miami Open Gallery Image ${index + 1}`" 
          class="slider__image"
          loading="lazy"
          format="webp"
          quality="80"
          width="1200"
          height="675"
        />
      </div>
    </div>
    
    <div v-if="images.length > 1" class="slider__controls">
      <button @click="prev" class="slider__btn slider__btn--prev" aria-label="Previous">
        &larr;
      </button>
      <button @click="next" class="slider__btn slider__btn--next" aria-label="Next">
        &rarr;
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

const currentSlide = ref(0)

const next = () => {
  currentSlide.value = (currentSlide.value + 1) % props.images.length
}

const prev = () => {
  currentSlide.value = (currentSlide.value - 1 + props.images.length) % props.images.length
}
</script>

<style lang="scss" scoped>
</style>
