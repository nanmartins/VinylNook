<template>
  <div v-if="createdMessage" class="success-message">
    <p>{{ createdMessage }}</p>
  </div>

  <div class="recommendation-form">

    <h2>Recommend a album</h2>

    <div class="about-content-welcome">
      <p>Can't find your favorite album?</p>
      <p>Send us a recommendation and we will add it to our collection</p>
    </div>

    <form @submit.prevent="handleSubmit">

      <div>
        <label for="recommendedBy">Your Name: </label>
        <input type="text" v-model="newRecommendation.recommendedBy" required>
      </div>

      <div>
        <label for="email">Email: </label>
        <input type="email" v-model="newRecommendation.email">
      </div>

      <div>
        <label for="recommendedAlbum">Album Name: </label>
        <input type="text" v-model="newRecommendation.recommendedAlbum" required>
      </div>

      <div>
        <label for="artist">Artist: </label>
        <input type="text" v-model="newRecommendation.artist">
      </div>

      <div>
        <label for="message">Message: </label>
        <textarea v-model="newRecommendation.message" rows="10"></textarea>
      </div>

      <button>Submit</button>

    </form>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { createRecommendation  } from '@/services.js'

const newRecommendation = ref({
  recommendedBy: '',
  email: '',
  recommendedAlbum: '',
  artist: '',
  message: ''
})

const createdMessage = ref('')


const handleSubmit = async () => {
  try {
    await createRecommendation(newRecommendation.value)
  }
  catch (error) {
    throw error
  }
  finally {
    createdMessage.value = 'Thank you for your recommendation!'
    setTimeout(() => {
      createdMessage.value = ''
    }, 3000)
    newRecommendation.value = {
      recommendedBy: '',
      email: '',
      recommendedAlbum: '',
      artist: '',
      message: ''
    }
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
  z-index: 1;
}

.recommendation-form {
  display: flex;
  position: relative;
  width: 100%;
  max-width: 1000px;
  flex-direction: column;
  background: white;
  padding: 20px;
  margin: 20px auto;
  border: 0.3px solid black;
  border-radius: 2px;
  z-index: 1;
}

.about-content-welcome {
  margin: 20px auto;
  font-weight: 300;
  font-size: 20px;
}


h2 {
  font-size: 36px;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
}

label {
  display: flex;
  justify-content: left;
  padding: 10px 0 0 5px;
  font-size: 18px;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 0.5px solid black;
  border-radius: 2px;
  margin: 5px 0;
}

button {
  width: 100%;
  /* max-width: 300px; */
  padding: 15px;
  /* border: 1px solid black; */
  border-radius: 2px;
  margin: 10px auto;
  background: black;
  color: white;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
}


@media only screen and (max-width: 300px) {
  .recommendation-form {
    /* display: flex;
    position: relative;
    width: 100%;
    max-width: 1000px;
    flex-direction: column;
    background: white;
    padding: 20px; */
    margin: 12px auto;
    /* border: 0.3px solid black;
    border-radius: 2px;
    z-index: 1; */
  }
}

</style>
