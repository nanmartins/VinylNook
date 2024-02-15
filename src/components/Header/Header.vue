<template>
  <header :class="{ 'scrolled': scrolled }">
    <img src="@/assets/logo.png" alt="">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/albums">Albums</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
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
  justify-content: space-between;
  background: #ffffff;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
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
  font-size: 18px;
}

nav a:hover::after {
  content: '';
  display: block;
  width: 100%;
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

</style>
