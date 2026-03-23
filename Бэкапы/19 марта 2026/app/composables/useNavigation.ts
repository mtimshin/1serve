const isMenuOpen = ref(false)

export const useNavigation = () => {
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu
  }
}
