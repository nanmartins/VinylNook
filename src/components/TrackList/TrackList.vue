<template>
  <div>
    <ul style="list-style: none;">
      <h3>{{ side }}</h3>
      <li v-for="track in tracks" :key="track.trackNumber">
        {{ track.trackNumber }}, {{ track.title }} - {{ track.trackLength }}
      </li>
    </ul>
  </div>

</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  tracks: Array,
  side: String
})
</script>

<style>

</style>
