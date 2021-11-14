<template>
 <div>
  <h2 class="text-center text-white mt-5 pt-5">UNIVERSITY HYMN</h2>
  <p class="text-center text-white">Music: Dr. Virginio V. Fuentes</p>
  <p class="text-center mb-4 text-white">Lyrics: Mrs Rosario P. Isiderio</p>
  <div v-once class="text-white text-center font-hymn mt-5 pt-4  pb-3 mb-5" v-html="missionvision[0].lnu_hymn"></div>
  <return-gesture />
 </div>
</template>
<script>
import {mapState} from 'vuex'
import ReturnGesture from '../components/ReturnGesture.vue'
export default {
 components: {ReturnGesture},
 computed: {
  ...mapState('info', ['missionvision'])
 }
}
</script>
<style>
.font-hymn {
 font-size: 2.5rem;
 line-height: 3.2rem;
}
</style>