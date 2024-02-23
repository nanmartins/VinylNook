<template>
<div class="albums">
  <h2>albums</h2>

  <Vinyls />
</div>


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
  line-height: 35%;
  font-weight: 800;
  z-index: -1;
}


@media only screen and (max-width: 800px) {

  h2 {
    font-size: 120px;
    letter-spacing: 5px;
  }
}

@media only screen and (max-width: 400px) {

 h2 {
    font-size: 90px;
  }
}
</style>
