<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PopupComp',
  data() {
    return {
      showPopup: false
    }
  },
  methods: {},
})
</script>

<template>
    <h2 v-if="showPopup">My popup</h2>
    <h2 v-else="showPopup = false">Hide</h2>
    <button @click="showPopup = true">Show btn popup</button>
</template>

<style scoped>

</style>