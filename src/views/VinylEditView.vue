<template>
  <div style="margin-top: 100px">
    <h1>Vinyl Edit</h1>
    <form @submit.prevent="handleSubmit">
      <label>Artist: <input v-model="editedVinyl.artist" /></label>
      <label>Album: <input v-model="editedVinyl.album" /></label>
      <label>Year: <input v-model="editedVinyl.year" /></label>
      <label>Description: <input v-model="editedVinyl.albumDescription" /></label>
      <label>Album Cover: <input v-model="editedVinyl.albumCover" /></label>
      <label>Position: <input v-model="editedVinyl.pos" /></label>

      <button type="submit">Save</button>
    </form>

    <div v-if="loading">
      <Loading />
    </div>

    <div v-else>
      <div style="display: flex; flex-direction: column; margin: 20px auto; width: 100%; max-width: 600px; border: 1px solid black; padding: 10px">
        <img :src="editedVinyl.albumCover" alt="" >
        <p>{{ editedVinyl.artist }}</p>
        <p>{{ editedVinyl.album }}</p>
        <p>{{ editedVinyl.albumDescription }}</p>
        <p>{{ editedVinyl.year }}</p>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getVinyl, updateVinyl } from '../services.js'
import { useRoute, useRouter } from 'vue-router'
import Loading from '@/components/Loading/Loading.vue'

const route = useRoute()
const router = useRouter()
const loading = ref(false)

const editedVinyl = ref({
  artist: '',
  album: '',
  year: '',
  albumCover: '',
  albumDescription: '',
  pos: 0
})

const fetchVinylDetails = async (id) => {
  loading.value = true
  const vinylId = route.params.id
  try {
    const response = await getVinyl(vinylId)
    editedVinyl.value = response.vinyl
  }
  catch (error) {
    throw error
  }
  finally {
    loading.value = false
  }
}

const handleSubmit = async () => {
  try {
    await updateVinyl(route.params.id, editedVinyl.value)
    window.alert('Vinyl updated successfully!')
    router.push('/')
  } catch (error) {
    throw error
  }
}

onMounted(() => {
  fetchVinylDetails()
})
</script>
