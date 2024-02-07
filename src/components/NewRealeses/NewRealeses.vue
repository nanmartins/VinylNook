<template>
  <Loading v-if="loading" />
  <section v-else>
    <!-- <h2>releases</h2> -->
    <Swiper
      :slidesPerView="5"
      :spaceBetween="20"
      :mousewheel="false"
      :keyboard="true"
      :navigation="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }"
      :modules="[Navigation, Autoplay, Mousewheel, Keyboard]"
      class="vinyl-carousel-container"
    >
      <SwiperSlide
        v-for="(vinyl, index) in recentVinyls"
        :key="vinyl._id"
        class="vinyl-card"
        @mouseover="setHoveredIndex(index)"
        @mouseleave="resetHoveredIndex"
      >
        <router-link :to="`/album/${vinyl._id}`" class="card-router-link">
          <img :src="vinyl.albumCover">
          <div v-if="showInfo && index === hoveredIndex" class="vinyl-info-container">
            <p style="letter-spacing: 1.5px; font-weight: 600; background: rgba(255, 255, 255, 0.8); padding: 5px">"{{ vinyl.album }}"</p>
            <p style="letter-spacing: 1.5px; background: rgba(255, 255, 255, 0.6); padding: 3px 5px">{{ vinyl.artist }}</p>
            <!-- <p style="letter-spacing: 1.5px">{{ vinyl.year }}</p> -->
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
// import 'swiper/css/pagination'
import { Navigation, Autoplay, Mousewheel, Keyboard } from 'swiper/modules'
import Loading from '@/components/Loading/Loading.vue'

const recentVinyls = ref([])
const loading = ref(false)
const showInfo = ref(false)
const hoveredIndex = ref(null)

const setHoveredIndex = (index) => {
  hoveredIndex.value = index
  showInfo.value = true
}

const resetHoveredIndex = () => {
  hoveredIndex.value = null
  showInfo.value = false
}

onMounted(async () => {
  loading.value = true
  try {
    const response = await getNewVinyls({ sort: 'latest', limit: 16 })
    console.log(response)
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

/* h2 {
  text-align: center;
  font-size: 220px;
  letter-spacing: 10px;
  line-height: 20%;
  font-weight: 800;
  margin: 0 auto;
  margin-top: 150px;
  padding-top: 80px;
} */

.vinyl-carousel-container {
  /* display: flex; */
  /* width: 100%; */
  padding: 50px;
  margin-bottom: 100px;
}

.vinyl-card {
  border: 1px solid black;
  border-radius: 2px;
  background: white;
  padding: 5px;
  box-sizing: border-box;
  text-align: center;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}

.vinyl-card:hover {
  transform: scale(1.05);
  transition: 0.3s ease-in-out;
  /* position: relative; */
}

.card-router-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
}

.vinyl-card img {
  width: 100%;
  max-width: 300px;
  border-radius: 2px;
}

.vinyl-card:hover img {
  opacity: 0.5;
}

.vinyl-info-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  gap: 5px;
  padding: 0 20px;
  position: absolute;
  top: 10%;
  left: -5px;
  transition: 1s ease-in-out;
  text-align: left;
}

.vinyl-info-container p {
  font-size: 22px;
  font-weight: 500;
  text-shadow: 1px 1px rgb(217, 217, 217);
  font-style: italic;
}

</style>
