<template>
 <div>
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
 font-size: 3.5rem;
}
</style>