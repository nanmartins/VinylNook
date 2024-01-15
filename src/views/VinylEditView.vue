<template>
  <div>
    <h1>Vinyl Edit</h1>
    <form @submit.prevent="handleSubmit">
      <label>Artista: <input v-model="editedVinyl.artist" /></label>
      <label>Álbum: <input v-model="editedVinyl.album" /></label>
      <label>Ano: <input v-model="editedVinyl.year" /></label>
      <label>Capa do Álbum: <input v-model="editedVinyl.albumCover" /></label>
      <button type="submit">Salvar</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getVinyl, updateVinyl } from '../services.js'
import { useRoute } from 'vue-router'

const route = useRoute()

const editedVinyl = ref({
  artist: '',
  album: '',
  year: '',
  albumCover: '',
})

// const fetchVinylDetails = async (id) => {
//   const vinylId = route.params.id
//   // console.log(vinylId)
//   try {
//     const response = await getVinyl(vinylId)
//     console.log(response.data.vinyl)
//     editedVinyl.value = response.data.vinyl
//   } catch (error) {
//     console.error('Erro ao buscar detalhes do vinil:', error)
//   }
// }

const fetchVinylDetails = async (id) => {
  const vinylId = route.params.id
  try {
    const response = await getVinyl(vinylId)
    // console.log(response.data.vinyl)
    editedVinyl.value = response.data.vinyl
  } catch (error) {
    console.error('Erro ao buscar detalhes do vinil:', error)
  }
}

const handleSubmit = async () => {
  try {
    await updateVinyl(route.params.id, editedVinyl.value)
    console.log('Vinyl atualizado com sucesso!')
    // Lógica adicional, como redirecionar para a página principal ou exibir uma mensagem de sucesso
  } catch (error) {
    console.error('Erro ao atualizar o vinil:', error)
    // Lógica para lidar com erros, por exemplo, exibir uma mensagem de erro
  }
};

fetchVinylDetails()
// onMounted(fetchVinylDetails)
</script>
