<template>
  <section class="related">
    <div class="container">
      <h2 class="related__title">Смотрите также</h2>
      <div class="related__grid">
        <NuxtLink 
          v-for="item in items" 
          :key="item.path" 
          :to="item.path" 
          class="related__card"
        >
          <div class="related__image-wrapper">
            <NuxtImg 
              :src="item.image" 
              :alt="item.title" 
              class="related__image"
              width="300"
              height="200"
              format="webp"
              loading="lazy"
            />
          </div>
          <h3 class="related__card-title">{{ item.title }}</h3>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  { title: 'Wimbledon Championship', path: '/tournaments/wimbledon', image: '/images/wimbledon.jpg' },
  { title: 'Roland Garros', path: '/tournaments/roland-garros', image: '/images/roland-garros.jpg' },
  { title: 'US Open', path: '/tournaments/us-open', image: '/images/us-open.jpg' },
  { title: 'Australian Open', path: '/tournaments/australian-open', image: '/images/australian-open.jpg' }
]
</script>
