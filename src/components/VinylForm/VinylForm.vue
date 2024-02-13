<template>
  <div v-if="createdMessage" class="success-message">
    <p>{{ createdMessage }}</p>
  </div>

  <div class="new-album-form">
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
        <label for="studio">Studio: </label>
        <input type="text" v-model="newVinyl.studio" required>
      </div>

      <div>
        <label for="albumLength">Album Length: </label>
        <input type="text" v-model="newVinyl.albumLength" required>
      </div>

      <div>
        <label for="genre">Genre: </label>
        <input type="text" v-model="newVinyl.genre" required>
      </div>

      <div>
        <label for="label">Label: </label>
        <input type="text" v-model="newVinyl.label" required>
      </div>

      <div>
        <label for="producer">Producer: </label>
        <input type="text" v-model="newVinyl.producer" required>
      </div>

      <div>
        <label for="albumDescription">Description: </label>
        <textarea v-model="newVinyl.albumDescription" cols="40" rows="10" required></textarea>
      </div>

      <h2>Tracks</h2>
      <hr>
      <!-- TEST -->

      <h2>Disc 1 Tracks</h2>
      {{tempTracksDisc1}}
<hr>
<!-- Campos para adicionar faixas do disco 1 -->
<div>
  <label for="trackTitleDisc1">Track Title: </label>
  <input type="text" v-model="tempTracksDisc1.title" id="trackTitleDisc1" required>
</div>
<div>
  <label for="trackLengthDisc1">Track Length: </label>
  <input type="text" v-model="tempTracksDisc1.trackLength" id="trackLengthDisc1" required>
</div>
<div>
  <label for="trackSideDisc1">Track Side: </label>
  <select v-model="tempTracksDisc1.side" id="trackSideDisc1">
    <option value="sideA">Side A</option>
    <option value="sideB">Side B</option>
  </select>
</div>
<span @click="addTrackDisc1" style="cursor: pointer; padding: 5px; border: 1px solid black; width: 30px; display: inline-block; text-align: center; margin: 10px auto">+</span>

<!-- Checkbox para indicar se há um disco 2 -->
<div>
  <input type="checkbox" v-model="hasDisc2" id="hasDisc2">
  <label for="hasDisc2">Has Disc 2?</label>
</div>

<!-- Seção do disco 2 (exibida se hasDisc2 for verdadeiro) -->
<div v-if="hasDisc2">
  <h2>Disc 2 Tracks</h2>
  {{tempTracksDisc2}}
  <hr>
  <!-- Campos para adicionar faixas do disco 2 -->
  <div>
    <label for="trackTitleDisc2">Track Title: </label>
    <input type="text" v-model="tempTracksDisc2.title" id="trackTitleDisc2" required>
  </div>
  <div>
    <label for="trackLengthDisc2">Track Length: </label>
    <input type="text" v-model="tempTracksDisc2.trackLength" id="trackLengthDisc2" required>
  </div>
  <div>
    <label for="trackSideDisc2">Track Side: </label>
    <select v-model="tempTracksDisc2.side" id="trackSideDisc2">
      <option value="sideA">Side A</option>
      <option value="sideB">Side B</option>
    </select>
  </div>
  <span @click="addTrackDisc2" style="cursor: pointer; padding: 5px; border: 1px solid black; width: 30px; display: inline-block; text-align: center; margin: 10px auto">+</span>
</div>



      <hr>

      <!-- Disc 01
      <div v-if="tempTracksDisc1.length > 0">
        <h6>disc 01</h6>
        <ul v-for="(track, index) in tempTracksDisc1" :key="index">
          <li style="display: flex; justify-content: space-between; align-items: center; width: 100%">
            {{track.trackNumber}}, {{ track.title }} - {{ track.trackLength }} ({{ track.side }})
            <span @click="removeTrackDisc1(index)" style="margin-left: 20px; padding: 0 8px; border: 1px solid black; cursor: pointer">-</span>
          </li>
        </ul>
      </div>

      <div v-if="tempTracksDisc2.length > 0">
        <h6>disc 02</h6>
        <ul v-for="(track, index) in tempTracksDisc2" :key="index">
          <li style="display: flex; justify-content: space-between; align-items: center; width: 100%">
            {{track.trackNumber}}, {{ track.title }} - {{ track.trackLength }} ({{ track.side }})
            <span @click="removeTrackDisc2(index)" style="margin-left: 20px; padding: 0 8px; border: 1px solid black; cursor: pointer">-</span>
          </li>
        </ul>
      </div>


      Disc 01
      <div>
        <label for="trackTitle">Track Title: </label>
        <input type="text" v-model="tempTracksDisc1.title" id="trackTitle" required>
      </div>

      <div>
        <label for="trackLength">Track Length: </label>
        <input type="text" v-model="tempTracksDisc1.trackLength" id="trackLength" required>
      </div>

      <div>
        <label for="trackSide">Track Side: </label>
        <select v-model="tempTracksDisc1.side" id="trackSide" >
          <option value="sideA">Side A</option>
          <option value="sideB">Side B</option>
        </select>
      </div>

      <span @click="addTrackDisc1" style="cursor: pointer; padding: 5px; border: 1px solid black; width: 30px; display: inline-block; text-align: center; margin: 10px auto">+</span>

      Disc 02

      <div>
        <label for="tempTracksDisc2">Disc 02?</label>
        <input type="checkbox" v-model="hasDisc2" id="tempTracksDisc2" style="height: 10px, width: 10px">
      </div>

      <div v-if="hasDisc2">
        <label for="trackTitle2">Track Title: </label>
        <input type="text" v-model="tempTracksDisc2.title" id="trackTitle2">
      </div>

      <div v-if="hasDisc2">
        <label for="trackLength2">Track Length: </label>
        <input type="text" v-model="tempTracksDisc2.trackLength" id="trackLength2" >
      </div>

      <div v-if="hasDisc2">
        <label for="trackSide2">Track Side: </label>
        <select v-model="tempTracksDisc2.side" id="trackSide2" >
          <option value="sideA">Side A</option>
          <option value="sideB">Side B</option>
        </select>
      </div>

      <span @click="addTrackDisc2" v-if="hasDisc2" style="cursor: pointer; padding: 5px; border: 1px solid black; width: 30px; display: inline-block; text-align: center; margin: 10px auto">+</span> -->



      <button type="submit">Add Vinyl</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { createVinyl } from '@/services.js'

