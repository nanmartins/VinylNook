<template>
  <Header />
  <div style="height: 100%; min-height: 100vh; margin: 0; padding: 0">
    <router-view />
  </div>
  <Footer />
</template>

<script setup>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'

</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Gloock&display=swap');
  /* font-family: 'Gloock', serif; */
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,300;0,500;0,600;0,800;0,900;1,100;1,300;1,600;1,800;1,900&display=swap');
  /* font-family: 'Barlow Condensed', sans-serif; */
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap');
  /* font-family: 'Oswald', sans-serif; */


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
  font-family: 'Barlow Condensed', sans-serif;
  text-align: center;
  background: white;
}

</style>
