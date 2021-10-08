<template>
 <div>
   <h3 class="text-center text-white mt-3">PROGRAMS</h3>
   <p class="text-center mb-3 text-white">Click to show the programs offered</p>
   <div class="container h-100">
      <div class="row justify-content-center mt-5">
         <div class=" mt-4 fixed-content">
            <h5 class="mb-4 text-white text-uppercase font-weight-400">Select from the list below</h5>
            <div class="card-education-selection cursor-pointer p-4 text-white" v-for="(college, i) in colleges" :key="i" v-on:click.prevent="selectedCollege = {...college}">
               <h6 class="font-weight-400 text-uppercase"> {{college.name}}</h6>
            </div>
         </div>
         <div class="col-4"></div>
         <div class="col-7 mt-4">
            <h5 class="text-center mb-4 text-white text-uppercase font-weight-400" v-if="selectedCollege.courses.length != 0">Programs Offered</h5>
            <div class="card-education-selection mb-1 p-4" v-for="course in selectedCollege.courses" :key="course.id + 'c'">
               <h6 class="text-center text-white font-weight-400">{{course.course_name}}</h6>
            </div>
            <h5 class="text-center mb-4 text-white text-uppercase mt-4 font-weight-400" v-if="selectedCollege.goals.length != 0">Goals</h5>
            <div class="card-education-selection mb-1  p-4" v-for="goal in selectedCollege.goals" :key="goal.id + 'g'">
               <h6 class="text-center text-white font-weight-400">{{goal.goal}}</h6>
            </div>  
            <h5 class="text-center mb-4 text-white text-uppercase mt-4 font-weight-400" v-if="selectedCollege.objectives.length != 0">Objectives</h5>
            <div class="card-education-selection mb-1 p-4" v-for="objective in selectedCollege.objectives" :key="objective.id + 'o'">
               <h6 class="text-center text-white font-weight-400">{{objective.objective}}</h6>
            </div>  
            <div class="card-objective p-3"></div>   
         </div>
      </div>
   </div>
 </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
   mounted() {
      document.title = 'Touchless Information Kiosk - FAQs'
      setTimeout(() => {
         this.selectedCollege = this.colleges[0]
      }, 500)
   },
   data(){
      return {
         selectedCollege: '',
      }
   },
   computed: {
    ...mapState('info', ['colleges'])
   },
   methods: {
      
   }
}
</script>
<style>
.cursor-pointer {
   cursor: pointer;
}

.fixed-content {
   position: fixed;
   top: 45%;
   left: 20%;
   transform: translate(-50%, -50%);
   width: 100%;
   max-width: 33.33%;

}
</style>
