<demo>
常规使用
</demo>
<template>
<div>
  <Button @click="click">你好</Button>
  <Button theme="link">你好</Button>
  <Button theme="text">你好</Button>
  <Button theme="primary">你好</Button>
</div>
</template>

<script lang="ts">
import {
  Button
} from "../../lib/index";
export default {
  components: {
    Button
  },
  setup() {
    const click = () => {
      console.log('111');
    };
    return {
      click,
    };
  }
}
</script>
