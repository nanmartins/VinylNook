<template>
<div class="albums">
  <h2>ALBUMS</h2>

  <Vinyls />
</div>


</template>


<script setup>
// import { ref } from 'vue'
import Vinyls from '@/components/Vinyls/Vinyls.vue'
</script>


<style scoped>

h2 {
  text-align: center;
  margin: 0 auto;
  font-size: 220px;
  letter-spacing: 10px;
  line-height: 35%;
  font-weight: 900;
  z-index: -1;
}


@media only screen and (max-width: 800px) {

  h2 {
    font-size: 100px;
    letter-spacing: 5px;
    line-height: 15%;
    font-weight: 800;
    z-index: -1;
  }
}

@media only screen and (max-width: 400px) {

  h2 {
    font-size: 70px;
    line-height: 0%;
  }
}

@media only screen and (max-width: 300px) {

  h2 {
    font-size: 40px;
    line-height: 0%;
  }
}
</style>
