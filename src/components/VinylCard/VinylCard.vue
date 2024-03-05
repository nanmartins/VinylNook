<template>
  <div class="vinyl-card">
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
  </div>

  <hr style="margin: 20px">

  <div style="display: flex; justify-content: center; margin: 0 20px">
    <nav class="vinyl-card-nav">
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
  </nav>
</div>

<div>
  <p v-if="showMoreContent === 'description'" style="padding: 20px 25px; font-size: 18px; letter-spacing: 1.3px;">{{ vinyl.albumDescription }}</p>
</div>

<!-- Faixas -->
      <div v-if="showMoreContent === 'disc1'" style="padding: 0 20px;">
        <div v-for="(disc, index) in vinyl.tracks" :key="index">
          <div v-if="index === 'disc1'">
            <h2 style="text-align: center; padding-top: 10px;">{{ disc.sideA.length > 0 && index === 'disc1' ? 'Disc 01' : '' }}</h2>

            <TrackList :tracks="disc.sideA" v-if="disc.sideA.length > 0" :side="disc.sideA.length > 0 ? 'Side A' : 'Side B' " />
            <TrackList :tracks="disc.sideB" v-if="disc.sideB.length > 0" :side="disc.sideB.length > 0 ? 'Side B' : 'Side A' "/>
          </div>
        </div>
      </div>

      <div v-if="showMoreContent === 'disc2'" style="padding: 0 20px;">
        <div v-for="(disc, index) in vinyl.tracks" :key="index">
          <div v-if="index === 'disc2'">
            <h2 style="text-align: center; padding-top: 10px;">{{ disc.sideA.length > 0 && index === 'disc2' ? 'Disc 02' : '' }}</h2>

            <TrackList :tracks="disc.sideA" v-if="disc.sideA.length > 0" :side="disc.sideA.length > 0 ? 'Side A' : 'Side B' " />
            <TrackList :tracks="disc.sideB" v-if="disc.sideB.length > 0" :side="disc.sideB.length > 0 ? 'Side B' : 'Side A' "/>
          </div>
        </div>
      </div>



    <!-- <div class="vinyl-card-img" :style="{ 'background-image': 'url(' + vinyl.albumCover + ')' }">
    </div> -->

    <!-- <div class="vinyl-card-content"> -->

      <!-- <div class="vinyl-card-field">
        <p>Studio:</p><p>{{ vinyl.studio}}</p>
      </div>

      <div class="vinyl-card-field">
        <p>Length:</p><p>{{ vinyl.albumLength }}</p>
      </div>

      <div class="vinyl-card-field">
        <p>Label:</p>
        <p>{{ vinyl.label }}</p>
      </div>

      <div class="vinyl-card-field">
        <p>Producer:</p>
        <p>{{ vinyl.producer }}</p>
      </div>

      <div class="vinyl-card-field">
        <p>Genre:</p>
        <p class="genre-tag-container">
          <span v-for="genre in vinyl.genre" :key="genre" @click="redirectToAlbumsByGenre(genre)" class="genre-tag">{{ genre }}</span>
        </p>
      </div>

      <nav class="vinyl-card-nav">
        <button @click="showMoreContent = 'description'" :class="{ active: showMoreContent === 'description' }">about</button>
        <button @click="showMoreContent = 'disc1'" :class="{ active: showMoreContent === 'disc1' }">disc 01</button>
        <div v-for="(disc, index) in vinyl.tracks" :key="index">
          <button
            v-if="disc.sideA.length > 0 && index === 'disc2'"
            @click="showMoreContent = 'disc2'"
            :class="{ active: showMoreContent === 'disc2' }"

            disc 02
          </button>
        </div>
      </nav> -->

      <!-- <p v-if="showMoreContent === 'description'" style="padding-top: 0;">{{ vinyl.albumDescription }}</p> -->

      <!-- Faixas -->
      <!-- <div v-if="showMoreContent === 'disc1'">
        <div v-for="(disc, index) in vinyl.tracks" :key="index">
          <div v-if="index === 'disc1'"> -->
            <!-- <h2 style="text-align: center;">{{ disc.sideA.length > 0 && index === 'disc1' ? 'Disc 01' : '' }}</h2> -->

            <!-- <TrackList :tracks="disc.sideA" v-if="disc.sideA.length > 0" :side="disc.sideA.length > 0 ? 'Side A' : 'Side B' " />
            <TrackList :tracks="disc.sideB" v-if="disc.sideB.length > 0" :side="disc.sideB.length > 0 ? 'Side B' : 'Side A' "/>
          </div>
        </div>
      </div> -->

      <!-- <div v-if="showMoreContent === 'disc2'">
        <div v-for="(disc, index) in vinyl.tracks" :key="index">
          <div v-if="index === 'disc2'"> -->
            <!-- <h2 style="text-align: center;">{{ disc.sideB.length > 0 && index === 'disc2' ? 'Disc 02' : '' }}</h2> -->

            <!-- <TrackList :tracks="disc.sideA" v-if="disc.sideA.length > 0" :side="disc.sideA.length > 0 ? 'Side A' : 'Side B' " />
            <TrackList :tracks="disc.sideB" v-if="disc.sideB.length > 0" :side="disc.sideB.length > 0 ? 'Side B' : 'Side A' "/>
          </div>
        </div>
      </div> -->

    <!-- </div> -->
  <!-- </div> -->
