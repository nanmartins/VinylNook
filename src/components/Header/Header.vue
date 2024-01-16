<template>
  <header>
    <h1>Logo</h1>
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
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  width: 100vw;
  text-shadow: 1px 1px 0 black;
  z-index: 100;
}

h1 {
  margin: 0;
  color: #f2f2f2;
  font-size: 46px;
}

nav {
  padding: 0;
  display: flex;
  gap: 20px;
}

nav a {
  font-weight: bold;
  color: #f2f2f2;
  text-decoration: none;
  font-size: 20px;
}

nav a.router-link-exact-active {
  color: black;
  text-shadow: 1px 1px 0 white;
}
</style>
