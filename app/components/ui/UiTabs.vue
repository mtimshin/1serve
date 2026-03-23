<template>
  <div class="tabs">
    <div class="tabs__nav">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="tabs__btn"
        :class="{ 'tabs__btn--active': activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="tabs__panel">
      <slot :name="activeTab" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tabs: { type: Array, required: true }, // [{ id: 'info', label: 'Инфо' }]
  default: { type: String, default: null }
})

const activeTab = ref(props.default ?? props.tabs[0]?.id)
</script>
