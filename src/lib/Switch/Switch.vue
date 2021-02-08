<template>
  <button class="ideal-switch" @click="toggle" :class="{'ideal-checked':value}">
    <span></span>
  </button>
</template>
<script lang="ts" setup="props, context">
import { SetupContext } from "vue";
// declare const props: {value: boolean}
declare const context: SetupContext
export default {
  props: {
    value: Boolean,
  },
};
export const toggle = () => {
  context.emit("update:value", !props.value);
};
</script>

<style lang="scss">
@import './_style.scss';
</style>