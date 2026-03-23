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
            <img 
              :src="withBase(item.image)" 
              :alt="item.title"
              class="related__image"
              loading="lazy"
            />
          </div>
          <h3 class="related__card-title">{{ item.title }}</h3>
        </NuxtLink>
      </div>
      <NuxtLink to="/tournaments" class="related__all-link">Смотреть все турниры →</NuxtLink>
    </div>
  </section>
</template>

<script setup>
const route = useRoute()

const { data: dbItems } = await useAsyncData(`related-${route.path}`, () =>
  queryCollection('content')
    .where('path', 'LIKE', '/tournaments/%')
    .where('path', '!=', route.path)
    .limit(8)
    .all()
)

// Static fallback cards (used when real content is not enough)
const fallback = [
  { title: 'Wimbledon Championship', path: '/tournaments/wimbledon', image: '/images/miami-action.png' },
  { title: 'Roland Garros', path: '/tournaments/roland-garros', image: '/images/miami-crowd.png' },
  { title: 'US Open', path: '/tournaments/us-open', image: '/images/miami-trophy.png' },
  { title: 'Australian Open', path: '/tournaments/australian-open', image: '/images/miami-hero.png' },
  { title: 'Indian Wells Masters', path: '/tournaments/indian-wells', image: '/images/miami-action.png' },
  { title: 'French Open', path: '/tournaments/french-open', image: '/images/miami-crowd.png' },
  { title: 'US Open Series', path: '/tournaments/us-open-series', image: '/images/miami-trophy.png' },
  { title: 'ATP Finals', path: '/tournaments/atp-finals', image: '/images/miami-hero.png' },
]

const items = computed(() => {
  const real = (dbItems.value ?? []).map(item => ({
    title: item.title,
    path: item.path,
    image: item.image || '/images/miami-hero.png'
  }))

  // Fill remaining slots with fallback items not already in real list
  const realPaths = new Set(real.map(i => i.path))
  const extra = fallback.filter(f => !realPaths.has(f.path))
  return [...real, ...extra].slice(0, 8)
})
</script>
