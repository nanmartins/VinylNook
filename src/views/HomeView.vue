<template>
  <div class="home">

    <img
      src="https://images.unsplash.com/photo-1502773860571-211a597d6e4b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      style="
        background-size: cover;
        width: 100vw;
        opacity: 0.9;
        "
      >

    <div v-if="loading">
      <Loading />
    </div>

    <div v-else>
      <Vinyls />
    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue'
import Loading from '@/components/Loading/Loading.vue'
import Vinyls from '@/components/Vinyls/Vinyls.vue'

const loading = ref(false)
</script>
