<template>
  <div class="home">

    <img
      src="https://images.unsplash.com/photo-1502773860571-211a597d6e4b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      style="
        background-size: cover;
        width: 100vw;
        "
      >

    <div v-if="loading">
      <Loading />
    </div>

    <div v-else>
      <Vinyls />
    </div>
    <!-- <div v-else v-for="vinyl in apiData" :key="vinyl._id">
      <div>
        <img :src="vinyl.albumCover" alt="" width="400px">
        <p>{{ vinyl.album }}</p>
        <p>{{ vinyl.artist }}</p>
        <p>{{ vinyl.year }}</p>
        <p>{{ vinyl._id }}</p>

        <router-link :to="`/edit-vinyl/${vinyl._id}`">
          <button>Editar</button>
        </router-link>
        <button @click="removeVinyl(vinyl._id)">Delete</button>
      </div>
    </div> -->

  </div>
</template>

<script setup>
import { ref } from 'vue'
// import { getVinyls, updateVinyl, deleteVinyl } from '../services.js'
import Loading from '@/components/Loading/Loading.vue'
import Vinyls from '@/components/Vinyls/Vinyls.vue'
const loading = ref(false)

// const apiData = ref([])


// const fetchVinyls = async () => {
//   loading.value = true
//   try {
//     apiData.value = await getVinyls()
//   }
//   catch (error) {
//     throw error
//   }
//   finally {
//     setTimeout(() => {

//       loading.value = false
//     }, 1000);
//   }
// }

// const removeVinyl = async (vinylId) => {
//   try {
//     await deleteVinyl(vinylId)
//     apiData.value = apiData.value.filter((vinyl) => vinyl.id !== vinylId)
//     window.alert('Vinyl deleted successfully!')
//   } catch (error) {
//     console.error(error)
//   }
//   finally {
//     fetchVinyls()
//   }
// };

// onMounted(() => {
//   fetchVinyls()
// })


  // const editVinyl = async (vinyl) => {
  //   try {
  //     const updateVinyl = {}
  //     await updateVinyl(vinyl._id, updateVinyl)
  //     window.alert('Vinyl updated successfully!')
  //     fetchVinyls()
  //   }
  //   catch (error) {
  //     throw error
  //   }
  // }
</script>
