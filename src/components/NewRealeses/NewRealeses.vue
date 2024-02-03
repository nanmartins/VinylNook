<template>

  <Loading v-if="loading" />


  <section v-else>

    <h2>releases</h2>

      <!-- :loop="true" -->
    <Swiper
      :slidesPerView="4"
      :spaceBetween="40"
      :pagination="{ clickable: true }"
      :mousewheel="true"
      :keyboard="true"
      :navigation="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }"
      :modules="[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]"
      class="vinyl-carousel-container"
    >
      <SwiperSlide v-for="(vinyl) in recentVinyls" :key="vinyl._id" class="vinyl-card">
        <router-link :to="`/album/${vinyl._id}`" style="color: black; text-decoration: none">
          <img :src="vinyl.albumCover">
          <div style="display: flex; flex-direction: column; gap: 5px; padding: 10px 0 5px 0">
            <h4 style="letter-spacing: 1px">"{{ vinyl.album }}"</h4>
            <h4 style="letter-spacing: 1.5px">{{ vinyl.artist }}</h4>
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
import 'swiper/css/pagination'
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

const recentVinyls = ref([])
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  try {
    const response = await getNewVinyls({ page: 1, sort: 'latest' })
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
  font-size: 220px;
  letter-spacing: 10px;
  line-height: 20%;
  font-weight: 800;
  margin: 0 auto;
  margin-top: 150px;
  padding-top: 80px;
}

.vinyl-carousel-container {
  display: flex;
  width: 100%;
  padding: 50px;
}

/* .swiper-button-prev,
.swiper-button-next {
  color: #000000;
} */

.vinyl-card {
  border: 1px solid black;
  border-radius: 2px;
  background: white;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
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
  max-width: 300px;
  border-radius: 2px;
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
