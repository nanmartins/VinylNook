<template>

  <h2>albums</h2>

  <Vinyls />

</template>


<script setup>
import { ref } from 'vue'
import Vinyls from '@/components/Vinyls/Vinyls.vue'
</script>


<style scoped>
h2 {
  /* font-family: 'Oswald', sans-serif; */
  text-align: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  font-size: 200px;
  letter-spacing: 10px;
  line-height: 45%;
  /* font-style: italic; */
  font-weight: 800;
  z-index: -1;
  /* padding: 20px; */
  padding-top: 80px;
}
</style>
