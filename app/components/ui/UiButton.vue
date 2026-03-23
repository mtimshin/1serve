<template>
  <component
    :is="tag"
    :href="href"
    :to="to"
    :type="!to && !href ? type : undefined"
    :disabled="disabled"
    class="btn"
    :class="[`btn--${variant}`, `btn--${size}`, { 'btn--disabled': disabled }]"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'primary' }, // primary | ghost | danger
  size:    { type: String, default: 'md' },       // sm | md | lg
  tag:     { type: String, default: 'button' },
  type:    { type: String, default: 'button' },
  href:    { type: String, default: undefined },
  to:      { type: String, default: undefined },
  disabled: { type: Boolean, default: false }
})
</script>
