<template>
  <Loading v-if="loading" />

  <section v-else class="vinyl-card-container">

    <div v-for="vinyl in apiData" :key="vinyl._id" class="vinyl-card">
      <router-link :to="`/album/${vinyl._id}`" style="color: black; text-decoration: none">
        <img :src="vinyl.albumCover">
        <div class="vinyl-info-container">
          <p style="letter-spacing: 1.3px; font-weight: 500">"{{ vinyl.album }}"</p>
          <p style="letter-spacing: 1.5px; font-size: 14px; font-weight: 300">
            <span style="font-weight: 300">{{ vinyl.year }}, </span>
            {{ vinyl.artist }}</p>
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
    <div class="pagination-container">
      <button @click="changePage('prev')" :disabled="currentPage === 1" class="pagination-svg-btn">
        <svg version="1.1" width="15" height="15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35.3 58.8" enable-background="new 0 0 35.3 58.8" xml:space="preserve">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M29.4,2.7L2.8,29.2c-0.2,0.3-0.2,0.8,0,1.1l26.6,26.5
          c0.2,0.3,0.7,0.3,1,0l3.5-3.4L10.8,30.3c-0.4-0.2-0.4-0.7,0-1.1L33.9,6.1l-3.5-3.5C30.2,2.2,29.7,2.2,29.4,2.7L29.4,2.7z"></path>
        </svg>
      </button>

      <div v-for="page in totalPages" :key="page">
        <button @click="changePage(page)" :disabled="currentPage === page" class="navigation-pages-btn">{{ page }}</button>
      </div>
      <!-- <span>{{ currentPage }} / {{ totalPages }}</span> -->

      <button @click="changePage('next')" :disabled="currentPage === totalPages" style="transform: rotate(180deg)" class="pagination-svg-btn">
        <svg version="1.1" width="15" height="15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35.3 58.8" enable-background="new 0 0 35.3 58.8" xml:space="preserve">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M29.4,2.7L2.8,29.2c-0.2,0.3-0.2,0.8,0,1.1l26.6,26.5
          c0.2,0.3,0.7,0.3,1,0l3.5-3.4L10.8,30.3c-0.4-0.2-0.4-0.7,0-1.1L33.9,6.1l-3.5-3.5C30.2,2.2,29.7,2.2,29.4,2.7L29.4,2.7z"></path>
        </svg>
      </button>

    </div>

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
    const genre = router.currentRoute.value.query.genre
    const response = await getVinyls({ page: currentPage.value, genre })
    apiData.value = response.vinyls;
    totalPages.value = response.totalPages
  }
  catch (error) {
    throw error
  }
  finally {
    loading.value = false
  }
}


const changePage = async (pageOrAction) => {
  if (pageOrAction === 'prev') {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }
  else if (pageOrAction === 'next') {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
    }
  }
  else {
    const pageNumber = parseInt(pageOrAction)
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages.value) {
      currentPage.value = pageNumber
    }
  }
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
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

</script>


<style scoped>
.vinyl-card-container {
  display: grid;
  width: 100%;
  max-width: 1400px;
  place-items: center;
  gap: 40px 30px;
  padding: 20px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.vinyl-card {
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  padding: 4px;
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background: white;
  overflow: hidden;
  text-align: left;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 2px 10px rgb(233, 233, 233);
  transition: 0.5s ease-in-out;
}

.vinyl-card:hover {
  transform: scale(1.05);
  transition: transform 0.5s;
  box-shadow: 0 5px 25px rgb(199, 199, 199);
}

.vinyl-card img {
  width: 100%;
  max-width: 400px;
  border-radius: 2px;
}

.vinyl-info-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 5px;
  /* padding-top: 10px; */
  /* margin: 10px; */
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  /* text-overflow: ellipsis; */
}

.vinyl-info-container p {
  margin: 0;
  padding: 0;
  font-size: 15px;
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
  justify-content: center;
  align-items: center;
  padding: 20px 0 50px 0;
}

.pagination-container {
  display: flex;
  border-bottom: 0.3px solid rgb(184, 184, 184);
  align-items: center;
}

.pagination-container button {
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: black;
  padding: 15px 20px;
}

.navigation-pages-btn:disabled {
  border-bottom: 3px solid black;
  padding-bottom: 12px;
  cursor: default;
  font-weight: 700;
}

.pagination-svg-btn:disabled {
  display: none;
}


@media only screen and (max-width: 800px) {

  .vinyl-card-container {
    display: grid;
    width: 100%;
    max-width: 1400px;
    place-items: center;
    gap: 20px 10px;
    padding: 20px 12px;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
  }

  .vinyl-card {
    padding: 3px;
  }
}

@media only screen and (max-width: 300px) {

  .vinyl-card-container {
    /* display: grid;
    width: 100%;
    max-width: 1400px;
    place-items: center;
    gap: 20px 10px; */
    padding: 12px 12px;
    /* margin: 0 auto;
    grid-template-columns: 1fr 1fr; */
  }

  h2 {
    font-size: 40px;
    line-height: 0%;
  }
}

</style>
