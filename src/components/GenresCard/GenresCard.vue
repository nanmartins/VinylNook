<template>
  <section class="genres-card">

    <div class="genres-card-container">

      <div class="genres-card-left">

        <h3>Explore Genres</h3>

        <p>Dive into the world of vinyl records by discovering music across various genres. From classic rock to pop to hip-hop, there's something for everyone.</p>
      </div>

      <div class="genres-card-right">

        <div v-for="genre in genres" :key="genre._id" class="genres-card-right-genre">
          <p @click="redirectToAlbumsByGenre(genre.name)">{{ genre.name }}</p>
        </div>
      </div>

    </div>
  </section>

</template>


<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getGenresTop } from '@/services.js'

const genres = ref([])
const router = useRouter()

const redirectToAlbumsByGenre = (genre) => {
  router.push({ name: 'albums', query: { genre } })
}


onMounted(async () => {
  const response = await getGenresTop()
  genres.value = response.genres
})
</script>


<style scoped>

.genres-card {
  width: 100%;
  padding: 20px;
  margin-top: 30vh;
}

.genres-card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  max-width: 1200px;
  padding: 70px 50px;
  margin: 0 auto;
  gap: 30px;
  border: 0.5px solid black;
  border-radius: 2px;
  background: linear-gradient(to right, white 0%, white 50%, black 50%, black 100%);
}

.genres-card-left {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10px;
}

.genres-card-left h3 {
  font-size: 62px;
  /* letter-spacing: 1.5px; */
  font-weight: 700;
  margin-bottom: 30px;
}

.genres-card-left p {
  font-size: 22px;
  letter-spacing: 1.5px;
  font-weight: 300;
}

.genres-card-right {
  display: grid;
  padding: 0 20px;
  padding-right: 0;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px
}

.genres-card-right-genre {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  border: 0.5px solid white;
  background-color: white;
  border-radius: 2px;
  padding: 14px 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.genres-card-right-genre:hover {
  background: black;
  color: white;
}

</style>
