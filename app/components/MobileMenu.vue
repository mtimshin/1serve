<template>
  <div class="mobile-menu" :class="{ 'mobile-menu--active': isOpen }">
    <div class="container mobile-menu__inner">
      <nav class="mobile-menu__nav">
        <NuxtLink to="/tournaments/sample-tournament" class="mobile-menu__link" @click="$emit('close')">Турниры</NuxtLink>
        <NuxtLink to="/wiki" class="mobile-menu__link" @click="$emit('close')">Wiki</NuxtLink>
        <NuxtLink to="/news" class="mobile-menu__link" @click="$emit('close')">Новости</NuxtLink>
        <NuxtLink to="/predictions" class="mobile-menu__link" @click="$emit('close')">Прогнозы</NuxtLink>
        <NuxtLink to="/amateurs" class="mobile-menu__link" @click="$emit('close')">Любителям</NuxtLink>
        <NuxtLink to="/about" class="mobile-menu__link" @click="$emit('close')">О проекте</NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['close'])
</script>

<style lang="scss" scoped>
</style>
