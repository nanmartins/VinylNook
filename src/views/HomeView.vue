<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Hello World"/> -->

    <div v-if="loading">Loading...</div>

    <div v-else v-for="vinyl in apiData" :key="vinyl.id">
      <div>
        <img :src="vinyl.albumCover" alt="" width="400px">
        <p>{{ vinyl.album }}</p>
        <p>{{ vinyl.artist }}</p>
        <p>{{ vinyl.year }}</p>

        <!-- <button @click="editVinyl(vinyl)">Edit</button> -->
        <button @click="removeVinyl(vinyl._id)">Delete</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted} from 'vue'
import { getVinyls, updateVinyl, deleteVinyl } from '../services.js'
import HelloWorld from '@/components/HelloWorld.vue'

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
    loading.value = false
  }
}

const editVinyl = async (vinyl) => {
  try {
    const updateVinyl = {}
    await updateVinyl(vinyl._id, updateVinyl)
    window.alert('Vinyl updated successfully!')
    fetchVinyls()
  }
  catch (error) {
    throw error
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
