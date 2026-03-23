<template>
  <div v-if="isActive" class="search-modal" @click.self="closeSearch">
    <div class="search-modal__container">
      <div class="search-modal__header">
        <input 
          ref="searchInput"
          v-model="query" 
          type="text" 
          placeholder="Поиск по сайту..." 
          class="search-modal__input"
          @input="handleSearch"
          @keyup.esc="closeSearch"
        >
        <button class="search-modal__close" @click="closeSearch">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <div class="search-modal__body">
        <div v-if="results.length > 0" class="search-modal__results">
          <NuxtLink 
            v-for="result in results" 
            :key="result.path" 
            :to="result.path" 
            class="search-modal__item"
            @click="closeSearch"
          >
            <h3 class="search-modal__item-title">{{ result.title }}</h3>
            <p class="search-modal__item-desc">{{ result.description }}</p>
          </NuxtLink>
        </div>
        <div v-else-if="query.length > 1 && !loading" class="search-modal__empty">
          По вашему запросу ничего не найдено
        </div>
        <div v-else-if="loading" class="search-modal__loading">
          Поиск...
        </div>
        <div v-else class="search-modal__placeholder">
          Введите название турнира или статьи
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { isActive, query, results, loading, closeSearch, handleSearch } = useSearch()
const searchInput = ref(null)

watch(isActive, (val) => {
  if (!import.meta.client) return
  
  if (val) {
    nextTick(() => {
      searchInput.value?.focus()
    })
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

// Listen for global search trigger (optional, if we want a hotkey)
</script>
