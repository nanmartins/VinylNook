<template>
  <div v-if="loading">
    <Loading />
  </div>

  <div v-else style="width: 100%; max-width: 1400px; margin: -15px auto 20px auto">

    <div class="vinyl-card">
      <div class="vinyl-card-img">
        <img :src="vinyl.albumCover" alt="" >
      </div>

      <div class="vinyl-card-description">
        <h1>"{{ vinyl.album }}"</h1>
        <h2>{{ vinyl.year }}, {{vinyl.artist}}</h2>
        <p>Studio: {{ vinyl.studio}}</p>
        <p>Length: {{ vinyl.albumLength }}</p>
        <ul style="list-style-type: none">
          <li v-for="genre in vinyl.genre" :key="genre">Genre: {{ genre }}</li>
        </ul>
        <p>Label: {{ vinyl.label }}</p>
        <p>Producer: {{ vinyl.producer }}</p>
        <p>{{ vinyl.albumDescription }}</p>

        <!-- Faixas -->
        <div v-for="(disc, index) in vinyl.tracks" :key="index">
          <h3>{{ disc.sideA.length > 0 && index === 'disc1' ? 'Disc 1' : ''  }}</h3>
          <h3>{{ disc.sideB.length > 0 && index === 'disc2' ? 'Disc 2' : '' }}</h3>

          <!-- {{ disc.sideA }} -->
          <div v-for="(side, index) in disc" :key="index">
            <h4>{{ side.length > 0 && index === 'sideA' ? 'Side A' : '' }}</h4>

            <ul style="list-style-type: none">
              <template v-for="track in side" :key="track">
                <li v-if="track.side === 'sideA'" :key="track.trackNumber">
                  {{ track.trackNumber }}, {{ track.title }} - {{ track.trackLength }}
                </li>
              </template>
            </ul>

            <!-- {{ disc.sideB }} -->
            <h4>{{ side.length > 0 && index === 'sideB' ? 'Side B' : '' }}</h4>

            <ul style="list-style-type: none">
              <template v-for="track in side" :key="track">
                <li v-if="track.side === 'sideB'" :key="track.trackNumber">
                  {{ track.trackNumber }}, {{ track.title }} - {{ track.trackLength }}
                </li>
              </template>
            </ul>

          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getVinyl } from '@/services.js'
import { useRoute } from 'vue-router'
import Loading from '@/components/Loading/Loading.vue'

const route = useRoute()
const loading = ref(false)
const vinyl = ref({})

const fetchVinyl = async () => {
  loading.value = true
  const vinylId = route.params.id
  try {
    const response = await getVinyl(vinylId)
    vinyl.value = response.vinyl
  } catch (error) {
    throw error
  }
  finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchVinyl()
  console.log(vinyl)
})
</script>


<style scoped>

.vinyl-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 0 20px;
  gap: 20px;
  border: 0.5px solid black;
  border-radius: 2px;
  font-family: 'Barlow Condensed', sans-serif;
}

.vinyl-card-description {
  padding: 0 10px 10px 10px;
}

.vinyl-card-description * {
  text-align: left;
  font-family: 'Barlow Condensed', sans-serif;
}


.vinyl-card-description p {
  font-size: 16px;
  line-height: 130%;
  letter-spacing: 1px;
  font-weight: 600;
}

.vinyl-card-img {
  align-self: baseline;
  justify-self: baseline;
}

.vinyl-card-img img {
  width: 100%;
  max-width: 650px;
  height: 100%;
}

@media only screen and (max-width: 800px) {

  .vinyl-card {
    grid-template-columns: 1fr;
    margin: 0 10px;
  }
/*
  .vinyl-card-description * {
    text-align: left;
    font-family: 'Barlow Condensed', sans-serif;
  } */

}

</style>
