<template>
  <Transition name="fade">
    <div v-if="isOpen" class="lightbox" @click.self="close" @keydown.esc="close" tabindex="0">
      <div class="lightbox__content">
        <button class="lightbox__close" @click="close" aria-label="Close">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div class="lightbox__main" @touchstart="onTouchStart" @touchend="onTouchEnd">
          <img :src="images[currentIndex]" :alt="`Image ${currentIndex + 1}`" class="lightbox__image">
          
          <div v-if="images.length > 1" class="lightbox__nav">
            <button @click="prev" class="lightbox__btn lightbox__btn--prev">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button @click="next" class="lightbox__btn lightbox__btn--next">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>

        <div v-if="images.length > 1" class="lightbox__counter">
          {{ currentIndex + 1 }} / {{ images.length }}
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { useLightbox } from '~/composables/useLightbox'

const { isOpen, images, currentIndex, close, next, prev } = useLightbox()

let touchStartX = 0
let touchEndX = 0

const onTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX
}

const onTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
}

const handleSwipe = () => {
  const swipeDistance = touchEndX - touchStartX
  if (swipeDistance < -50) {
    next()
  } else if (swipeDistance > 50) {
    prev()
  }
}

// Global escape key listener
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen.value) close()
  })
})
</script>

<style lang="scss">
@use "~/assets/scss/_variables.scss" as *;
.lightbox {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);

  &__content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px;
  }

  &__main {
    position: relative;
    max-width: 90vw;
    max-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    box-shadow: 0 48px 96px rgba(0, 0, 0, 0.5);
  }

  &__close {
    position: absolute;
    top: 32px;
    right: 32px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.3s;
    z-index: 10;

    &:hover {
      opacity: 1;
    }
  }

  &__nav {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    pointer-events: none;
    padding: 0 16px;
  }

  &__btn {
    width: 64px;
    height: 64px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    pointer-events: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  &__counter {
    margin-top: 24px;
    color: rgba(255, 255, 255, 0.5);
    @include body-text;
    font-size: 14px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
