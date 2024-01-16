<template>
  <section class="vinyl-card-container">
    <div v-for="vinyl in apiData" :key="vinyl._id" class="vinyl-card">
      <img :src="vinyl.albumCover" alt="" width="400px">
      <p>{{ vinyl.album }}</p>
      <p>{{ vinyl.artist }}</p>
      <p>{{ vinyl.year }}</p>

      <router-link :to="`/edit-vinyl/${vinyl._id}`">
        <button>Editar</button>
      </router-link>
      <button @click="removeVinyl(vinyl._id)">Delete</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getVinyls, updateVinyl, deleteVinyl } from '@/services.js'
import Loading from '@/components/Loading/Loading.vue'

const apiData = ref([])
const loading = ref(false)


const fetchVinyls = async () => {
  loading.value = true
  try {
    apiData.value = await getVinyls()
  }
  catch (error) {
    throw error
  }
  finally {
    setTimeout(() => {

      loading.value = false
    }, 1000);
  }
}

const removeVinyl = async (vinylId) => {
  try {
    await deleteVinyl(vinylId)
    apiData.value = apiData.value.filter((vinyl) => vinyl.id !== vinylId)
    window.alert('Vinyl deleted successfully!')
  } catch (error) {
    console.error(error)
  }
  finally {
    fetchVinyls()
  }
};

onMounted(() => {
  fetchVinyls()
})

</script>

<style scoped>

.vinyl-card-container {
  display: grid;
  gap: 20px;
  width: 100%;
  max-width: 1400px;
  padding: 20px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
}

.vinyl-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  /* width: 100%; */
  /* max-width: 600px; */
  padding: 10px;
  margin: 0 auto;
}

</style>
