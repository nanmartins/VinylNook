<template>
  <header>
    <!-- <h1>LOGO</h1> -->
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
  padding: 15px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  /* background:rgba(255, 255, 255, 0.01); */
  /* backdrop-filter: blur(3px); */
  border-bottom: 0.7px solid black;
}

nav {
  padding: 0;
  display: flex;
  gap: 30px;
  padding-right: 5px;
}

nav a {
  font-weight: 300;
  color: black;
  text-decoration: none;
  font-size: 20px;
  /* padding: 10px; */
  /* background:rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(40.774227142333984px); */
}

nav a:hover::after {
  /* text-shadow: 1px 1px 4px rgb(206, 206, 206); */
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background-color: rgb(142, 142, 142);
}

nav a.router-link-exact-active {
  /* font-style: italic; */
  font-weight: 600;
}

nav a.router-link-exact-active::after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: black;
}
</style>
