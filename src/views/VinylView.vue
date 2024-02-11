<template>

  <div v-if="loading">
    <Loading />
  </div>

  <div v-else style="width: 100%; max-width: 1400px; margin: 0 auto">
    <h1 style="margin-top: 100px;">{{vinyl.artist}}, "{{ vinyl.album }}"</h1>
    <h2>{{ vinyl.year }}</h2>

    <div class="vinyl-card">
      <div class="vinyl-card-img">
        <img :src="vinyl.albumCover" alt="" >
      </div>

      <div class="vinyl-card-description">
        <p>{{ vinyl.albumDescription }}</p>
      </div>

    </div>
  </div>
</template>


<script setup>
import { ref,onMounted } from 'vue'
import { getVinyl } from '@/services.js'
import { useRoute } from 'vue-router'
import Loading from '@/components/Loading/Loading.vue'

const route = useRoute()
const loading = ref(false)

const vinyl = ref({})

const fetchVinyl = async (id) => {
  loading.value = true
  const vinylId = route.params.id
  try {
    const response = await getVinyl(vinylId)
    vinyl.value = response.vinyl
  } catch (error) {
    throw error
  }
  finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchVinyl()
})
</script>


<style scoped>

.vinyl-card {
  display: grid;
  grid-template-columns: 650px 1fr;
  align-items: center;
  padding: 10px;
  margin: 20px;
  gap: 20px;
  border: 1px solid black;
  border-radius: 2px;
}

.vinyl-card-description p {
  font-size: 16px;
  line-height: 130%;
  font-weight: 600;
  color: rgb(87, 87, 87);
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.vinyl-card-img img {
  width: 100%;
  max-width: 650px;
  height: 100%;
}

</style>
