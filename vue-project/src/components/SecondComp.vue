<script lang="ts">
import ThirdComp from './ThirdComp.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SecondComp',
  components: {
    ThirdComp,
},
  data() {
    return {
    }
  }
})
</script>

<template>
    <h2>SecondComp</h2>
    <ThirdComp />
</template>

<style scoped>

</style>
