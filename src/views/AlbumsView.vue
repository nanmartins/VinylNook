<template>

  <div v-if="createdMessage" class="success-message">
    <p>{{ createdMessage }}</p>
  </div>

  <div class="new-album-form" >


    <form @submit.prevent="handleSubmit">

    <h3>Add new album:</h3>

      <div>
        <label for="artist">Artist: </label>
        <input type="text" v-model="newVinyl.artist" required>
      </div>

      <div>
        <label for="album">Album: </label>
        <input type="text" v-model="newVinyl.album" required>
      </div>

      <div>
        <label for="year">Year: </label>
        <input type="text" v-model="newVinyl.year" required>
      </div>

      <div>
        <label for="albumCover">Album Cover URL: </label>
        <input type="text" v-model="newVinyl.albumCover" required>
      </div>

      <div>
        <label for="albumDescription">Description: </label>
        <textarea v-model="newVinyl.albumDescription" cols="40" rows="10" required></textarea>
      </div>

      <div>
        <label for="pos">Position: </label>
        <input type="text" v-model="newVinyl.pos" required>
      </div>

      <button type="submit">Add Vinyl</button>
    </form>


    <!-- <div v-if="newVinyl.album || newVinyl.artist || newVinyl.year || newVinyl.albumCover || newVinyl.albumDescription">
      <div style="padding: 10px; border: 1px solid black">
      <h3>Preview:</h3>
        <img :src="newVinyl.albumCover" alt="">
        <p>{{ newVinyl.artist }}</p>
        <p>{{ newVinyl.album }}</p>
      </div>
    </div> -->
  </div>

  <h2 style="margin-top:50px">Albums:</h2>

  <div v-if="loading">
    <Loading />
  </div>

  <div v-else>
    <Vinyls />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { createVinyl } from '../services.js'
import Vinyls from '@/components/Vinyls/Vinyls.vue'
import Loading from '@/components/Loading/Loading.vue'

const loading = ref(false)
const apiData = ref([])
const newVinyl = ref({
  album: '',
  artist: '',
  year: '',
  albumCover: '',
  albumDescription: '',
  pos: 0
})

const createdMessage = ref('')

const handleSubmit = async () => {
  loading.value = true
  try {
    const vinyl = await createVinyl(newVinyl.value)
    apiData.value.push(vinyl)
    // loading.value = false
  }
  catch (error) {
    throw error
  }
  finally {
    loading.value = false
    newVinyl.value = { artist: '', album: '', year: '', albumCover: '', albumDescription: '', pos: 0 }
    createdMessage.value = 'Vinyl created successfully!'
    setTimeout(() => {
      createdMessage.value = ''
    }, 3000)
  }
}
</script>

<style scoped>
.success-message {
  width: 500px;
  border: 2px solid rgb(1, 171, 1);
  position: fixed;
  padding: 15px 30px;
  border-radius: 2px;
  background: #424242;
  color: #ffffff;
  bottom: 10px;
  right: 15px;
  z-index: 1000;
}

.new-album-form {
  margin-top: 100px;
  display: grid;
  grid-template-columns: 440px 1fr;
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-items: top;
  gap: 15px;
  margin: 10px auto;
  padding: 15px;
  /* margin-top: 100px; */
  border: 1px solid black;
  border-radius: 2px;
  width: 100%;
  max-width: 500px;
}

form div {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}

input {
  height: 40px;
  width: 400px;
  text-align: center;
}

textarea {
  height: 200px;
  width: 400px;
}

form button {
  max-width: 400px;
  width: 100%;
  height: 45px;
  margin: 0 auto;
  background: black;
  color: #ffffff;
}

</style>
