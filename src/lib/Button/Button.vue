<template>
  <button class="ideal-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="ideal-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script lang="ts" setup="props, context">
import { computed } from "vue";
export type theme = 'button' | 'text' | 'link';
export type size = 'normal' | 'big' | 'small';
export type level = 'normal' | 'main' | 'danger';

export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
};
const { theme, size, level, loading } = props;
export const classes = computed(() => {
  return {
    [`ideal-theme-${theme}`]: theme,
    [`ideal-size-${size}`]: size,
    [`ideal-level-${level}`]: level,
    ['ideal-loading']: loading,
  };
});
</script>
<style lang="scss">
@import './_style.scss';
</style>