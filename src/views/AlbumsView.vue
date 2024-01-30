<template>

  <h2>/ALBUMS</h2>

  <div v-if="loading">
    <Loading />
  </div>

  <div v-else>
    <Vinyls />
  </div>

</template>


<script setup>
import { ref } from 'vue'
import Vinyls from '@/components/Vinyls/Vinyls.vue'
import Loading from '@/components/Loading/Loading.vue'
const loading = ref(false)
</script>


<style scoped>

h2 {
  font-family: 'Oswald', sans-serif;
  text-align: left;
  width: 100%;
  max-width: 1400px;
  margin: 90px auto 0 auto;
  font-size: 160px;
  letter-spacing: 1px;
  line-height: 80%;
  font-style: italic;
  font-weight: 500;
  padding: 20px;
  padding-top: 80px;
}

</style>
