<template>
  <header>
    <img src="@/assets/logo.png" height="60px" alt="">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/albums">Albums</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </header>
</template>

<script setup>
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

nav {
  padding: 0;
  display: flex;
  gap: 30px;
  padding-right: 10px;
}

nav a {
  font-weight: 300;
  color: black;
  text-decoration: none;
  font-size: 20px;
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
  font-weight: 600;
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
