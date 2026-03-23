const isActive = ref(false)
const query = ref('')
const results = ref<any[]>([])
const loading = ref(false)

export const useSearch = () => {
  const toggleSearch = () => {
    isActive.value = !isActive.value
    if (!isActive.value) {
      query.value = ''
      results.value = []
    }
  }

  const closeSearch = () => {
    isActive.value = false
    query.value = ''
    results.value = []
  }

  const handleSearch = async () => {
    if (query.value.length < 2) {
      results.value = []
      return
    }

    loading.value = true
    try {
      const items = await queryCollection('content')
        .where('title', 'LIKE', `%${query.value}%`)
        .limit(5)
        .all()
      
      results.value = items
    } catch (e) {
      console.error('Search error:', e)
    } finally {
      loading.value = false
    }
  }

  return {
    isActive,
    query,
    results,
    loading,
    toggleSearch,
    closeSearch,
    handleSearch
  }
}
