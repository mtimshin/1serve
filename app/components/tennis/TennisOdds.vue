<template>
  <div class="odds">
    <div class="odds__title">Букмекерские коэффициенты</div>
    <div class="odds__grid">
      <div v-for="item in items" :key="item.label" class="odds__item">
        <span class="odds__label">{{ item.label }}</span>
        <span class="odds__value">{{ item.value.toFixed(2) }}</span>
        <span class="odds__book">{{ item.book }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: { type: Array, required: true } // [{ label, value, book }]
})
</script>
