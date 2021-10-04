<template>
 <div>
  <h3 class="text-center text-white mt-3">UNIVERSITY HYMN</h3>
  <p class="text-center text-white">Music: Dr. Virginio V. Fuentes</p>
  <p class="text-center mb-4 text-white">Lyrics: Mrs Rosario P. Isiderio</p>
  <div v-once class="text-white text-center font-hymn mt-5 mb-5" v-html="missionvision[0].lnu_hymn"></div>
 </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
 
 computed: {
  ...mapState('info', ['missionvision'])
 }
}
</script>
<style>
.font-hymn {
 font-size: 3rem;
}
</style>