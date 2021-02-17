<template>
  <h1>Table 示例</h1>
  <Demo :component="TableDemo1" />
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import TableDemo1 from "./TableDemo1.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      TableDemo1,
    };
  },
};
</script>
