<template>
 <div>
   <h3 class="text-center text-white mt-3">PROGRAMS</h3>
   <p class="text-center mb-3 text-white">Click to show the programs offered</p>
   <div class="row justify-content-center">
      <div class="col-6 mb-5 mt-4">
         <div v-once v-for="(college, i) in colleges" :key="i">
            <button class="accordion">{{college.name}}</button>
            <div class="panel">
               <div v-for="(course, c) in college.courses" :key="c">
                  <p class="">{{course.course_name}} - {{course.course_abbreviation}}</p>
               </div>
            </div>
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
      var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
         acc[i].addEventListener("click", function() {
         this.classList.toggle("active");
         var panel = this.nextElementSibling;
         if (panel.style.display === "block") {
            panel.style.display = "none";
         } else {
            panel.style.display = "block";
         }
         if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
         } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
         }
         });
      }
   },
   computed: {
    ...mapState('info', ['colleges'])
   }
}
</script>
