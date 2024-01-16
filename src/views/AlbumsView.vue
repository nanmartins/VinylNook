<template>
  <h1>Albums Page</h1>

  <h3>Add new album:</h3>

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

      <button type="submit">Add Vinyl</button>
    </form>
  </div>

  <h3>Albums:</h3>

  <Vinyls />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { createVinyl } from '../services.js'
import Vinyls from '@/components/Vinyls/Vinyls.vue'

const loading = ref(false)
const apiData = ref([])
const newVinyl = ref({
  album: '',
  artist: '',
  year: '',
  albumCover: ''
})

const handleSubmit = async () => {
  loading.value = true

  try {
    const vinyl = await createVinyl(newVinyl.value)
    apiData.value.push(vinyl)
    window.alert('Vinyl created successfully!')
  }
  catch (error) {
    throw error
  }
  finally {
    newVinyl.value = { artist: '', album: '', year: '', albumCover: '' }
    location.reload()
    loading.value = false
  }
}
</script>
