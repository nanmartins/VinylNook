<template>

  <Loading v-if="loading" />


  <section v-else>

    <h2>releases</h2>

    <Swiper
      :slidesPerView="4"
      :spaceBetween="30"
      :keyboard="{ enabled: true }"
      :pagination="{ clickable: true }"
      :navigation="true"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }"
      :modules="[Navigation, Autoplay]"
      class="vinyl-carousel-container"
    >
      <SwiperSlide v-for="(vinyl) in recentVinyls" :key="vinyl._id" class="vinyl-card">
        <router-link :to="`/album/${vinyl._id}`" style="color: black; text-decoration: none">
          <img :src="vinyl.albumCover" style="border-radius: 2px">
          <div style="display: flex; flex-direction: column; gap: 5px; padding: 10px 0 5px 0">
            <h3>"{{ vinyl.album }}"</h3>
            <h5 style="letter-spacing: 1.5px">{{ vinyl.artist }}</h5>
            <p style="letter-spacing: 1.5px">{{ vinyl.year }}</p>
          </div>
        </router-link>
      </SwiperSlide>
    </Swiper>

  </section>

</template>


<script setup>
import { ref, onMounted } from 'vue'
import { getNewVinyls } from '@/services.js'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper/modules'

const recentVinyls = ref([])
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  try {
    const response = await getNewVinyls({ page: 1, sort: 'latest', limit: 9 })
    recentVinyls.value = response.vinyls
  } catch (error) {
    throw error
  }
  finally {
    loading.value = false
  }
})

</script>


<style scoped>

h2 {
  text-align: center;
  /* width: 100%;
  max-width: 1400px; */
  font-size: 220px;
  letter-spacing: 10px;
  line-height: 30%;
  font-weight: 800;
  z-index: -1;
  margin: 0 auto;
  margin-top: 150px;
  padding-top: 80px;
}

.vinyl-carousel-container {
  display: flex;
  width: 100%;
  padding: 30px;
}

.swiper-button-prev,
.swiper-button-next {
  color: #000000;
}

.vinyl-card {
  border: 1px solid black;
  border-radius: 2px;
  background: white;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  filter: grayscale(100%);
  transition: filter 0.5s ease-in-out;
}

.vinyl-card:hover {
  transform: scale(1.05);
  transition: 0.3s ease-in-out;
  animation: grayscaleAnimation 0.5s ease-in-out;
  filter: grayscale(0%);

}

.vinyl-card img {
  width: 100%;
  max-width: 500px;
}



@keyframes grayscaleAnimation {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 0;
  }
}
</style>
