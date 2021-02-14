<template>
  <div class="wrapper" :class="{ error }">
    <input
      class="ideal-input"
      :class="classes"
      :value="value"
      type="text"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>
<script>
import { computed } from "vue";
import Icon from "../Icon/Icon.vue";

export default {
  components: { Icon },
  name: "GuluInput",
  props: {
    value: {
      type: String,
    },
    size: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
  setup(props) {
    const classes = computed(() => {
      const { size } = props;
      return {
        [`ideal-input-size-${size}`]: size,
      };
    });
    return {
      classes,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./_style.scss";
</style>
