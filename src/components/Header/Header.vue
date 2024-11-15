<template>
  <header :class="{ 'scrolled': scrolled }">
    <div class="header-content">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="">
      </router-link>
      <nav :class="{ 'open': menuOpen }">
        <div>
          <router-link to="/albums" @click="menuOpen = false">Albums</router-link>
          <router-link to="/about" @click="menuOpen = false">About</router-link>
          <router-link to="/contact" @click="menuOpen = false">Contact</router-link>
        </div>
      </nav>

      <div v-if="menuOpen" class="overlay" @click="menuOpen = false"></div>

      <button class="hamburger" @click="menuOpen = !menuOpen" v-show="windowWidth <= 600">
        <span :class="{ 'active': menuOpen }"></span>
        <span :class="{ 'active': menuOpen }"></span>
        <span :class="{ 'active': menuOpen }"></span>
      </button>

    </div>
  </header>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)
const windowWidth = ref(window.innerWidth)

const handleScroll = () => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY >= 65
  })
}

const handleResize = () => {
  windowWidth.value = window.innerWidth
  if (windowWidth.value > 600) {
    menuOpen.value = false
  }
}


onMounted(() => {
  handleScroll()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})



</script>

<style scoped>

header {
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 15px 20px;
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
  color: rgb(188, 188, 188);
}

.scrolled nav a:hover::after {
  background-color: rgb(188, 188, 188);
}

.scrolled nav a.router-link-exact-active {
  color: white;
}

.scrolled nav a.router-link-exact-active::after {
  background-color: white;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
}

nav div {
  display: flex;
  gap: 30px;
  padding-right: 5px;
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

/* ------------------------------------------------------------------ */

.hamburger {
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1002;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: black;
  margin: 5px 0;
  transition: 0.4s;
}

.scrolled .hamburger span {
  background-color: white;
}

.hamburger span.active:nth-child(1) {
  transform: rotate(45deg) translate(5px, 7.4px);
}

.hamburger span.active:nth-child(2) {
  opacity: 0;
}

.hamburger span.active:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.315);
  z-index: 999;
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

@media only screen and (max-width: 600px) {

  nav {
    display: none;
    position: fixed;
    top: 65px;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    z-index: 1000;
  }

  nav div {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 220px;
    text-align: right;
    height: 100vh;
    background-color: #ffffff;
    flex-direction: column;
    gap: 10%;
    padding: 120px 10px 0 10px;
    z-index: 1001;
  }

  .scrolled nav div {
    background-color: black;
  }

  nav.open {
    display: flex;
  }

  nav a {
    font-size: 24px;
    text-transform: uppercase;
  }

  .hamburger {
    display: block;
    z-index: 1002;
  }

}

</style>
