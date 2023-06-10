<script lang="ts">
import SecondComp from './SecondComp.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FirstComp',
  inheritAttrs: false,
  components: {
    SecondComp,
},
  props : {
    title: {
        type: String,
        require: true,
        default: 'Article by default'
    },
    likes: Number,
    isPublished: Boolean
  },
  data() {
    return {
    }
  }
})
</script>

<template>
  <div>
    <h1 v-bind="$attrs">Hello ! {{ title }}</h1>
    <h2>Likes: {{ likes }}</h2>
    <h2>Published: {{ isPublished ? 'yes' : 'no' }}</h2>
  </div>
  <SecondComp />
</template>

<style scoped>

</style>
