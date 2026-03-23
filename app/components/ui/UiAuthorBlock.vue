<template>
  <div class="author">
    <div class="author__avatar">
      <img v-if="avatar" :src="avatar" :alt="name" />
      <svg v-else width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    </div>
    <div>
      <div class="author__name">{{ name }}</div>
      <div class="author__bio">{{ bio }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name:   { type: String, required: true },
  bio:    { type: String, default: '' },
  avatar: { type: String, default: null }
})
</script>
