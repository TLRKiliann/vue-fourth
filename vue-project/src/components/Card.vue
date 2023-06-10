<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Card',
  data() {
    return {
    }
  },
})
</script>

<template>
    <slot>Default Slot Card</slot>

    <div class="card--header">
        <slot name="header"></slot>
    </div>
    <div class="card--main">
        <slot name="main"></slot>
    </div>
    <div class="card--footer">
        <slot name="footer"></slot>
    </div>
</template>

<style scoped>
.card--header {

  border: 1px solid #fff;
}
.card--main {

border: 1px solid #fff;
}
.card--footer {

border: 1px solid #fff;
}
</style>
