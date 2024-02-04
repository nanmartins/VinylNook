<template>
  <Loading v-if="loading" />

  <section v-else class="vinyl-card-container">

    <div v-for="vinyl in apiData" :key="vinyl._id" class="vinyl-card">
      <router-link :to="`/album/${vinyl._id}`" style="color: black; text-decoration: none">
        <img :src="vinyl.albumCover">
        <div class="vinyl-info-container">
          <h4 style="margin: 0; padding: 0; font-size: 15px; letter-spacing: 1.2px; font-weight: 500">"{{ vinyl.album }}"</h4>
          <h5 style="letter-spacing: 1.5px">{{ vinyl.artist }}</h5>
          <p style="letter-spacing: 1.5px">{{ vinyl.year }}</p>
        </div>

        <!-- <div class="vinyl-card-buttons">
          <router-link :to="`/edit-vinyl/${vinyl._id}`">
            <button>Edit</button>
          </router-link>
          <button @click="removeVinyl(vinyl._id)">Delete</button>
        </div> -->
      </router-link>
    </div>

  </section>

  <div v-if="!loading" class="pagination">
    <button @click="changePage('prev')" :disabled="currentPage === 1">
      <svg version="1.1" width="25" height="25" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35.3 58.8" enable-background="new 0 0 35.3 58.8" xml:space="preserve">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.4,2.7L2.8,29.2c-0.2,0.3-0.2,0.8,0,1.1l26.6,26.5
        c0.2,0.3,0.7,0.3,1,0l3.5-3.4L10.8,30.3c-0.4-0.2-0.4-0.7,0-1.1L33.9,6.1l-3.5-3.5C30.2,2.2,29.7,2.2,29.4,2.7L29.4,2.7z"></path>
      </svg>
    </button>

    <span>{{ currentPage }} / {{ totalPages }}</span>

    <button @click="changePage('next')" :disabled="currentPage === totalPages" style="transform: rotate(180deg)">
      <svg version="1.1" width="25" height="25" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35.3 58.8" enable-background="new 0 0 35.3 58.8" xml:space="preserve">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.4,2.7L2.8,29.2c-0.2,0.3-0.2,0.8,0,1.1l26.6,26.5
        c0.2,0.3,0.7,0.3,1,0l3.5-3.4L10.8,30.3c-0.4-0.2-0.4-0.7,0-1.1L33.9,6.1l-3.5-3.5C30.2,2.2,29.7,2.2,29.4,2.7L29.4,2.7z"></path>
      </svg>
    </button>

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
    // const response = await getVinyls({ page: router.currentRoute.value.query.page || 1 }) //getting page number
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

  // await router.replace({ query: { page: currentPage.value } }) //changing route for pages number
  window.scrollTo({ top: 95, behavior: 'smooth' })

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
  max-width: 1300px;
  place-items: center;
  gap: 30px 20px;
  padding: 20px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.vinyl-card {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  border: 1px solid black;
  border-radius: 2px;
  padding: 10px;
  margin: 0 auto;
  /* position: relative; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background: white;
  overflow: hidden;
  text-align: left;
  width: 100%;
  max-width: 420px;
}

.vinyl-card:hover {
  transform: scale(1.05);
  transition: transform 0.5s;
  /* animation: grayscaleAnimation 0.5s ease-in-out; */
}

.vinyl-card img {
  width: 100%;
  max-width: 400px;
  border-radius: 2px;
  /* filter: grayscale(100%);
  transition: filter 0.5s ease-in-out; */
}

.vinyl-info-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  /* padding: 10px; */
  /* margin: 10px; */
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  /* margin: 20px; */
  padding: 20px 0 50px 0;
}

.pagination button {
  background: transparent;
  border: none;
  display: flex;
  cursor: pointer;
}

.pagination button:disabled {
  cursor: default;
}

.pagination button svg {
  fill: black;
}

.pagination button:disabled svg {
  fill: rgb(151, 151, 151);
}

/*

@keyframes grayscaleAnimation {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 0;
  }
} */

</style>
