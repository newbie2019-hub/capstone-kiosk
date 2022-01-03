<template>
 <div>
  <div class="container vh-100">
   <!-- <div class="currentTime">
    <h4 class="text-white">{{ time }}</h4>
   </div> -->
   <div class="d-flex flex-column h-100 g-0 justify-content-center text-white">
    <div class="col-12" :class="cardClicked.clicked ? '' : 'hidden'">
     <h1 class="text-uppercase fw-bold">LNU {{cardClicked.type == 'mission' ? 'MISSION':'VISION'}}</h1>
     <div class="col-10">
      <h3 class="fw-light mt-3 mb-3">{{cardClicked.type == 'mission' ? missionvision[0].lnu_mission : missionvision[0].lnu_vision}}</h3>
     </div>
     <button @click.prevent="cardClicked.clicked = false" class="btn btn-primary btn-lg mt-4">RETURN</button>
    </div>
    <div class="col-12" :class="cardClicked.clicked ? 'hidden' : ''">
     <h1 class="text-uppercase fw-bold">MISSION - VISION</h1>
     <h5 class="fw-light mt-2 mb-3">Select an option to view its content</h5>
    </div>
    <div class="col-12 mt-5" :class="cardClicked.clicked ? 'hidden' : ''">
     <div class="row gx-4">
      <div class="col-4">
       <div class="card cursor-pointer" @click.prevent="cardClicked.clicked = true; cardClicked.type = 'mission'">
        <i class="fas fa-bullseye card--icon"></i>
        <div class="position-absolute end-0 top-0">
         <p class="mt-3 me-4 text-light fw-light">01</p>
        </div>
        <div class="card-small">
         <div class="card-content">
          <h5>LNU MISSION</h5>
         </div>
        </div>
       </div>
      </div>
      <div class="col-4">
       <div class="card cursor-pointer" @click.prevent="cardClicked.clicked = true; cardClicked.type = 'vision'">
        <i class="fas fa-eye card--icon"></i>
        <div class="position-absolute end-0 top-0">
         <p class="mt-3 me-4 text-light fw-light">02</p>
        </div>
        <div class="card-small">
         <div class="card-content">
          <h5>LNU VISION</h5>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
  <return-gesture />
 </div>
</template>
<script>
 import ReturnGesture from '../components/ReturnGesture.vue';
 import { mapState } from 'vuex';
 export default {
  data() {
   return {
    cardClicked: {
      clicked: false,
      type: null
    },
   };
  },
  computed: {
   ...mapState('info', ['missionvision']),
  },
  components: { ReturnGesture },
  methods: {
   currentNumber(i) {
    return i + 1 < 10 ? `0${i + 1}` : i + 1;
   },
   onMouseDown(e) {
    this.isDown = true;
    this.startX = e.pageX - this.$refs.horizontalmv.offsetLeft;
    this.scrollLeft = this.$refs.horizontalmv.scrollLeft;
   },
   onMouseUp() {
    this.isDown = false;
   },
   onMouseMove(e) {
    if (!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.$refs.horizontalmv.offsetLeft;
    const walk = (x - this.startX) * 1.6; //scroll-fast
    this.$refs.horizontalmv.scrollLeft = this.scrollLeft - walk;
   },
  },
 };
</script>
<style>
 .corevalue {
  color: white !important;
  padding: 2rem 9rem;
  text-align: center;
 }
 .font-description {
  font-weight: 300 !important;
  font-size: 2.2rem !important;
 }
</style>
