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
  padding: 40px 20px;
  margin-top: 30vh;
  background: black;
}

.genres-card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  max-width: 1100px;
  padding: 70px 50px;
  margin: 0 auto;
  gap: 30px;
  border-radius: 2px;
}

.genres-card-left {
  text-align: left;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10px;
}

.genres-card-left h3 {
  font-size: 62px;
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
  padding: 40px;
  place-items: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  border-bottom: 0.3px solid white;
  border-right: 0.3px solid white;
  border-bottom-right-radius: 4px;
}

.genres-card-right-genre {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 22px;
  border: 0.5px solid white;
  color: white;
  border-radius: 2px;
  padding: 14px 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.genres-card-right-genre:hover {
  background: white;
  color: black;
}



@media only screen and (max-width: 1000px) {

  .genres-card-container {
    padding: 50px 20px;
    margin: 0 auto;
    gap: 20px;
    border-radius: 2px;
  }

    .genres-card-left {
    text-align: left;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 10px;
  }

  .genres-card-right {
    /* display: grid; */
    padding: 40px 20px;
    /* place-items: center; */
    /* align-items: center; */
    /* grid-template-columns: repeat(2, 1fr); */
    /* gap: 20px; */
    /* border-bottom: 0.3px solid white; */
    /* border-right: 0.3px solid white; */
    /* border-bottom-right-radius: 4px; */
  }
}


@media only screen and (max-width: 800px) {

  .genres-card {
    /* width: 100%; */
    padding: 25px 15px;
    /* margin-top: 30vh; */
    /* background: black; */
  }

  .genres-card-container {
    /* display: grid; */
    grid-template-columns: 1fr 0.5fr;
    /* width: 100%; */
    /* max-width: 1200px; */
    padding: 0;
    /* margin: 0 auto; */
    gap: 20px;
    /* border-radius: 2px; */
  }

  .genres-card-left {
    /* text-align: left; */
    /* color: white; */
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: space-between; */
    padding-right: 0;
  }

  .genres-card-left h3 {
    font-size: 48px;
    /* font-weight: 700;
    margin-bottom: 30px; */
  }

  .genres-card-left p {
    font-size: 18px;
  }

  .genres-card-right {
    display: flex;
    flex-direction: column;
    padding: 0;
    /* place-items: center; */
    /* align-items: center; */
    /* grid-template-rows: repeat(1fr); */
    /* border-bottom: 0.3px solid white; */
    /* border-right: 0.3px solid white; */
    border: none;
    /* border-bottom-right-radius: 4px; */
    gap: 30px 0;
  }

  .genres-card-right-genre {
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
    /* width: 100%; */
    /* height: 100%; */
    font-size: 14px;
    border: 0.5px solid white;
    color: white;
    border-radius: 2px;
    padding: 14px 8px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
}

</style>
