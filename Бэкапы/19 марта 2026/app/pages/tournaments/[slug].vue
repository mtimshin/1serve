<script setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('content').path(route.path).first()
)

const { isTocOpen, activeSection, toggleToc, initTocObserver } = useToc()

const tocLinks = computed(() => {
  if (!page.value || !page.value.body || !page.value.body.toc) return []
  return page.value.body.toc.links
})

onMounted(() => {
  if (tocLinks.value.length > 0) {
    const ids = tocLinks.value.map(link => link.id)
    initTocObserver(ids)
  }
})

const { open: openLightbox } = useLightbox()

const handleImageClick = (index) => {
  if (page.value?.gallery) {
    openLightbox(page.value.gallery, index)
  }
}

useHead({
  title: page.value?.title ? `${page.value.title} — Первая подача` : 'Первая подача',
  meta: [
    { name: 'description', content: page.value?.description || 'Теннисный портал' },
    { property: 'og:title', content: page.value?.title },
    { property: 'og:type', content: 'article' }
  ]
})
</script>

<template>
  <div v-if="page" class="article">
    <div class="article__top">
      <NuxtLink to="/tournaments" class="article__back">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Вернуться назад
      </NuxtLink>
      <Breadcrumbs :crumbs="[{ title: 'Турниры', path: '/tournaments' }, { title: page.title }]" />
    </div>

    <div class="container article__layout">
      <aside class="article__sidebar">
        <div class="article__sidebar-mobile-header">
          <button class="article__sidebar-header" :class="{ 'article__sidebar-header--active': isTocOpen }"
            @click="toggleToc">
            Содержание
          </button>
        </div>
        <h3 class="article__sidebar-title">Навигация</h3>
        <ul class="article__toc" :class="{ 'article__toc--active': isTocOpen }">
          <li v-for="link in tocLinks" :key="link.id" class="article__toc-item">
            <a :href="`#${link.id}`" class="article__toc-link"
              :class="{ 'article__toc-link--active': activeSection === link.id }" @click="isTocOpen = false">
              {{ link.text }}
            </a>
          </li>
        </ul>
      </aside>

      <div class="article__content">
        <h1 class="article__title">{{ page.title }}</h1>
        <ContentRenderer :value="page" />

        <div v-if="page.gallery" class="article__gallery">
          <h2 class="article__gallery-title">Галерея событий</h2>
          <ImageSlider :images="page.gallery" @image-click="handleImageClick" />
        </div>
      </div>
    </div>

    <RelatedItems />
  </div>
</template>

<style lang="scss" scoped></style>
