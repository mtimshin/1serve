<template>
  <div class="empty-state">
    <div class="empty-state__icon">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </div>
    <h2 class="empty-state__title">{{ title }}</h2>
    <p class="empty-state__text">{{ text }}</p>
    <div v-if="$slots.default" class="empty-state__action">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'Ничего не найдено' },
  text:  { type: String, default: 'Попробуйте изменить параметры поиска или вернитесь позже' }
})
</script>
