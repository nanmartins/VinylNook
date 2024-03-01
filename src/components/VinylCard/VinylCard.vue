<template>
  <div class="vinyl-card">
    <div class="vinyl-card-img" :style="{ 'background-image': 'url(' + vinyl.albumCover + ')' }"></div>

    <div class="vinyl-card-content">
      <h1>"{{ vinyl.album }}"</h1>
      <h2>{{vinyl.artist}}</h2>

      <div class="vinyl-card-field">
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
          >
            disc 02
          </button>
        </div>
      </nav>

      <p v-if="showMoreContent === 'description'" style="padding-top: 0;">{{ vinyl.albumDescription }}</p>

      <!-- Faixas -->
      <div v-if="showMoreContent === 'disc1'">
        <div v-for="(disc, index) in vinyl.tracks" :key="index">
          <div v-if="index === 'disc1'">
            <!-- <h2 style="text-align: center;">{{ disc.sideA.length > 0 && index === 'disc1' ? 'Disc 01' : '' }}</h2> -->

            <TrackList :tracks="disc.sideA" v-if="disc.sideA.length > 0" :side="disc.sideA.length > 0 ? 'Side A' : 'Side B' " />
            <TrackList :tracks="disc.sideB" v-if="disc.sideB.length > 0" :side="disc.sideB.length > 0 ? 'Side B' : 'Side A' "/>
          </div>
        </div>
      </div>

      <div v-if="showMoreContent === 'disc2'">
        <div v-for="(disc, index) in vinyl.tracks" :key="index">
          <div v-if="index === 'disc2'">
            <!-- <h2 style="text-align: center;">{{ disc.sideB.length > 0 && index === 'disc2' ? 'Disc 02' : '' }}</h2> -->

            <TrackList :tracks="disc.sideA" v-if="disc.sideA.length > 0" :side="disc.sideA.length > 0 ? 'Side A' : 'Side B' " />
            <TrackList :tracks="disc.sideB" v-if="disc.sideB.length > 0" :side="disc.sideB.length > 0 ? 'Side B' : 'Side A' "/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script setup>
import { ref, defineProps } from 'vue'
import TrackList from '@/components/TrackList/TrackList.vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  vinyl: Object
})
const router = useRouter()
const showMoreContent = ref('description')

const redirectToAlbumsByGenre = (genre) => {
  router.push({ name: 'albums', query: { genre } })
}
</script>


<style scoped>
.vinyl-card {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  margin: 0 20px;
  border-radius: 2px;
  font-family: 'Barlow Condensed', sans-serif;
}

.vinyl-card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  font-size: 16px;
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
}

.genre-tag {
  display: inline-flex;
  white-space: nowrap;
  border: 0.2px solid black;
  padding: 4px;
  padding-top: 2px;
  border-radius: 2px;
  background: #f2f2f2;
  cursor: pointer;
  font-size: 14px !important;
}

.genre-tag:hover {
  background: #d6d6d6;
}

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

.vinyl-card-img {
  align-self: baseline;
  justify-self: baseline;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  max-height: 1000px;
  aspect-ratio: 4 / 4;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* border-radius: 2px; */
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;

}

@media only screen and (max-width: 800px) {

  .vinyl-card {
    grid-template-columns: 1fr;
    margin: 0 10px;
  }

  .vinyl-card-img {
    align-self: normal;
    border-top-right-radius: 2px;
    border-bottom-left-radius: 0;
  }

  .vinyl-card-content {
    padding: 20px;
    border-top: 0.3px solid rgb(146, 146, 146);
    border-left: 0.3px solid black;
  }

  .vinyl-card-content h1 {
    font-size: 30px;
  }

  .genre-tag {
    font-size: 13px !important;
  }

}

</style>
