<template>
  <Header />

  <div class="content" style="height: 100%; min-height: 100vh; margin: 0; margin-top: 80px; padding: 0">
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

input:focus,
textarea:focus {
  outline: 0.5px solid #007aff;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Barlow Condensed', sans-serif;
  text-align: center;
  background: white;
}

.swiper-button-prev,
.swiper-button-next {
  /* position: absolute;
  top: var(--swiper-navigation-top-offset, 50%);
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--swiper-navigation-color, var(--swiper-theme-color)); */
  background: rgba(255, 255, 255, 0.55);
  border-radius: 2px;
  padding: 30px 20px;
  color: black !important;
  text-shadow: 1px 1px white;
  border: 0.4px solid black;
  transition: 0.3s;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background: rgba(255, 255, 255, 0.85);
}

@media only screen and (max-width: 800px) {

  .swiper-button-prev,
  .swiper-button-next {
    padding: 20px 12px;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 22px !important;
    padding: 0px;
  }
}

</style>
