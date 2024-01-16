<template>
  <h1 style="margin-top: 100px">Vinyl Page</h1>

  <div v-if="loading">
    <Loading />
  </div>

  <div v-else>
    <div style="display: flex; flex-direction: column; margin: 20px auto; width: 100%; max-width: 600px; border: 1px solid black; padding: 10px">
      <img :src="vinyl.albumCover" alt="" >
      <p>{{ vinyl.artist }}</p>
      <p>{{ vinyl.album }}</p>
      <p>{{ vinyl.year }}</p>
    </div>
  </div>
</template>


<script setup>
import { ref,onMounted } from 'vue'
import { getVinyl } from '@/services.js'
import { useRoute } from 'vue-router'
import Loading from '@/components/Loading/Loading.vue'

const route = useRoute()
const loading = ref(false)

const vinyl = ref({})

const fetchVinyl = async (id) => {
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


<style>

</style>
