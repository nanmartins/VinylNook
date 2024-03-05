<template>
  <footer>
    <div class="footer-content">
      <img src="@/assets/logo.png" height="32px" alt="" style="background-color: white; padding-right: 3px; border-radius: 2px">
      <p style="font-size: 18px; font-weight: 100; font-style: italic">&copy;  {{ new Date().getFullYear() }}, copyright</p>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>
footer {
  display: flex;
  width: 100%;
  /* max-width: 2000px; */
  align-items: center;
  /* gap: 20px; */
  padding: 0 40px;
  /* justify-content: space-between; */
  height: 100px;
  background-color: black;
  color: white;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
}

</style>
