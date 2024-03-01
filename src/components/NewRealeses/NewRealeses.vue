<template>
  <Loading v-if="loading" />
  <section v-else>
    <!-- <h2>releases</h2> -->
    <Swiper
      :slidesPerView="2"
      :spaceBetween="5"
      :mousewheel="false"
      :centeredSlidesBounds="true"
      :keyboard="true"
      :navigation="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }"
      :modules="[Navigation, Autoplay, Mousewheel, Keyboard]"
      class="vinyl-carousel-container"
      :breakpoints="{
      '600': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // '800': {
      //   slidesPerView: 3,
      //   spaceBetween: 20,
      // },
      '1000': {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      '1600': {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      '2000': {
        slidesPerView: 6,
        spaceBetween: 20,
      }
    }"
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
            <p>"{{ vinyl.album }}"</p>
            <p>{{ vinyl.artist }}</p>
            <p>{{ timeDiff(vinyl.createdAt) }}</p>
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


const timeDiff = (date) => {
  const createdTime = new Date(date)
  const timeNow = new Date()

  const diff = Math.abs(timeNow - createdTime)
  const minutes = diff / 1000 / 60

  if (minutes < 60) {
    const min = Math.floor(minutes)
    if (minutes === 1) {
      return min + " minute ago."
    } else {
      return min + " minutes ago."
    }
  }

  if (minutes < 1440) {
    const hours = Math.floor(minutes / 60)
    if (hours === 1) {
      return hours + " hour ago."
    } else {
      return hours + " hours ago."
    }
  }

  const days = Math.floor(minutes / 1440)
  if (days === 1) {
    return days + " day ago."
  } else {
    return days + " days ago."
  }
}


onMounted(async () => {
  loading.value = true
  try {
    const response = await getNewVinyls({ sort: 'latest', limit: 16 })
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

.vinyl-carousel-container {
  padding: 50px;
  margin-bottom: 100px;
}

.vinyl-card {
  /* border: 1px solid black; */
  border-radius: 2px;
  background: white;
  padding: 5px;
  box-sizing: border-box;
  text-align: center;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  box-shadow: 0 2px 10px rgb(233, 233, 233);
  transition: 0.5s;
}

.vinyl-card:hover {
  transform: scale(1.05);
  transition: 0.5s ease-in-out;
  box-shadow: 0 5px 25px rgb(199, 199, 199);
}

.card-router-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
}

.vinyl-card img {
  width: 100%;
  border-radius: 2px;
}

.vinyl-card:hover img {
  opacity: 0.7;
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
  font-weight: 600;
  text-shadow: 1px 1px rgb(217, 217, 217);
  font-style: italic;
  letter-spacing: 1.5px;
  background: rgba(255, 255, 255, 0.6);
  padding: 3px 5px;
}

.vinyl-info-container p:first-child {
  font-weight: 800;
  background: rgba(255, 255, 255, 0.8);
  padding: 5px
}

.vinyl-info-container p:last-child {
  font-size: 15px;
  text-align: right;
}


@media only screen and (max-width: 800px) {

  .vinyl-carousel-container {
    padding: 30px;
    margin-bottom: 100px;
  }
}

</style>
