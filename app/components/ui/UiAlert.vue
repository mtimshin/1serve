<template>
  <div v-if="visible" class="alert" :class="`alert--${variant}`">
    <svg class="alert__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle v-if="variant === 'info'" cx="12" cy="12" r="10" /><line v-if="variant === 'info'" x1="12" y1="8" x2="12" y2="12" /><line v-if="variant === 'info'" x1="12" y1="16" x2="12.01" y2="16" />
      <polyline v-if="variant === 'success'" points="20 6 9 17 4 12" />
      <path v-if="variant === 'warning'" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line v-if="variant === 'warning'" x1="12" y1="9" x2="12" y2="13" /><line v-if="variant === 'warning'" x1="12" y1="17" x2="12.01" y2="17" />
      <circle v-if="variant === 'error'" cx="12" cy="12" r="10" /><line v-if="variant === 'error'" x1="15" y1="9" x2="9" y2="15" /><line v-if="variant === 'error'" x1="9" y1="9" x2="15" y2="15" />
    </svg>
    <div><slot /></div>
    <button v-if="closable" class="alert__close" @click="visible = false">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
    </button>
  </div>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'info' }, // info | success | warning | error
  closable: { type: Boolean, default: false }
})
const visible = ref(true)
</script>
