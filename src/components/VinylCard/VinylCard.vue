<template>
  <!-- <div class="vinyl-card"> -->
    <div class="vinyl-card-top">
      <div class="vinyl-card-img">
        <img :src="vinyl.albumCover" alt="">
      </div>

      <div class="vinyl-card-top-content">
        <h1>{{ vinyl.album }}</h1>

        <div class="vinyl-card-top-info">
          <div style="display: flex; flex-direction: column; justify-content: space-between;">
            <span>Artist</span>
            <h2>{{ vinyl.artist }}</h2>
          </div>

          <div style="display: flex; flex-direction: column; justify-content: space-between;">
            <span>Year</span>
            <h3>{{ vinyl.year }}</h3>
          </div>
        </div>


        <div class="vinyl-card-top-genre-field">
          <span>Genre</span>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <p v-for="genre in vinyl.genre" :key="genre" @click="redirectToAlbumsByGenre(genre)" class="genre-tag">{{ genre }}</p>
          </div>
        </div>


        <div class="vinyl-card-top-studio">
          <div style="display: flex; flex-direction: column; justify-content: space-between;">
            <span>Studio</span>
            <p>{{ vinyl.studio }}</p>
          </div>

          <div style="display: flex; flex-direction: column;">
            <span>Label</span>
            <p>{{ vinyl.label }}</p>
          </div>
        </div>


        <div class="vinyl-card-top-studio">
          <div style="display: flex; flex-direction: column; justify-content: space-between;">
            <span>Producer</span>
            <p>{{ vinyl.producer }}</p>
          </div>

          <div style="display: flex; flex-direction: column;">
            <span>Length</span>
            <p>{{ vinyl.albumLength }}</p>
          </div>
        </div>

      </div>

    </div>
  <!-- </div> -->


  <!-- BOTTOM SECTION -->
  <div class="vinyl-card-bottom-container">
    <nav class="vinyl-card-nav">
      <div class="vinyl-card-nav-buttons">
        <button @click="showMoreContent = 'description'" :class="{ active: showMoreContent === 'description' }">About</button>
        <button @click="showMoreContent = 'disc1'" :class="{ active: showMoreContent === 'disc1' }">Disc 01</button>
        <div v-for="(disc, index) in vinyl.tracks" :key="index">
          <button
            v-if="disc.sideA.length > 0 && index === 'disc2'"
            @click="showMoreContent = 'disc2'"
            :class="{ active: showMoreContent === 'disc2' }"
            >
            Disc 02
          </button>
        </div>
      </div>
    </nav>


    <div class="vinyl-card-bottom">

      <div>
        <p v-if="showMoreContent === 'description'">{{ vinyl.albumDescription }}</p>
      </div>

      <!-- Faixas -->
      <div v-if="showMoreContent === 'disc1'" class="vinyl-card-bottom-tracks">
        <div v-for="(disc, index) in vinyl.tracks" :key="index">
          <div v-if="index === 'disc1'">
            <!-- <h2 style="text-align: center; padding-top: 10px;">{{ disc.sideA.length > 0 && index === 'disc1' ? 'Disc 01' : '' }}</h2> -->
            <TrackList :tracks="disc.sideA" v-if="disc.sideA.length > 0" :side="disc.sideA.length > 0 ? 'Side A' : 'Side B' " />
            <TrackList :tracks="disc.sideB" v-if="disc.sideB.length > 0" :side="disc.sideB.length > 0 ? 'Side B' : 'Side A' "/>
          </div>
        </div>
      </div>

      <div v-if="showMoreContent === 'disc2'" class="vinyl-card-bottom-tracks">
        <div v-for="(disc, index) in vinyl.tracks" :key="index">
          <div v-if="index === 'disc2'">
            <!-- <h2 style="text-align: center; padding-top: 10px;">{{ disc.sideA.length > 0 && index === 'disc2' ? 'Disc 02' : '' }}</h2> -->
            <TrackList :tracks="disc.sideA" v-if="disc.sideA.length > 0" :side="disc.sideA.length > 0 ? 'Side A' : 'Side B' " />
            <TrackList :tracks="disc.sideB" v-if="disc.sideB.length > 0" :side="disc.sideB.length > 0 ? 'Side B' : 'Side A' "/>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>


<script setup>
import { ref, defineProps, onMounted } from 'vue'
import TrackList from '@/components/TrackList/TrackList.vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  vinyl: Object
})
const router = useRouter()
const showMoreContent = ref('description')
const tracks = ref('disc1')

const redirectToAlbumsByGenre = (genre) => {
  router.push({ name: 'albums', query: { genre } })
}

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

</script>


<style scoped>

.vinyl-card-top {
  display: flex;
  text-align: left;
  transition: 0.3s ease-in-out;
}

.vinyl-card-img {
  display: flex;
  transition: 0.3s ease-in-out;
}

.vinyl-card-img img{
  width: 100%;
  max-width: 420px;
  height: 100%;
  max-height: 420px;
  border-radius: 2px;
  aspect-ratio: 4 / 4;
}

