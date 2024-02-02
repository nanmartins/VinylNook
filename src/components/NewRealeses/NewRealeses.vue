<template>
  <section>

    <h2>releases</h2>

    <div class="vinyl-card-container">
      <div v-for="(vinyl) in recentVinyls" :key="vinyl._id" class="vinyl-card">
        <router-link :to="`/album/${vinyl._id}`" style="color: black; text-decoration: none">
          <img :src="vinyl.albumCover" style="border-radius: 2px">
          <div style="display: flex; flex-direction: column; gap: 5px; padding: 10px 0 5px 0">
            <h3>"{{ vinyl.album }}"</h3>
            <h5 style="letter-spacing: 1.5px">{{ vinyl.artist }}</h5>
            <p style="letter-spacing: 1.5px">{{ vinyl.year }}</p>
          </div>

        </router-link>
      </div>

    </div>

    <div>
      <button>next</button>
      <button>prev</button>
    </div>

  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { getNewVinyls } from '@/services.js'

const recentVinyls = ref([])

onMounted(async () => {
  try {
    const response = await getNewVinyls({ page: 1, sort: 'latest', limit: 9 })
    recentVinyls.value = response.vinyls
  } catch (error) {
    throw error
  }
})

// console.log(recentVinyls)
</script>


<style scoped>

h2 {
  text-align: center;
  width: 100%;
  max-width: 1400px;
  font-size: 220px;
  letter-spacing: 10px;
  line-height: 30%;
  font-weight: 800;
  z-index: -1;
  margin: 0 auto;
  margin-top: 150px;
  padding-top: 80px;
}

.vinyl-card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;


  /* display: flex; */
  /* gap: 40px; */
  /* padding: 0px; */
  gap: 20px;
  /* width: 100%; */
  /* height: 100%; */
  /* max-height: 700px; */
  /* overflow-y: hidden; */
  margin: 30px auto;
}

.vinyl-card {
  border: 1px solid black;
  background: white;
  width: 100%;
  max-width: calc(100vw / 4 - 100px);
  /* max-width: 420px; */
  /* margin: 0 10px; */
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  transition: 0.3s ease-in-out;

}

.vinyl-card:hover {
  transform: scale(1.05);
  transition: 0.5s ease-in-out;
  animation: grayscaleAnimation 0.5s ease-in-out;
}

.vinyl-card img {
  width: 100%;
  /* max-width: 400px; */
  /* min-width: 310px; */
  filter: grayscale(100%);
  transition: filter 0.5s ease-in-out;
}

.vinyl-card img:hover {
  filter: grayscale(0%);
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
