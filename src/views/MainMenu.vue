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
          <router-link to="/announcement/highlights" class="text-decoration-none" >
            <div id="introcard" class="item item-post cardhover">
              <i class="fas fa-images card--icon"></i>
              <div class="position-absolute end-0 top-0">
                <p class="mt-3 me-4 text-light fw-light">01</p>
              </div>
              <div class="card-content">
                <div class="text-wrap text-uppercase">
                  <h5>Other Announcements</h5>
                </div>
              </div>   
            </div>
          </router-link>
          <router-link to="/university" class="text-decoration-none" >
            <div id="introcard" class="item item-post cardhover">
              <i class="fas fa-university card--icon"></i>
              <div class="position-absolute end-0 top-0">
                <p class="mt-3 me-4 text-light fw-light">02</p>
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
                <p class="mt-3 me-4 text-light fw-light">03</p>
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
                <p class="mt-3 me-4 text-light fw-light">04</p>
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
                <p class="mt-3 me-4 text-light fw-light">05</p>
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
                <p class="mt-3 me-4 text-light fw-light">06</p>
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