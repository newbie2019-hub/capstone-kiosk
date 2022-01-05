<template>
 <div>
  <div class="container vh-100">
   <!-- <div class="currentTime">
    <h4 class="text-white">{{ time }}</h4>
   </div> -->
   <div class="d-flex flex-column h-100 g-0 justify-content-center text-white">
    <div class="col-12">
      <h1 class="text-uppercase fw-bold">Main Menu</h1>
      <h5 class="fw-light">Scroll to the left by pinch and drag to see more options</h5>
      <h5 class="fw-light mt-5 mb-3">Select an option to proceed.</h5>
    </div>
    <div class="grid-container">
      <main class="grid-item main">
        <div class="items" ref="horiscroll" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
          <router-link to="/university" class="text-decoration-none" >
            <div id="introcard" class="item item-post cardhover">
              <i class="fas fa-university card--icon"></i>
              <div class="position-absolute end-0 top-0">
                <p class="mt-3 me-4 text-light fw-light">01</p>
              </div>
              <div class="card-content text-wrap text-uppercase">
                <h5>University</h5>
              </div>   
            </div>
          </router-link>
          <router-link to="/tutorial" class="text-decoration-none" >
            <div id="introcard" class="item item-post cardhover">
              <i class="fas fa-hand-paper card--icon"></i>
              <div class="position-absolute end-0 top-0">
                <p class="mt-3 me-4 text-light fw-light">02</p>
              </div>
              <div class="card-content text-wrap text-uppercase">
                <h5>Gestures</h5>
              </div>   
            </div>
          </router-link>
          <router-link to="/entertainment" class="text-decoration-none" >
            <div id="introcard" class="item item-post cardhover">
              <i class="fas fa-dice card--icon"></i>
              <div class="position-absolute end-0 top-0">
                <p class="mt-3 me-4 text-light fw-light">03</p>
              </div>
              <div class="card-content text-wrap text-uppercase">
                  <h5>Entertainment</h5>
              </div>   
            </div>
          </router-link>
          <router-link to="/feedback" class="text-decoration-none" >
            <div id="introcard" class="item item-post cardhover">
              <i class="fas fa-grin-hearts card--icon"></i>
              <div class="position-absolute end-0 top-0">
                <p class="mt-3 me-4 text-light fw-light">04</p>
              </div>
              <div class="card-content">
                <div class="text-wrap text-uppercase">
                  <h5>Feedback</h5>
                </div>
              </div>   
            </div>
          </router-link>
          <router-link to="/university/faqs" class="text-decoration-none" >
            <div id="introcard" class="item item-post cardhover">
              <i class="fas fa-question-circle card--icon"></i>
              <div class="position-absolute end-0 top-0">
                <p class="mt-3 me-4 text-light fw-light">05</p>
              </div>
              <div class="card-content">
                <div class="text-wrap text-uppercase">
                  <h5>FAQs</h5>
                </div>
              </div>   
            </div>
          </router-link>
        </div>
      </main>
    </div>
   </div>
  </div>
  <return-gesture/>
  <!-- <full-page ref="fullpage" :options="options">
      <div class="section">
        <div class="container-fluid pt-5 pe-5 ps-5 pb-5">
          <div v-once class="row gx-2 justify-content-center">
            <div class="col-md-6 col-lg-6">
              <router-link v-once to="/university" class="text-decoration-none">
                <div v-once class="card">
                  <img src="@/assets/images/university.jpg" alt="">
                  <div class="card-content">
                    <h5>University</h5>
                    <p>A leading university of education and diverse disciplines attuned to local and global development needs</p>
                  </div>
                  <div class="card-border card-border-university"></div>
                </div>
              </router-link>
            </div>
            <div class="col-md-6 col-lg-3">
              <router-link to="/feedback" class="text-decoration-none">
                <div class="card">
                  <div class="card-small">
                    <img v-once src="@/assets/images/feedback.jpg" alt="">
                    <div class="card-content">
                      <h5>Feedback</h5>
                      <p>To help us improve our system please leave a some review.</p>
                    </div>
                  </div>
                  <div v-once class="card-border card-border-feedback "></div>
                </div>
              </router-link>
            </div>
            <div v-once class="col-md-6 col-lg-3">
              <router-link v-once to="/programs" class="text-decoration-none">
                <div class="card">
                    <img src="@/assets/images/university-logo.png" alt="">
                    <div class="card-content">
                      <h5>COLLEGES</h5>
                      <p>See what programs are offered by the university.</p>
                    </div>
                  <div class="card-border card-border-university "></div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="row gx-2 justify-content-center mt-2">
            <div class="col-md-6 col-lg-6">
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
            <div v-once class="col-md-6 col-lg-3">
              <router-link v-once to="/entertainment" class="text-decoration-none">
                <div v-once class="card">
                  <div class="card-small">
                    <img v-once src="@/assets/images/entertainment.jpg" alt="">
                    <div class="card-content">
                      <h5>Entertainment</h5>
                      <p>Have some fun and learn other possibilities with touchless technology.</p>
                    </div>
                  </div>
                  <div class="card-border card-border-entertainment"></div>
                </div>
              </router-link>
            </div>
            <div class="col-md-6 col-lg-3">
              <router-link to="/tutorial" class="text-decoration-none">
                <div class="card cursor-pointer">
                  <div class="card-small">
                    <img v-once src="@/assets/images/tutorial.jpg" alt="">
                    <div class="card-content">
                      <h5>Gesture Tutorial</h5>
                      <p>Learn how to navigate the system by using the hand gestures</p>
                    </div>
                  </div>
                  <div class="card-border card-border-feedback"></div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <down-arrow/>
      </div>
      <div class="section">
        <div class="container-fluid h-100 p-5">
          <div class="row">
            <core-value/>
          </div>
        </div>
        <down-arrow/>
      </div>
      <div class="section">
        <div class="container-fluid h-100 p-5">
          <div class="row">
            <mission-vision/>
          </div>
        </div>
      </div>
    </full-page> -->
 </div>
</template>
<script>
 // import CoreValue from './CoreValues.vue'
 // import MissionVision from './Mission.vue'

import ReturnGesture from "../components/ReturnGesture.vue";

 // import DownArrow from '../components/DownArrow.vue'
 export default {
  name: 'Home',
  components: { ReturnGesture },
  data() {
   return {
    time: '',
    isDown: false,
   };
  },
  mounted(){
    document.title = 'Touchless Information Kiosk - Main Menu';
  },
  methods: {
    onMouseDown(e) {
      this.isDown = true
      this.startX = e.pageX - this.$refs.horiscroll.offsetLeft;
      this.scrollLeft = this.$refs.horiscroll.scrollLeft;
    },
    onMouseUp(e) {
      this.isDown = false
    },
    onMouseMove(e) {
      if(!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - this.$refs.horiscroll.offsetLeft;
      const walk = (x - this.startX) * 1.6; //scroll-fast
      this.$refs.horiscroll.scrollLeft = this.scrollLeft - walk;
    },
  }
 };
</script>
<style>
.pointer-none {
  pointer-events: none;
}
</style>