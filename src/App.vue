<template>
  <Header />
  <router-view style="height: 100vh"/>
  <Footer />
</template>

<script setup>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'

</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Gloock&display=swap');


*, body, html, p, span, h1, h2, h3, h4, h5, h6, div, a, ul, li, form, label {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  background: black;
  background-image: linear-gradient(to bottom, white 0%, white 50%, black 100%);
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Gloock', serif;
  text-align: center;
  background: white;
}

</style>
