<template>
  <div class="rankings">
    <div v-for="row in rows" :key="row.pos" class="rankings__row">
      <span class="rankings__pos">{{ row.pos }}</span>
      <span class="rankings__delta" :class="`rankings__delta--${row.delta > 0 ? 'up' : row.delta < 0 ? 'down' : 'same'}`">
        {{ row.delta > 0 ? '↑' : row.delta < 0 ? '↓' : '—' }}
      </span>
      <span class="rankings__name">{{ row.name }}</span>
      <span class="rankings__country">{{ row.country }}</span>
      <span class="rankings__points">{{ row.points.toLocaleString() }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  rows: { type: Array, required: true } // [{ pos, delta, name, country, points }]
})
</script>
