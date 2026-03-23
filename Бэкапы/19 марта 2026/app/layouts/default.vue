<script setup>
const { isMenuOpen, toggleMenu } = useNavigation()
const { toggleSearch } = useSearch()
const { navItems } = useNavigationData()
const { open: openLightbox } = useLightbox()

const activeDropdown = ref(null)
const isScrolled = ref(false)

const handleGlobalClick = (e) => {
  if (e.target.tagName === 'IMG' && !e.target.closest('.slider') && !e.target.closest('.lightbox')) {
    openLightbox([e.target.src], 0)
  }
}

onMounted(() => {
  document.addEventListener('click', handleGlobalClick)
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 10
  }, { passive: true })
})

onUnmounted(() => {
  document.removeEventListener('click', handleGlobalClick)
  window.removeEventListener('scroll', () => {})
})
</script>

<template>
  <div class="layout-default">
    <header class="header" :class="{ 'header--scrolled': isScrolled }">
      <div class="container header__inner">
        <NuxtLink to="/" class="header__logo">Первая подача</NuxtLink>

        <nav class="header__nav">
          <div v-for="item in navItems" :key="item.path" class="header__nav-item"
            @mouseenter="activeDropdown = item.path" @mouseleave="activeDropdown = null">
            <NuxtLink :to="item.path" class="header__nav-link">
              {{ item.title }}
              <svg v-if="item.children" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </NuxtLink>

            <Transition name="slide-up">
              <div v-if="item.children && activeDropdown === item.path" class="header__dropdown">
                <div v-for="child in item.children" :key="child.path" class="header__dropdown-item">
                  <NuxtLink :to="child.path" class="header__dropdown-link">
                    {{ child.title }}
                  </NuxtLink>
                  <!-- Nested players dropdown if needed -->
                  <div v-if="child.children" class="header__dropdown-sub">
                    <NuxtLink v-for="sub in child.children" :key="sub.path" :to="sub.path"
                      class="header__dropdown-sub-link">
                      {{ sub.title }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </nav>

        <div class="header__actions">
          <button class="header__search-trigger" @click="toggleSearch" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <button class="header__burger" :class="{ 'header__burger--active': isMenuOpen }" @click="toggleMenu"
            aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>

    <MobileMenu :is-open="isMenuOpen" @close="isMenuOpen = false" />
    <SearchModal />
    <BackToTop />

    <main>
      <slot />
    </main>

    <footer class="footer">
      <div class="container footer__inner">
        <NuxtLink to="/" class="logo">Первая подача</NuxtLink>
        <nav class="footer__nav">
          <NuxtLink to="/tournaments">Турниры</NuxtLink>
          <NuxtLink to="/news">Новости</NuxtLink>
          <NuxtLink to="/predictions">Прогнозы</NuxtLink>
          <NuxtLink to="/wiki">Wiki</NuxtLink>
          <NuxtLink to="/amateurs">Любителям</NuxtLink>
          <NuxtLink to="/about">О проекте</NuxtLink>
        </nav>
        <p class="footer__copy">&copy; 2026 1SERVE</p>
      </div>
    </footer>
    <Lightbox />
  </div>
</template>
