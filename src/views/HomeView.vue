<template>
  <div class="home">

    <div class="home-main-banner">
      <div  class="home-banner-text">
        <!-- <h2>Uncover the Rhythm, Explore the Groove - <span>Vinyl Nook</span>, Where Music Finds Its Home.</h2> -->
        <!-- <h2>Explore Vinyl Brilliance - Where Music Finds Its Home.</h2> -->
        <span class="home-banner-detail">Uncover the Rhythm, Explore the Groove...</span>

        <h2>Where Music Finds Its Home</h2>
      </div>

      <div class="home-banner-img">
        <img src="@/assets/main-banner.jpg" alt="">
      </div>
    </div>


    <!-- <InfoCards /> -->

    <!-- <GenresCard /> -->


    <h2 class="recents-title">RECENTS</h2>
    <Loading v-if="loading" />
    <NewRealeses v-else />

  </div>


</template>

<script setup>
import { ref, onMounted } from 'vue'
import Loading from '@/components/Loading/Loading.vue'
import NewRealeses from '@/components/NewRealeses/NewRealeses.vue'
import GenresCard from '@/components/GenresCard/GenresCard.vue'
// import InfoCards from '@/components/InfoCards/InfoCards.vue'

const loading = ref(false)

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

</script>


<style scoped>

.home {
  margin-top: -30px;
}

.home-main-banner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  widows: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 40px;
  gap: 40px;
}

.home-banner-text {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-end;
}

.home-banner-detail {
  display: flex;
  align-items: center;
  width: 100%;
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
  font-size: 120px;
  text-align: left;
}

.recents-title {
  text-align: center;
  font-size: 220px;
  letter-spacing: 10px;
  line-height: 5%;
  font-weight: 900;
  margin: 0 auto;
  margin-top: 35vh;
  /* padding-top: 100px; */
  font-style: italic;
}

img {
  width: 100%;
  height: 100%;
  max-width: 800px;
  aspect-ratio: 4 / 4;
  border-radius: 2px;
}


@media only screen and (max-width: 1200px) {

  .home-banner-detail {
    font-size: 22px;
  }

  .home-banner-text h2 {
    font-size: 68px;
  }
}

@media only screen and (max-width: 800px) {

  .home-main-banner {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0;
    gap: 20px;
    width: 100vw;
    padding-top: 26px;
  }

  .home-banner-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
    position: absolute;
    padding: 0px;
    top: 128px;
    height: 60%;
    left: 0;
  }

  .home-banner-text h2 {
    font-size: 70px;
    text-shadow: 2px 3px 10px black;
    color: rgb(239, 239, 239);
    padding: 0 10px;
  }

  .home-banner-detail {
    width: 100vw;
    font-size: 24px;
    border-radius: none;
    padding: 10px 5px;
  }

  img {
    width: 100%;
    max-width: 800px;
    aspect-ratio: 3 / 4;
    border-radius: 0px;
  }


  .recents-title {
    font-size: 90px;
    letter-spacing: 5px;
    line-height: 0%;
    padding-top: 40px;
    margin-top: 25vh;
  }
}


@media only screen and (max-width: 400px) {

  .recents-title {
    font-size: 70px;
    line-height: 0%;
    margin-top: 15vh;
  }
}

@media only screen and (max-width: 300px) {

  .recents-title {
    font-size: 40px;
    line-height: 0%;
  }
}
</style>
