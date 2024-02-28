<template>
  <div v-if="loading">
    <Loading />
  </div>

  <div v-else style="width: 100%; max-width: 1400px; margin: -15px auto 20px auto">
    <VinylCard :vinyl="vinyl"/>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getVinyl } from '@/services.js'
import { useRoute } from 'vue-router'
// import TrackList from '@/components/TrackList/TrackList.vue'
import Loading from '@/components/Loading/Loading.vue'
import VinylCard from '@/components/VinylCard/VinylCard.vue'

const loading = ref(false)
const route = useRoute()
const vinyl = ref({})
// const showMoreContent = ref('description')

const separateGenres = (genresString) => {
  return genresString.split(',').map(genre => genre.trim())
}

const fetchVinyl = async () => {
  loading.value = true
  const vinylId = route.params.id
  try {
    const response = await getVinyl(vinylId)
    response.vinyl.genre = separateGenres(response.vinyl.genre.toString())
    // console.log(response.vinyl)
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

</style>
