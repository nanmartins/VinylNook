<template>

  <h2>/ALBUMS</h2>

  <Vinyls />

</template>


<script setup>
import { ref } from 'vue'
import Vinyls from '@/components/Vinyls/Vinyls.vue'
</script>


<style scoped>
h2 {
  font-family: 'Oswald', sans-serif;
  text-align: left;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  font-size: 90px;
  letter-spacing: 1px;
  line-height: 80%;
  font-style: italic;
  font-weight: 500;
  padding: 20px;
  padding-top: 80px;
}
</style>
