<template>
  <div>
    <table>
      <thead>
        <tr >
          <th v-if="side === 'Side A'" class="disc-side" colspan="3">Side A</th>
          <th v-if="side === 'Side B'" class="disc-side" colspan="3">Side B</th>
        </tr>
        <!-- <tr >
          <th>n°</th>
          <th style="width: 100%">title</th>
          <th>length</th>
        </tr> -->
      </thead>
      <tbody style="margin-bottom: 100px">
        <tr v-for="track in tracks" :key="track.trackNumber" >
          <td>{{ track.trackNumber + '.'}}</td>
          <td style="width: 100%; letter-spacing: 1px;">{{ track.title }}</td>
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
  padding: 10px;
  text-align: left;
  /* border-bottom: 1px solid #ddd; */
}

/*
th {
  background-color: #f2f2f2;
} */

.disc-side {
  font-size: 22px;
  letter-spacing: 1.5px;
  padding-top: 20px;
}


</style>