</template>


<script setup>
import { ref, defineProps, onMounted } from 'vue'
// import Calendar from '@/assets/SVG/Calendar.vue'
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
.vinyl-card {
  margin: 0 20px;
  font-family: 'Barlow Condensed', sans-serif;
  /* box-shadow: 5px 5px 25px rgb(199, 199, 199); */
}

.vinyl-card-top {
  display: flex;
  text-align: left;
}

.vinyl-card-img {
  display: flex;
}

.vinyl-card-img img{
  width: 100%;
  max-width: 350px;
  height: 100%;
  max-height: 350px;
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
  font-style: italic;
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

/* .vinyl-card-top-studio p {
  font-size: 18px;
  letter-spacing: 1.3px;
  font-weight: 600;
} */
/* .vinyl-card-top-studio > div {
  flex: 1;
} */

/* .vinyl-card-top-producer p {
  font-size: 18px;
  letter-spacing: 1.3px;
  font-weight: 600;
}
 */















/* .vinyl-card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 8px 0;
  padding: 20px 25px;
  border: 0.3px solid black;
  height: 100%;
}

.vinyl-card-content * {
  text-align: left;
  font-family: 'Barlow Condensed', sans-serif;
}

.vinyl-card-content h1 {
  font-size: 46px;
  letter-spacing: 1px;
  font-weight: 800;
}

.vinyl-card-content p {
  font-size: 18px;
}

.vinyl-card-field {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 10px;
}

.vinyl-card-field p:first-child {
  flex-grow: 0;
  flex-basis: 65px;
}

.vinyl-card-field p:nth-child(2) {
  flex: 1;
}

.genre-tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px 8px;
} */

.vinyl-card-nav {
  display: flex;
  align-items: center;
  border-left: 1px solid black;
  border-radius: 2px;
}

.vinyl-card-nav button {
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 600;
  border: none;
  background-color: white;
  color: black;
  cursor: pointer;
  padding: 5px 15px;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
}

.vinyl-card-nav button:last-child {
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
}

.vinyl-card-nav button:hover {
  background-color: rgb(240, 240, 240);
}

.vinyl-card-nav button.active {
  background-color: black;
  color: white;
}

/* .vinyl-card-img {
  flex-grow: 1;
  align-self: baseline;
  justify-self: baseline;
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 500px;
  aspect-ratio: 4 / 4;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 2px;

} */



@media only screen and (max-width: 1200px) {
  .vinyl-card-top-content {
    /* padding: 0 25px; */
    padding-left: 25px;
    padding-right: 25px;
    /* flex: 1 */
  }
}



@media only screen and (max-width: 800px) {

  .vinyl-card {
    /* grid-template-columns: 1fr; */
    margin: 0 12px;
  }

  .vinyl-card-top {
    display: grid;
    grid-template-columns: 1fr;
    /* gap: 25px; */
    text-align: left;
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
  }

  .vinyl-card-top-content h1 {
    font-size: 34px;
    letter-spacing: 1.5px;
    font-weight: 800;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-style: italic;
  }

  .genre-tag {
    font-size: 13px !important;
  }


  /* .vinyl-card-img {
    align-self: normal;
    border-top-right-radius: 2px;
    border-bottom-left-radius: 0;
  } */

  /* .vinyl-card-content {
    padding: 20px;
    border-top: 0.3px solid rgb(146, 146, 146);
    border-left: 0.3px solid black;
  }

  .vinyl-card-content h1 {
    font-size: 30px;
  }

  .genre-tag {
    font-size: 13px !important;
  } */

}

</style>
