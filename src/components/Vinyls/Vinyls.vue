<template>
  <Loading v-if="loading" />

  <section v-else class="vinyl-card-container">

    <div v-for="vinyl in apiData" :key="vinyl._id" class="vinyl-card">
      <router-link :to="`/vinyl/${vinyl._id}`" style="color: black; text-decoration: none">
        <img :src="vinyl.albumCover" alt="" width="400px">
        <p>{{ vinyl.album }}</p>
        <p>{{ vinyl.artist }}</p>
        <p>{{ vinyl.year }}</p>

        <div class="vinyl-card-buttons">
          <router-link :to="`/edit-vinyl/${vinyl._id}`">
            <button>Edit</button>
          </router-link>
          <button @click="removeVinyl(vinyl._id)">Delete</button>
        </div>
      </router-link>
    </div>

  </section>

  <div class="pagination">
    <button @click="changePage('prev')" :disabled="currentPage === 1">Previous</button>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <button @click="changePage('next')" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getVinyls, deleteVinyl } from '@/services.js'
import Loading from '@/components/Loading/Loading.vue'

const apiData = ref([])
const loading = ref(false)
const router = useRouter()
const currentPage = ref(1)
const totalPages = ref(1)


const fetchVinyls = async () => {
  loading.value = true
  try {
    const response = await getVinyls({ page: currentPage.value })
    apiData.value = response.vinyls
    totalPages.value = response.totalPages
  }
  catch (error) {
    throw error
  }
  finally {
    loading.value = false
  }
}

// const sortedVinyls = computed(() => {
//   const vinylsCopy = [...apiData.value]

//   console.log(vinylsCopy)
//   vinylsCopy.sort((a, b) => {
//     a.pos > b.pos ? 1 : -1
//   })
//   console.log(vinylsCopy)
//   return vinylsCopy
// })


const changePage = async (action) => {
  if (action === 'prev' && currentPage.value > 1) {
    currentPage.value -= 1
  }
  else if (action === 'next' && currentPage.value < totalPages.value) {
    currentPage.value += 1
  }
  await fetchVinyls()
}


const removeVinyl = async (vinylId) => {
  try {
    const userConfirmed = window.confirm('Are you sure you want to delete this vinyl?')
    if (userConfirmed) {
      loading.value = true
      await deleteVinyl(vinylId)
      router.push('/albums')
    }
    else {
      window.alert('Deletion cancelled by user.')
    }
  }
  catch (error) {
    throw error
  }
  finally {
    loading.value = false
  }
}


onMounted(() => {
  fetchVinyls()
})

</script>


<style scoped>
.vinyl-card-container {
  display: grid;
  width: 100%;
  max-width: 1400px;
  place-items: center;
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
}

.vinyl-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 2px;
  padding: 10px;
  margin: 0 auto;
  position: relative;
}

.vinyl-card-buttons {
  position: absolute;
  top: 10px;
  right: 10px;
}

.pagination {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

</style>
