<template>
 <div>
  <h3 class="text-center text-white">COURSES OFFERED</h3>
  <div class="text-center col text-white mb-5">
   <div v-once v-for="(course, i) in courses" :key="i" class="mt-4">
    <p class="font-2x">{{course.name}}</p>
    <p class="font-2x">{{course.tel_num}}</p>
   </div>
  </div>
 </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
   computed: {
    ...mapState('info', ['courses'])
   }
}
</script>