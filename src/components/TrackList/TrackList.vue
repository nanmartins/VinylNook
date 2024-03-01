<template>
  <div>
    <table>
      <thead>
        <tr >
          <th v-if="side === 'Side A'" colspan="3" style="text-align: center; font-size: 18px;">side A</th>
          <th v-if="side === 'Side B'" colspan="3" style="text-align: center; font-size: 18px;">side B</th>
        </tr>
        <tr >
          <th>n°</th>
          <th style="width: 100%">title</th>
          <th>length</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="track in tracks" :key="track.trackNumber" >
          <td>{{ track.trackNumber }}</td>
          <td>{{ track.title }}</td>
          <td>{{ track.trackLength }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  tracks: Array,
  side: String
})
</script>

<style scoped>

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 2px 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

</style>
