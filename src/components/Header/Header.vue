<template>
  <header>
    <h1>LOGO</h1>
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
  padding: 10px 20px;
  position: fixed;
  top: 0;
  width: 100vw;
  /* text-shadow: 1px 1px 0 black; */
  z-index: 100;
  /* background:rgba(255, 255, 255, 0.01); */
  /* backdrop-filter: blur(3px); */
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

h1 {
  margin: 0;
  /* color: #ffffff; */
  font-size: 46px;
}

nav {
  padding: 0;
  display: flex;
  gap: 30px;
}

nav a {
  font-weight: bold;
  color: black;
  text-decoration: none;
  font-size: 16px;
  /* padding: 10px; */
  /* background:rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(40.774227142333984px); */
}

nav a:hover {
  text-shadow: 3px 2px 3px rgb(188, 188, 188);
}

nav a.router-link-exact-active {
  /* color: white; */
  /* text-shadow: 2px 2px 2px rgb(188, 188, 188); */
  font-style: italic;
}

nav a.router-link-exact-active::after {
  content: '';
  display: block;
  width: 100%;
  height: 3px;
  background-color: black;
  margin-top: 2px;
}
</style>
