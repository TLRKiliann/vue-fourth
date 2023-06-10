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
    <div class="card--alone">
      <slot>Default Slot Card</slot>
    </div>

    <div class="maincard--div">
      <div class="card--header">
          <slot name="header"></slot>
      </div>
      <div class="card--main">
          <slot name="main"></slot>
      </div>
      <div class="card--footer">
          <slot name="footer"></slot>
      </div>
    </div>
</template>

<style scoped>
.card--alone {
  display: flex;
  background: blue;
}
.maincard--div {
  display: flex;
  flex-direction: column;
  background-color: royalblue;
  border: 1px solid red;
}
</style>
