<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ThirdComp',
  inject: ['username'],
  data() {
    return {
    }
  },
})
</script>

<template>
    <h2>ThirdComp {{ username }}</h2>
</template>

<style scoped>

</style>