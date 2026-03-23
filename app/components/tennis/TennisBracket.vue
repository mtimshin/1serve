<template>
  <div class="bracket">
    <div v-for="round in rounds" :key="round.label" class="bracket__round">
      <div class="bracket__round-label">{{ round.label }}</div>
      <div v-for="match in round.matches" :key="match.id" class="bracket__match">
        <div v-for="player in match.players" :key="player.name" class="bracket__line" :class="{ 'bracket__line--winner': player.winner }">
          <span class="bracket__player-name">{{ player.name }}</span>
          <div class="bracket__scores">
            <span v-for="(s, si) in player.scores" :key="si" class="bracket__score-item">{{ s }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  rounds: { type: Array, required: true }
})
</script>
