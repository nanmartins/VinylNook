<template>
  <div class="about">
    <h2>contact</h2>
    <RecommendationForm />
  </div>

</template>

<script setup>
import RecommendationForm from '@/components/RecommendationForm/RecommendationForm.vue'

</script>

<style scoped>
h2 {
  text-align: center;
  margin: 0 auto;
  font-size: 220px;
  letter-spacing: 10px;
  line-height: 35%;
  font-weight: 800;
  z-index: -1;
  /* padding-top: 80px; */
}

@media only screen and (max-width: 800px) {

  .about {
    padding: 0 12px;
  }

  h2 {
    font-size: 100px;
    letter-spacing: 5px;
    line-height: 15%;
    font-weight: 800;
    z-index: -1;
    /* padding-top: 80px; */
  }
}
</style>
