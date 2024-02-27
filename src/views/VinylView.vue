<template>
  <div v-if="loading">
    <Loading />
  </div>

  <div v-else style="width: 100%; max-width: 1400px; margin: -15px auto 20px auto">

    <div class="vinyl-card">
      <div class="vinyl-card-img" :style="{ 'background-image': 'url(' + vinyl.albumCover + ')' }">
        <!-- <img :src="vinyl.albumCover" alt="" > -->
      </div>

      <div class="vinyl-card-description">
        <h1>"{{ vinyl.album }}"</h1>
        <h3>{{ vinyl.year }}, {{vinyl.artist}}</h3>
        <p>Studio: {{ vinyl.studio}}</p>
        <p>Length: {{ vinyl.albumLength }}</p>
        <ul style="list-style-type: none">
          <p v-for="genre in vinyl.genre" :key="genre">Genre: {{ genre }}</p>
        </ul>
        <p>Label: {{ vinyl.label }}</p>
        <p>Producer: {{ vinyl.producer }}</p>

        <nav class="vinyl-card-nav">
          <button @click="showMoreContent = 'description'" :class="{ active: showMoreContent === 'description' }">about</button>
          <button @click="showMoreContent = 'disc1'" :class="{ active: showMoreContent === 'disc1' }">disc 01</button>
          <div v-for="(disc, index) in vinyl.tracks" :key="index">
            <button
              v-if="disc.sideA.length > 0 && index === 'disc2'"
              @click="showMoreContent = 'disc2'"
              :class="{ active: showMoreContent === 'disc2' }"
            >
              disc 02
            </button>
          </div>
        </nav>

        <p v-if="showMoreContent === 'description'" style="padding-top: 0;">{{ vinyl.albumDescription }}</p>

        <!-- Faixas -->
        <div v-if="showMoreContent === 'disc1'">
          <div v-for="(disc, index) in vinyl.tracks" :key="index">
            <div v-if="index === 'disc1'">
              <!-- <h2 style="text-align: center;">{{ disc.sideA.length > 0 && index === 'disc1' ? 'Disc 01' : '' }}</h2> -->

              <TrackList :tracks="disc.sideA" v-if="disc.sideA.length > 0" :side="disc.sideA.length > 0 ? 'Side A' : 'Side B' " />
              <TrackList :tracks="disc.sideB" v-if="disc.sideB.length > 0" :side="disc.sideB.length > 0 ? 'Side B' : 'Side A' "/>
            </div>
          </div>
        </div>

        <div v-if="showMoreContent === 'disc2'">
          <div v-for="(disc, index) in vinyl.tracks" :key="index">
            <div v-if="index === 'disc2'">
              <!-- <h2 style="text-align: center;">{{ disc.sideB.length > 0 && index === 'disc2' ? 'Disc 02' : '' }}</h2> -->

              <TrackList :tracks="disc.sideA" v-if="disc.sideA.length > 0" :side="disc.sideA.length > 0 ? 'Side A' : 'Side B' " />
              <TrackList :tracks="disc.sideB" v-if="disc.sideB.length > 0" :side="disc.sideB.length > 0 ? 'Side B' : 'Side A' "/>
            </div>
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
import TrackList from '@/components/TrackList/TrackList.vue'

const route = useRoute()
const loading = ref(false)
const vinyl = ref({})
const showMoreContent = ref('description')

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
})
</script>


<style scoped>

.vinyl-card {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  margin: 0 20px;
  border-radius: 2px;
  font-family: 'Barlow Condensed', sans-serif;
}

.vinyl-card-description {
  display: flex;
  flex-direction: column;
  /* gap: 5px; */
  padding: 20px 30px;
  border: 0.3px solid black;
  border-left: none;
  height: 100%;
}

.vinyl-card-description * {
  text-align: left;
  font-family: 'Barlow Condensed', sans-serif;
}

.vinyl-card-description h1 {
  font-size: 52px;
  letter-spacing: 1px;
  font-weight: 800;
}

.vinyl-card-description p {
  font-size: 16px;
  line-height: 130%;
  letter-spacing: 1px;
  font-weight: 600;
  padding-top: 5px;
}

.vinyl-card-nav {
  display: flex;
  align-items: center;
  border-left: 1px solid black;
}

.vinyl-card-nav button {
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 600;
  border: none;
  background-color: white;
  color: black;
  cursor: pointer;
  padding: 5px 15px;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
}

.vinyl-card-nav button:hover {
  background-color: rgb(240, 240, 240);
}

.vinyl-card-nav button.active {
  background-color: black;
  color: white;
}
.vinyl-card-img {
  align-self: baseline;
  justify-self: baseline;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  max-height: 1000px;
  aspect-ratio: 4 / 4;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* border-radius: 2px; */
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;

}

/* .vinyl-card-img img {
  width: 100%;
} */

@media only screen and (max-width: 800px) {

  .vinyl-card {
    grid-template-columns: 1fr;
    margin: 0 10px;
  }

  .vinyl-card-img {
    align-self: normal;
    border-top-right-radius: 2px;
    border-bottom-left-radius: 0;
  }

  .vinyl-card-description {
    padding: 20px;
    border-top: 0.3px solid rgb(146, 146, 146);
    border-left: 0.3px solid black;
  }

  .vinyl-card-description h1 {
    font-size: 30px;
    /* line-height: 130%;
    letter-spacing: 1px;
    font-weight: 800;
    margin-bottom: 10px; */
  }

}

</style>
