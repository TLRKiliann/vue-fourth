<script lang="ts">
import FirstComp from './components/FirstComp.vue'
import PopupComp from './components/PopupComp.vue'
import Card from './components/Card.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    FirstComp,
    PopupComp,
    Card,
},
  data() {
    return {
      showPopup: false,
    }
  },
  provide: {
    username: 'Esteban'
  }
})
</script>

<template>
  <FirstComp id='my-article' title="Esteban in Article" :likes="50" :isPublished="true" />

  <div>
    <button class="btn-one" @click="showPopup = true">Shwo my popup</button>
    <button class="btn-two" @click="showPopup = false">Hide my popup</button>
    <PopupComp v-show="showPopup" />
  </div>

  <div>
    <Card></Card>
    <Card>Header</Card>
    <Card>Main</Card>
    <Card>Footer</Card>
  </div>

  <Card>
    <template v-slot:header>
      <h2>Card Header</h2>
    </template>

    <template v-slot:main>
      <h2>Card Main</h2>
    </template>

    <template v-slot:footer>
      <h2>Card Footer</h2>
    </template>
  </Card>

</template>

<style scoped>
</style>
