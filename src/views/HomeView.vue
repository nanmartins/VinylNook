<template>
  <div class="home">

    <img
      src="@/assets/home-banner.jpg"
      alt=""
      style="
        background-size: cover;
        width: 100vw;
        opacity: 0.95;
        "
      >

    <div v-if="loading">
      <Loading />
    </div>

    <div v-else>
      <Vinyls />
    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue'
import Loading from '@/components/Loading/Loading.vue'
import Vinyls from '@/components/Vinyls/Vinyls.vue'

const loading = ref(false)
</script>
