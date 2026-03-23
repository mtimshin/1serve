<template>
  <div class="mobile-menu" :class="{ 'mobile-menu--active': isOpen }">
    <div class="container mobile-menu__inner">
      <nav class="mobile-menu__nav">
        <div v-for="item in navItems" :key="item.path" class="mobile-menu__item">
          <div class="mobile-menu__item-header">
            <NuxtLink :to="item.path" class="mobile-menu__link" @click="$emit('close')">
              {{ item.title }}
            </NuxtLink>
            <button v-if="item.children" class="mobile-menu__toggle" @click="toggleItem(item.path)">
              <svg :class="{ 'mobile-menu__toggle--active': expandedItems.includes(item.path) }" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
          </div>
          
          <div v-if="item.children && expandedItems.includes(item.path)" class="mobile-menu__sub">
            <div v-for="child in item.children" :key="child.path" class="mobile-menu__sub-item">
              <div class="mobile-menu__item-header">
                <NuxtLink :to="child.path" class="mobile-menu__sub-link" @click="$emit('close')">
                  {{ child.title }}
                </NuxtLink>
                <button v-if="child.children" class="mobile-menu__toggle" @click="toggleItem(child.path)">
                  <svg :class="{ 'mobile-menu__toggle--active': expandedItems.includes(child.path) }" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
              </div>

              <div v-if="child.children && expandedItems.includes(child.path)" class="mobile-menu__sub-sub">
                <NuxtLink v-for="sub in child.children" :key="sub.path" :to="sub.path" class="mobile-menu__sub-sub-link" @click="$emit('close')">
                  {{ sub.title }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['close'])

const { navItems } = useNavigationData()
const expandedItems = ref([])

const toggleItem = (path) => {
  if (expandedItems.value.includes(path)) {
    expandedItems.value = expandedItems.value.filter(p => p !== path)
  } else {
    expandedItems.value.push(path)
  }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/_variables.scss" as *;
.mobile-menu {
  &__item {
    width: 100%;
    margin-bottom: 24px;
  }

  &__item-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  &__toggle {
    background: none;
    border: none;
    color: rgba($color-white, 0.4);
    padding: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    svg {
      transition: transform 0.3s ease;
    }

    &--active {
      transform: rotate(180deg);
      color: $color-primary;
    }
  }

  &__sub {
    margin-top: 16px;
    padding-left: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__sub-link {
    @include body-text;
    font-size: 24px;
    color: rgba($color-white, 0.6);
  }

  &__sub-sub {
    margin-top: 8px;
    padding-left: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__sub-sub-link {
    @include body-text;
    font-size: 16px;
    color: rgba($color-white, 0.4);
  }
}
</style>
