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
  text-align: center;
  margin: 0 auto;
  font-size: 220px;
  letter-spacing: 10px;
  line-height: 40%;
  font-weight: 800;
  z-index: -1;
  padding-top: 80px;
}
</style>
