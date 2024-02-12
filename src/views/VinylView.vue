<template>
  <!-- Seção de carregamento -->
  <div v-if="loading">
    <Loading />
  </div>

  <!-- Seção principal -->
  <div v-else style="width: 100%; max-width: 1400px; margin: 0 auto">
    <!-- Detalhes do vinil -->
    <h1 style="margin-top: 100px;">{{ vinyl.artist }}, "{{ vinyl.album }}"</h1>
    <h2>{{ vinyl.year }}</h2>

    <div class="vinyl-card">
      <div class="vinyl-card-img">
        <img :src="vinyl.albumCover" alt="" >
      </div>

      <div class="vinyl-card-description">
        <h1>{{vinyl.artist}}, "{{ vinyl.album }}"</h1>
        <h2>{{ vinyl.year }}</h2>
        <p>Studio: {{ vinyl.studio}}</p>
        <p>Length: {{ vinyl.albumLength }}</p>
        <ul>
          <li v-for="genre in vinyl.genre" :key="genre">Genre: {{ genre }}</li>
        </ul>
        <p>Label: {{ vinyl.label }}</p>
        <p>Producer: {{ vinyl.producer }}</p>
        <p>{{ vinyl.albumDescription }}</p>

        <!-- Faixas -->
        <div v-for="(disc, discIndex) in vinyl.tracks" :key="discIndex">
          <!-- <h5>Disc {{ discIndex === 'disc1' ? '01' : '02' }}</h5> -->
          <h4 v-if="discIndex === 'disc1'">Disc 01</h4>
          <h4 v-if="discIndex === 'disc2'">Disc 02</h4>


          <ul style="list-style-type: none">
            <template v-for="track in disc" :key="track">

              <div v-if="track.side === 'sideA'">
                <li v-if="track.side === 'sideA'" :key="track.trackNumber">
                  {{ track.trackNumber }}, {{ track.title }} - {{ track.trackLength }}
                </li>
              </div>

              <div v-else>
                <li v-if="track.side === 'sideB'" :key="track.trackNumber">
                  {{ track.trackNumber }}, {{ track.title }} - {{ track.trackLength }}
                </li>
              </div>

            </template>
          </ul>
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
})
</script>


<style scoped>

.vinyl-card {
  display: grid;
  grid-template-columns: 650px 1fr;
  align-items: center;
  padding: 10px;
  margin: 20px;
  gap: 20px;
  border: 1px solid black;
  border-radius: 2px;
}

.vinyl-card-description p {
  font-size: 16px;
  line-height: 130%;
  font-weight: 600;
  color: rgb(87, 87, 87);
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.vinyl-card-img img {
  width: 100%;
  max-width: 650px;
  height: 100%;
}

</style>
