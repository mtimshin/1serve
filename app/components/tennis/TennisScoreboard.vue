<template>
  <div class="scoreboard">
    <div class="scoreboard__header">
      <span>Игрок</span>
      <div class="scoreboard__scores">
        <span v-for="n in sets" :key="n">С{{ n }}</span>
        <span>Гейм</span>
      </div>
    </div>
    <div v-for="(player, i) in players" :key="player.name" class="scoreboard__row">
      <div class="scoreboard__player">
        <span class="scoreboard__serve-dot" :class="{ 'scoreboard__serve-dot--hidden': servingPlayer !== i }" />
        {{ player.name }}
      </div>
      <div class="scoreboard__scores">
        <span v-for="(s, si) in player.sets" :key="si" class="scoreboard__set" :class="{ 'scoreboard__set--won': s > (players[1-i].sets[si] ?? 0) }">{{ s }}</span>
        <span class="scoreboard__game">{{ player.game }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  players:       { type: Array, required: true }, // [{ name, sets: [6, 3], game: '40' }]
  servingPlayer: { type: Number, default: 0 },   // 0 or 1
  sets:          { type: Number, default: 3 }
})
</script>
