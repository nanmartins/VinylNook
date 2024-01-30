<template>
  <div class="home">

    <div style="display: grid; grid-template-columns: 1fr 1fr; margin-top: 100px; padding: 40px">

      <div>
        <h2>Uncover the Rhythm, Explore the Groove - Vinyl Nook, Where Music Finds Its Home.</h2>
      </div>

      <div>
        <img src="@/assets/home-banner.jpg" alt="" style="aspect-ratio: 4/4; widht: 100%; max-width: 700px">
      </div>

    </div>

    <!-- <img
      src="@/assets/home-banner.jpg"
      alt=""
      style="
        background-size: cover;
        width: 100%;
        opacity: 0.95;
        overflow: hidden;
      "
    > -->

    <div v-if="loading">
      <Loading />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import Loading from '@/components/Loading/Loading.vue'
import Vinyls from '@/components/Vinyls/Vinyls.vue'

const loading = ref(false)
</script>
