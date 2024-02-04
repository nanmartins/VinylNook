<template>
  <div class="home">

    <div class="home-main-banner">
      <div  class="home-banner-text">
        <!-- <h2>Uncover the Rhythm, Explore the Groove - <span>Vinyl Nook</span>, Where Music Finds Its Home.</h2> -->
        <!-- <h2>Explore Vinyl Brilliance - Where Music Finds Its Home.</h2> -->
        <span class="home-banner-detail">Uncover the Rhythm, Explore the Groove...</span>

        <h2>Where Music Finds Its Home.</h2>
      </div>

      <div>
        <img src="@/assets/main-banner.jpg" alt="">
      </div>
    </div>


    <h2 class="recents-title">releases</h2>
    <Loading v-if="loading" />
    <NewRealeses v-else />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import Loading from '@/components/Loading/Loading.vue'
import Vinyls from '@/components/Vinyls/Vinyls.vue'
import NewRealeses from '@/components/NewRealeses/NewRealeses.vue'

const loading = ref(false)
</script>

<style scoped>

.home-main-banner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 40px;
  gap: 40px;
}

.home-banner-text {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: end;
}

.home-banner-detail {
  display: flex;
  align-items: center;
  /* position: relative; */
  /* left: -40px; */
  width: 100%;
  /* min-height: 40px; */
  background: linear-gradient(to right, black -10%, rgb(173, 173, 173) 50%, white 100%);
  color: white;
  font-size: 28px;
  font-weight: 200;
  text-shadow: 1px 1px black;
  border-radius: 2px;
  padding: 5px;
  font-style: italic;
}

h2 {
  /* font-family: 'Oswald', sans-serif; */
  font-size: 120px;
  text-align: left;
}

.recents-title {
  text-align: center;
  font-size: 220px;
  letter-spacing: 10px;
  line-height: 15%;
  font-weight: 800;
  margin: 0 auto;
  margin-top: 150px;
  padding-top: 80px;
}

img {
  width: 100%;
  max-width: 800px;
  aspect-ratio: 4 / 4;
  border-radius: 2px;
}
</style>
