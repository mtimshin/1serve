<template>
  <div class="player-card">
    <div class="player-card__photo">
      <img :src="photo" :alt="name" />
    </div>
    <div class="player-card__info">
      <div class="player-card__country">{{ country }}</div>
      <div class="player-card__name">{{ name }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name:    { type: String, required: true },
  country: { type: String, default: '' },
  photo:   { type: String, required: true }
})
</script>
