<template>
 <div>
   <section v-once class="container mb-5 pt-5">
    <h2 class="text-white mt-5">MAIN MENU</h2>
    <p class="text-muted">Show both of your hands to scroll</p>
    <hr v-once class="mb-5 mt-2 bg-white zindex-999"/>
     <div v-once class="row justify-content-center">
       <div class="col-md-6 col-lg-6">
         <router-link v-once to="/university" class="text-decoration-none">
          <div v-once class="card">
            <img src="@/assets/images/university.jpg" alt="">
            <div class="card-content">
              <h5 v-once>University</h5>
              <p v-once>A leading university of education and diverse disciplines attuned to local and global development needs</p>
            </div>
            <div class="card-border card-border-university"></div>
          </div>
         </router-link>
       </div>
       <div v-once class="col-md-6 col-lg-3">
         <router-link v-once to="/feedback" class="text-decoration-none">
          <div v-once class="card">
            <div class="card-small">
              <img v-once src="@/assets/images/feedback.jpg" alt="">
              <div v-once class="card-content">
                <h5 v-once>Feedback</h5>
                <p v-once>To help us improve our system please leave a some review.</p>
              </div>
            </div>
            <div v-once class="card-border card-border-feedback "></div>
          </div>
         </router-link>
       </div>
       <div v-once class="col-md-6 col-lg-3">
         <router-link v-once to="/programs" class="text-decoration-none">
          <div v-once class="card">
              <img v-once src="@/assets/images/university-logo.png" alt="">
              <div v-once class="card-content">
                <h5 v-once>COLLEGES</h5>
                <p v-once>See what programs are offered by the university.</p>
              </div>
            <div v-once class="card-border card-border-university "></div>
          </div>
         </router-link>
       </div>
     </div>
     <div v-once class="row justify-content-center mt-2">
       <div v-once class="col-md-6 col-lg-6">
         <router-link v-once to="/announcement" class="text-decoration-none">
          <div class="card">
            <div class="card-small">
              <img v-once src="@/assets/images/announcement.jpg" alt="">
              <div class="card-content">
                <h5>Announcement</h5>
                <p>Stay updated with the University’s current events, announcements and news.</p>
              </div>
            </div>
            <div v-once class="card-border card-border-announcement"></div>
          </div>
         </router-link>
       </div>
       <div v-once class="col-md-6 col-lg-6">
         <router-link v-once to="/entertainment" class="text-decoration-none">
          <div v-once class="card">
            <div class="card-small">
              <img v-once src="@/assets/images/entertainment.jpg" alt="">
              <div v-once class="card-content">
                <h5 v-once>Entertainment</h5>
                <p v-once>Have some fun and learn other possibilities with touchless technology.</p>
              </div>
            </div>
            <div v-once class="card-border card-border-entertainment"></div>
          </div>
         </router-link>
       </div>
     </div>
     <div v-once class="row mt-2">
       <div v-once class="col-md-6 col-lg-6">
          <div class="card cursor-pointer" @click.prevent="enableTutorial">
            <div class="card-small">
              <img v-once src="@/assets/images/tutorial.jpg" alt="">
              <div class="card-content">
                <h5>Gesture Tutorial</h5>
                <p>Learn how to navigate the system by using the hand gestures</p>
              </div>
            </div>
            <div v-once class="card-border card-border-feedback"></div>
          </div>
       </div>
     </div>
   </section>

   <section v-once class="container mb-2 pt-5">
    <core-value/>
   </section>

   <section v-once class="container mb-4 pt-5">
    <mission-vision/>
   </section>

 </div>
</template>
<script>
import CoreValue from './CoreValues.vue'
import MissionVision from './Mission.vue'
export default {
  name: 'Home',
  mounted() {
    document.title = 'Touchless Information Kiosk - Main Menu'
  },
  components: {CoreValue,MissionVision},
  methods: {
    enableTutorial(){
      this.$store.commit('info/SET_TUTORIAL_STATE', true)
    },
  }
}
</script>
