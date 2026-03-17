<script setup>
const { isMenuOpen, toggleMenu } = useNavigation()
const { toggleSearch } = useSearch()
</script>

<template>
  <div class="layout-default">
    <header class="header">
      <div class="container header__inner">
        <NuxtLink to="/" class="logo">Первая подача</NuxtLink>
        
        <nav class="nav">
          <NuxtLink to="/tournaments" class="nav__link">Турниры</NuxtLink>
          <NuxtLink to="/wiki" class="nav__link">Wiki</NuxtLink>
          <NuxtLink to="/news" class="nav__link">Новости</NuxtLink>
          <NuxtLink to="/predictions" class="nav__link">Прогнозы</NuxtLink>
          <NuxtLink to="/amateurs" class="nav__link">Любителям</NuxtLink>
          <NuxtLink to="/about" class="nav__link">О проекте</NuxtLink>
        </nav>

        <div class="header__actions">
          <button class="search-trigger" @click="toggleSearch" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          
          <button 
            class="burger" 
            :class="{ 'burger--active': isMenuOpen }"
            @click="toggleMenu"
            aria-label="Toggle menu"
          >
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
  </div>
</template>
