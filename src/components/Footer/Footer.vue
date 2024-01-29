<template>
  <footer>
    <img src="@/assets/logo.png" height="26px" alt="" style="background-color: white; padding-right: 3px; border-radius: 2px">
    <p style="font-size: 18px; font-weight: 100; font-style: italic">&copy; {{ new Date().getFullYear() }}</p>
  </footer>
</template>

<script setup>

</script>

<style scoped>
footer {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  height: 100px;
  background-color: black;
  color: white;
}

</style>
