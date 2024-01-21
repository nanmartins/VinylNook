<template>
  <h1 style="margin-top: 100px">Albums Page</h1>

  <h3>Add new album:</h3>

  <div v-if="createdMessage" class="success-message">
    <p>{{ createdMessage }}</p>
  </div>

  <div style="display: flex; margin: 0 auto;">
    <form @submit.prevent="handleSubmit" style="display: flex; gap: 15px; margin: 10px auto;">

      <div>
        <label for="artist">Artist:</label>
        <input type="text" v-model="newVinyl.artist" required>
      </div>

      <div>
        <label for="album">Album:</label>
        <input type="text" v-model="newVinyl.album" required>
      </div>

      <div>
        <label for="year">Year:</label>
        <input type="text" v-model="newVinyl.year" required>
      </div>

      <div>
        <label for="albumCover">Album Cover URL:</label>
        <input type="text" v-model="newVinyl.albumCover" required>
      </div>

      <div>
        <label for="albumDescription">Description:</label>
        <input type="text" v-model="newVinyl.albumDescription" required>
      </div>

      <button type="submit">Add Vinyl</button>
    </form>
  </div>

  <h3>Albums:</h3>

  <div v-if="loading">
    <Loading />
  </div>

  <div v-else>
    <Vinyls />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { createVinyl } from '../services.js'
import Vinyls from '@/components/Vinyls/Vinyls.vue'
import Loading from '@/components/Loading/Loading.vue'

const loading = ref(false)
const apiData = ref([])
const newVinyl = ref({
  album: '',
  artist: '',
  year: '',
  albumCover: '',
  albumDescription: ''
})

const createdMessage = ref('')

const handleSubmit = async () => {
  loading.value = true
  try {
    const vinyl = await createVinyl(newVinyl.value)
    apiData.value.push(vinyl)
    loading.value = false
  }
  catch (error) {
    throw error
  }
  finally {
    // location.reload()
    loading.value = false
    newVinyl.value = { artist: '', album: '', year: '', albumCover: '', albumDescription: '' }
    createdMessage.value = 'Vinyl created successfully!'
    setTimeout(() => {
      createdMessage.value = ''
    }, 3000)
  }
}
</script>

<style scoped>
.success-message {
  width: 500px;
  border: 2px solid rgb(1, 171, 1);
  position: fixed;
  padding: 15px 30px;
  border-radius: 2px;
  background: #424242;
  color: #ffffff;
  bottom: 10px;
  right: 15px;
  z-index: 1000;
}
</style>
