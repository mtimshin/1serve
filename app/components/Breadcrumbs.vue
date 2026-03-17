<template>
  <nav class="breadcrumbs">
    <div class="container">
      <ul class="breadcrumbs__list">
        <li class="breadcrumbs__item">
          <NuxtLink to="/" class="breadcrumbs__link">Главная</NuxtLink>
        </li>
        <li v-for="(crumb, index) in crumbs" :key="index" class="breadcrumbs__item">
          <span class="breadcrumbs__separator">/</span>
          <NuxtLink v-if="crumb.path" :to="crumb.path" class="breadcrumbs__link">
            {{ crumb.title }}
          </NuxtLink>
          <span v-else class="breadcrumbs__current">{{ crumb.title }}</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  crumbs: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
</style>
