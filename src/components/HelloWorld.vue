<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <button @click="count++">Count = {{ count }}</button>
  </div>
</template>


<script setup>
import { ref, defineProps } from 'vue'

const count = ref(0)

defineProps({
  msg: String
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
