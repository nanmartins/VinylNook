<template>
  <header :class="{ 'scrolled': scrolled }">
    <div class="header-content">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="">
      </router-link>
      <nav>
        <router-link to="/albums">Albums</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>

    </div>
  </header>
</template>

<script setup>

import { ref, onMounted } from 'vue'

const scrolled = ref(false)


onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY >= 65
  })
})

</script>

<style scoped>

header {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  background: #ffffff;
  padding: 15px 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

header img {
  height: 50px;
}

.scrolled {
  background: black;
  color: white;
  transition: 0.3s ease-in-out;
}

.scrolled img {
  filter: invert(100%);
  transition: 0.3s ease;
}

.scrolled nav a {
  color: white;
}

.scrolled nav a:hover::after {
  background-color: rgb(181, 181, 181);
}

.scrolled nav a.router-link-exact-active::after {
  background-color: white;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 2000px;
  margin: 0 auto;
}

nav {
  padding: 0;
  display: flex;
  gap: 30px;
  padding-right: 10px;
}

nav a {
  font-family: 'Barlow Condensed', sans-serif;
  color: black;
  text-decoration: none;
  font-weight: 300;
  font-size: 20px;
}

nav a:hover::after {
  content: '';
  display: block;
  width: 100%;
  top: 2px;
  height: 1px;
  background-color: rgb(142, 142, 142);
  animation: widthAnime 0.5s;
}

nav a.router-link-exact-active {
  font-weight: 500;
}

nav a.router-link-exact-active::after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: black;
}

@keyframes widthAnime {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@media only screen and (max-width: 800px) {

  header {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    background: #ffffff;
    padding: 10px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
  }

  header img {
    height: 40px;
  }

  nav a {
    font-family: 'Barlow Condensed', sans-serif;
    color: black;
    text-decoration: none;
    font-weight: 300;
    font-size: 18px;
  }

}

</style>
