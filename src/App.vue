<template>
  <Header />
  <router-view/>
</template>

<script setup>

import Header from './components/Header/Header.vue'

</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Gloock&display=swap');


*, body, html, p, span, h1, h2, h3, h4, h5, h6, div, a, ul, li, form, label {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Gloock', serif;
  text-align: center;
  color: #2c3e50;
}

</style>
