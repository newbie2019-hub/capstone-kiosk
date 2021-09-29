<template>
 <div>
  <h3 class="text-center text-white">COURSES OFFERED</h3>
  <div class="text-center col text-white mb-5">
   <div v-once v-for="(college, i) in colleges" :key="i" class="mt-5">
    <h5 class="font-2x">{{college.name}} ({{college.abbreviation}})</h5>
    <div v-for="(course, c) in college.courses" :key="c">
     <p class="mt-2">{{course.course_name}} ({{course.course_abbreviation}})</p>
    </div>
    <p class="font-2x"></p>
   </div>
  </div>
 </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
   computed: {
    ...mapState('info', ['colleges'])
   }
}
</script>