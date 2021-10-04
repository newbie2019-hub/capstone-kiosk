<template>
 <div>
  <h3 class="text-center text-white mt-3">LNU MISSION</h3>
  <div v-once class="text-white text-center font-hymn p-5 mb-5" >
     <p class="p-5">
      {{missionvision[0].lnu_mission}}
     </p>
   </div>
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