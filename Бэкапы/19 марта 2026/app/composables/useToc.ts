const isTocOpen = ref(false)
const activeSection = ref('')

export const useToc = () => {
  const toggleToc = () => {
    isTocOpen.value = !isTocOpen.value
  }

  const initTocObserver = (ids: string[]) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      { rootMargin: '-10% 0px -80% 0px' }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return observer
  }

  return {
    isTocOpen,
    activeSection,
    toggleToc,
    initTocObserver
  }
}
