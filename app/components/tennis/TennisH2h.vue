<template>
  <div class="h2h">
    <div class="h2h__header">
      <div class="h2h__player h2h__player--left">{{ players[0] }}</div>
      <div class="h2h__score">{{ wins[0] }} – {{ wins[1] }}</div>
      <div class="h2h__player h2h__player--right">{{ players[1] }}</div>
    </div>
    <div v-for="stat in stats" :key="stat.label" class="h2h__row">
      <div class="h2h__stat-label">
        <span>{{ stat.a }}{{ stat.unit }}</span>
        <span>{{ stat.label }}</span>
        <span>{{ stat.b }}{{ stat.unit }}</span>
      </div>
      <div class="h2h__bar-track">
        <div class="h2h__bar-fill" :style="{ width: (stat.a / (stat.a + stat.b) * 100) + '%' }" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  players: { type: Array, required: true },  // ['Djokovic', 'Nadal']
  wins:    { type: Array, required: true },   // [30, 29]
  stats:   { type: Array, required: true }    // [{ label, a, b, unit }]
})
</script>
