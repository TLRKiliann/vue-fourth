# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Attributes

App.vue

`id='my-article'`

<FirstComp id='my-article' title="Esteban in Article" />

FirstComp.vue

`v-bind='$attrs'`

To fix attribute to App.vue we use :

```
  <div>
    <h1 v-bind="$attrs">Hello ! {{ title }}</h1>
  </div>
```

but div will take the attribute by default in FirstComp too (behavior by default).
To avoid that we use to fix :

`inheritAttrs: false,`

---

## Provide & inject (for e-commerce)

1) Provide the value to the App component
2) Inject the value to the component ThirdComp

App.vue

```
provide: {
    username: 'Esteban'
}`
```

ThirdComp.vue

`inject: ['username'],`

We also make :

```
<script lang="ts">
import FirstComp from './components/FirstComp.vue'
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    FirstComp
  },
  data() {
    return {
        name: 'Esteban'
    }
  },
  provide() {
    return { 
        username: this.name
    }
  }
})
</script>

<template>
  <FirstComp id='my-article' title="Esteban in Article" :likes="50" :isPublished="true" />
</template>
```

---

## slot (basic)

In child component

`<slot></slot>`

We can also use a default slot for empty Card like that :

`<slot>Default slot for empty Card</slot>`

---

In parent component

`<Card>My Card</Card>`

## slot with name & v-slot:

In child component

`<slot name='header'></slot>`

```
<div>
  <slot name='header'></slot>
</div>
```

---

In parent component

```
<Card>
  <template v-slot:header>
    <h2>Card Header</h2>
  <template>
</Card>
```

I have some trouble with the custom event `@close` I believe that was changed since Vue version 3.2