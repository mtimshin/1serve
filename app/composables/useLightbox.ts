import { ref } from 'vue'

const isOpen = ref(false)
const images = ref<string[]>([])
const currentIndex = ref(0)

export const useLightbox = () => {
  const open = (imageList: string[], index = 0) => {
    images.value = imageList
    currentIndex.value = index
    isOpen.value = true
    document.body.style.overflow = 'hidden'
  }

  const close = () => {
    isOpen.value = false
    document.body.style.overflow = ''
  }

  const next = () => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length
  }

  const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
  }

  return {
    isOpen,
    images,
    currentIndex,
    open,
    close,
    next,
    prev
  }
}
