<demo>
常规使用
</demo>
<template>
  <div style="display: flex; flex-direction: column">
    <Input value="asdf" size="large" style="margin-bottom: 24px" />
    <Input value="asdf" style="margin-bottom: 24px" />
    <Input value="asdf" size="small" style="margin-bottom: 24px" />
    <Input value="asdf" error="asdfsad" style="margin-bottom: 24px" />
    <Input value="asdf" disabled style="margin-bottom: 24px" />
    <Input value="asdf" readonly style="margin-bottom: 24px" />
  </div>
</template>

<script lang="ts">
import { Input } from "../../lib/index";
export default {
  components: {
    Input,
  },
  setup() {},
};
</script>
