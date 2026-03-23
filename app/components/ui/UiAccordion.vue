<template>
  <div class="accordion">
    <details v-for="item in items" :key="item.id" class="accordion__item">
      <summary class="accordion__trigger">
        {{ item.title }}
        <svg class="accordion__trigger__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </summary>
      <div class="accordion__body">
        <div class="accordion__content" v-html="item.content" />
      </div>
    </details>
  </div>
</template>

<script setup>
defineProps({
  items: { type: Array, required: true } // [{ id, title, content }]
})
</script>
