<template>
  <div class="video-preview">
    <img :src="thumbnail" :alt="title" class="video-preview__thumbnail" />
    <div class="video-preview__overlay">
      <button class="video-preview__play" @click="$emit('play')">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  thumbnail: { type: String, required: true },
  title:     { type: String, default: 'Video preview' }
})
defineEmits(['play'])
</script>