const newVinyl = ref({
  artist: '',
  album: '',
  year: '',
  albumCover: '',
  studio: '',
  albumLength: '',
  genre: [],
  label: '',
  producer: '',
  tracks: {
    disc1: {
      sideA: [],
      sideB: []
    },
    disc2: {
      sideA: [],
      sideB: []
    }
  },
  albumDescription: ''
})


const createdMessage = ref('')
const tempTracksDisc1 = ref([])
const tempTracksDisc2 = ref([])
const hasDisc2 = ref(false)


const handleSubmit = async () => {
  newVinyl.value.tracks.disc1.sideA = tempTracksDisc1.value.filter(track => track.side === 'sideA')
  newVinyl.value.tracks.disc1.sideB = tempTracksDisc1.value.filter(track => track.side === 'sideB')

  newVinyl.value.tracks.disc2.sideA = tempTracksDisc2.value.filter(track => track.side === 'sideA')
  newVinyl.value.tracks.disc2.sideB = tempTracksDisc2.value.filter(track => track.side === 'sideB')
  try {
    await createVinyl(newVinyl.value)
    // Reset form after successful submission
    resetForm()
    createdMessage.value = 'Vinyl created successfully!'
    setTimeout(() => {
      createdMessage.value = ''
    }, 3000)
  } catch (error) {
    console.error('Error creating vinyl:', error)
  }
}


// const addTrackDisc1 = () => {
//   const trackTitle = document.getElementById('trackTitle').value
//   const trackLength = document.getElementById('trackLength').value
//   const trackSide = document.getElementById('trackSide').value
//   tempTracksDisc1.value.push({ trackNumber: tempTracksDisc1.value.length + 1, title: trackTitle, trackLength: trackLength, side: trackSide })
// }

// const addTrackDisc2 = () => {
//   const trackTitle2 = document.getElementById('trackTitle2').value
//   const trackLength2 = document.getElementById('trackLength2').value
//   const trackSide2 = document.getElementById('trackSide2').value
//   tempTracksDisc2.value.push({ trackNumber: tempTracksDisc2.value.length + 1, title: trackTitle2, trackLength: trackLength2, side: trackSide2 })
// }


// const removeTrackDisc1 = (index) => {
//   tempTracksDisc1.value.splice(index, 1)
// }

// const removeTrackDisc2 = (index) => {
//   tempTracksDisc2.value.splice(index, 1)
// }

const addTrackDisc1 = () => {
  const trackTitle = tempTracksDisc1.value.title
  const trackLength = tempTracksDisc1.value.trackLength
  const trackSide = tempTracksDisc1.value.side
  const trackNumber = tempTracksDisc1.value.length + 1
  tempTracksDisc1.value.push({ trackNumber, title: trackTitle, trackLength, side: trackSide })
}

const addTrackDisc2 = () => {
  const trackTitle = tempTracksDisc2.value.title
  const trackLength = tempTracksDisc2.value.trackLength
  const trackSide = tempTracksDisc2.value.side
  const trackNumber = tempTracksDisc2.value.length + 1
  tempTracksDisc2.value.push({ trackNumber, title: trackTitle, trackLength, side: trackSide })
}

const removeTrackDisc1 = (index) => {
  tempTracksDisc1.value.splice(index, 1)
}

const removeTrackDisc2 = (index) => {
  tempTracksDisc2.value.splice(index, 1)
}

const resetForm = () => {
  newVinyl.value = {
    artist: '',
    album: '',
    year: '',
    albumCover: '',
    studio: '',
    albumLength: '',
    genre: [],
    label: '',
    producer: '',
    tracks: {
      disc1: {
        sideA: [],
        sideB: []
      },
      disc2: {
        sideA: [],
        sideB: []
      }
    },
    albumDescription: ''
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
  padding-top: 200px;
  margin-top: 75px;
  /* display: grid; */
  /* grid-template-columns: 440px 1fr; */
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
  border-radius: 2px;
}

</style>