.vinyl-card-top-content {
  /* padding: 0 25px; */
  padding-left: 25px;
  padding-right: 60px;
  flex: 1
}

p {
  font-size: 16px;
  letter-spacing: 1.3px;
  font-weight: 600;
}

.vinyl-card-top-info {
  display: flex;
  gap: 30px;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
}

/* .vinyl-card-top-info > div {
  flex: 1;
} */

.vinyl-card-top-content span {
  font-size: 18px;
  letter-spacing: 1.3px;
  font-weight: 300;
  /* font-style: italic; */
}

.vinyl-card-top-content span::after {
  content: '';
  display: block;
  width: 20px;
  height: 1px;
  background: #000000;
  margin-top: 0px;
  margin-bottom: 5px;
}

.vinyl-card-top-content h1 {
  font-size: 42px;
  letter-spacing: 1.5px;
  font-weight: 800;
  margin-bottom: 20px;
  text-transform: uppercase;
  /* font-style: italic; */
}

.vinyl-card-top-content h2 {
  font-size: 24px;
  letter-spacing: 1.5px;
  font-weight: 600;
}

.vinyl-card-top-content h3 {
  font-size: 20px;
  letter-spacing: 1.5px;
  font-weight: 600;
}

.vinyl-card-top-genre-field {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
}

.genre-tag {
  display: flex;
  align-items: center;
  white-space: nowrap;
  border: 0.2px solid #2f2f2f;
  padding: 4px 6px;
  border-radius: 2px;
  /* background: #f2f2f2; */
  cursor: pointer;
  font-size: 16px !important;
  transition: 0.3s ease-in-out;
}

.genre-tag:hover {
  background: black;
  color: white;
}

.vinyl-card-top-studio {
  display: flex;
  justify-content: space-between;
  gap: 0 30px;
  margin-bottom: 20px;
}

.vinyl-card-top-studio div:last-child {
  align-items: baseline;
  flex-shrink: 0;
}

.vinyl-card-bottom-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.vinyl-card-nav {
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: flex-start;
  width: 100%;
  margin-top: 20px;
}

.vinyl-card-nav-buttons {
  display: flex;
  border: 0.5px solid black;
  border-bottom: none;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

.vinyl-card-nav button {
  font-size: 18px;
  letter-spacing: 3px;
  font-weight: 800;
  background-color: transparent;
  color: #7d7d7d;
  cursor: pointer;
  padding: 10px 15px;
  border: none;
}

.vinyl-card-nav button:first-child {
  border-right: 0.5px solid black;
}

.vinyl-card-nav button:last-child {
  border-left: 0.5px solid black;
  border-right: none;
}

.vinyl-card-nav button:hover {
  color: black;
}

.vinyl-card-nav button.active {
  background-color: black;
  color: white;
}


.vinyl-card-bottom {
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  border: 0.5px solid black;
  border-radius: 2px;
  border-top-left-radius: 0px;
  width: 100%;
}

.vinyl-card-bottom p {
  font-size: 18px;
  letter-spacing: 1.5px;
  line-height: 1.7;
  text-align: justify;
  padding: 60px 40px;
  max-width: 900px;
  width: 100%;
  font-weight: 500;
}

.vinyl-card-bottom-tracks {
  padding: 20px;
  width: 100%;
  max-width: 800px;
}



@media only screen and (max-width: 1200px) {
  .vinyl-card-top-content {
    padding-left: 25px;
    padding-right: 25px;
  }
}


@media only screen and (max-width: 800px) {

  .vinyl-card-top {
    display: grid;
    grid-template-columns: 1fr;
    text-align: left;
    transition: 0.3s ease-in-out;
  }

  .vinyl-card-top-content {
    padding: 10px;
  }

  .vinyl-card-img {
    display: flex;
    justify-content: center;
  }

  .vinyl-card-img img {
    max-width: 800px;
    max-height: 800px;
    transition: 0.3s ease-in-out;
  }

  .vinyl-card-top-content h1 {
    font-size: 32px;
    letter-spacing: 1.5px;
    font-weight: 800;
    margin-bottom: 20px;
    /* text-transform: uppercase; */
    /* font-style: italic; */
  }

  .vinyl-card-top-content h2 {
    font-size: 22px;
  }

  .vinyl-card-top-content h3 {
    font-size: 18px;
  }

  .genre-tag {
    font-size: 13px !important;
  }

  .vinyl-card-description {
    margin: 15px 20px;
  }

  .vinyl-card-nav-buttons {
    display: flex;
    border: 0.5px solid black;
    border-bottom: none;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }

  .vinyl-card-nav button {
    font-size: 16px;
    letter-spacing: 3px;
    padding: 5px 12px;
  }

  .vinyl-card-bottom p {
    padding: 25px 20px;
    padding-bottom: 30px;
    font-size: 15px;
  }

  .vinyl-card-bottom-tracks {
    padding: 20px 10px;
  }

}

</style>
