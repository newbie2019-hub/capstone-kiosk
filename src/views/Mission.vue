<template>
 <div>
  <div v-once class="text-white text-center font-hymn p-5 mb-5" >{{missionvision[0].lnu_mission}}</div>
 </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
 mounted(){
    document.getElementsByClassName('scroll')[0].style.display = 'none'
 },
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