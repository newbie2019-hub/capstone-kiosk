<template>
 <div>
  <div class="container vh-100" :class="cardClicked ? '' : 'hidden'">
   <!-- <div class="currentTime">
        <h4 class="text-white">{{ time }}</h4>
      </div> -->
   <div class="d-flex flex-column h-100 g-0 justify-content-center text-white">
    <div class="col-12">
     <h1 class="text-uppercase fw-bold">{{selectedCollege.name}}</h1>
     <h5 class="fw-light">Select an option to view its content.</h5>
     <button v-on:click.prevent="cardClicked = false" class="btn btn-primary btn-lg text-uppercase mt-3 mb-3">Return</button>
    </div>
    <div class="">
     <div class="grid-container">

      <main class="grid-item main">
       <div
        class="items"
        ref="horizontalpopup"
        @mousedown="onMouseDownPopup"
        @mousemove="onMouseMovePopup"
        @mouseup="onMouseUpPopup"
       >
        <div id="introcard" class="item item-post" @click="isProgram = true">
         <i class="fas fa-list-ul card--icon"></i>
         <div class="card-content">
          <h5 class="text-uppercase">PROGRAMS</h5>
         </div>
        </div>
        <div id="introcard" class="item item-post" @click="isObjective = true">
         <i class="fas fa-bullseye card--icon"></i>
         <div class="card-content">
          <h5 class="text-uppercase">OBJECTIVES</h5>
         </div>
        </div>
        <div
         id="introcard"
         class="item item-post"
         @click="
          isProgram = false;
          isObjective = false;
          isGoal = true;
         "
        >
         <i class="fas fa-bullseye card--icon"></i>
         <div class="card-content">
          <h5 class="text-uppercase">GOALS</h5>
         </div>
        </div>
       </div>
      </main>
     </div>
    </div>
   </div>
  </div>

  <div class="programs-content" v-if="isProgram" @click="isProgram = false">
   <div class="programs">
    <h2 class="text-center text-white text-uppercase fw-bold">Programs Offered</h2>
    <div class="mt-4">
     <h4 v-if="selectedCollege.courses.length == 0" class="text-center text-white font-weight-400">No Programs Available</h4>
     <h4 v-else class="text-center text-white font-weight-400" v-for="course in selectedCollege.courses" :key="course.id">
      {{ course.course_name }}
     </h4>
    </div>
   </div>
   <p class="close-text">Click anywhere to close</p>
  </div>

  <div class="programs-content" v-if="isObjective" @click="isObjective = false">
   <div class="programs">
    <h2 class="text-center text-white text-uppercase fw-bold">OBJECTIVES</h2>
    <div class="mt-4">
     <h4 v-if="selectedCollege.objectives.length == 0" class="text-center text-white font-weight-400">No Objectives Found</h4>
     <h4
      v-else
      class="text-white text-center font-weight-400 mt-3"
      v-for="(objective, i) in selectedCollege.objectives"
      :key="i"
     >
      {{ objective.objective }}
     </h4>
    </div>
   </div>
   <p class="close-text">Click anywhere to close</p>
  </div>

  <div class="programs-content" v-if="isGoal" @click="isGoal = false">
   <div class="programs">
    <h2 class="text-center text-white text-uppercase fw-bold">GOALS</h2>
    <div class="mt-4">
     <h4 v-if="selectedCollege.goals.length == 0" class="text-center text-white font-weight-400">No Goals Found</h4>
     <h4 class="text-center text-white font-weight-400" v-for="goal in selectedCollege.goals" :key="goal.id">
      {{ goal.goal }}
     </h4>
    </div>
   </div>
   <p class="close-text">Click anywhere to close</p>
  </div>

  <div class="container vh-100" :class="cardClicked ? 'hidden' : ''">
   <!-- <div class="currentTime">
          <h4 class="text-white">{{ time }}</h4>
        </div> -->
   <div class="d-flex flex-column h-100 g-0 justify-content-center text-white">
    <div class="col-12">
     <h1 class="text-uppercase fw-bold">BASIC EDUCATION AND COLLEGES</h1>
     <h5 class="fw-light">Scroll to the left by pinch and drag to see more options</h5>
     <h5 class="fw-light mt-5 mb-3">Select an option to proceed.</h5>
    </div>
    <div class="grid-container">
     <main class="grid-item main">
      <div class="items" ref="horizontal" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
       <div id="introcard"
        class="item item-post"
        v-for="(college, i) in colleges"
        :key="i"
        v-on:click.prevent="
         selectedCollege = { ...college };
         cardClicked = true;">
        <div class="d-flex justify-content-end">
         <p class="mt-3 me-4 fw-light">{{ currentNumber(i) }}</p>
        </div>
        <img id="introcard" src="@/assets/images/logo.png" class="item-img" alt="" />
        <div class="card-h100-content">
         <h5 class="text-wrap text-uppercase">{{ college.name }}</h5>
        </div>
       </div>
      </div>
     </main>
    </div>
   </div>
  </div>
  <return-gesture />
 </div>
</template>

<script>
 import { mapState } from 'vuex';
 import ReturnGesture from '../components/ReturnGesture.vue';
 export default {
  components: { ReturnGesture },
  data() {
   return {
    selectedCollege: '',
    cardClicked: false,
    isProgram: false,
    isObjective: false,
    isGoal: false,
    numClicks: 0,
   };
  },
  mounted() {},
  watch: {
   cardClicked: function() {
    if (this.cardClicked) {
     setTimeout(() => {
      this.$refs.horizontalpopup.scrollLeft = '180';
     }, 20);
    }
   },
  },
  methods: {
   detectClick: function() {
    this.numClicks++;
    if (this.numClicks === 1) {
     var self = this;
     setTimeout(function() {
      switch (self.numClicks) {
       case 1:
        break;
       default:
        self.cardClicked = false;
      }
      self.numClicks = 0;
     }, 1450);
    }
   },
   currentNumber(i) {
    return i + 1 < 10 ? `0${i + 1}` : i + 1;
   },
   onMouseDown(e) {
    this.isDown = true;
    this.startX = e.pageX - this.$refs.horizontal.offsetLeft;
    this.scrollLeft = this.$refs.horizontal.scrollLeft;
   },
   onMouseUp() {
    this.isDown = false;
   },
   onMouseMove(e) {
    if (!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.$refs.horizontal.offsetLeft;
    const walk = (x - this.startX) * 1.5; //scroll-fast
    this.$refs.horizontal.scrollLeft = this.scrollLeft - walk;
   },
   onMouseDownPopup(e) {
    this.isDown = true;
    this.startX = e.pageX - this.$refs.horizontalpopup.offsetLeft;
    this.scrollLeft = this.$refs.horizontalpopup.scrollLeft;
   },
   onMouseUpPopup() {
    this.isDown = false;
   },
   onMouseMovePopup(e) {
    if (!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.$refs.horizontalpopup.offsetLeft;
    const walk = (x - this.startX) * 1.6; //scroll-fast
    this.$refs.horizontalpopup.scrollLeft = this.scrollLeft - walk;
   },
  },
  computed: {
   ...mapState('info', ['colleges']),
  },
 };
</script>
<style>
 .programs-overlay {
  background: rgba(0, 0, 0, 0.856);
  position: fixed;
  height: 100vh;
  width: 100%;
  padding: 0rem 14rem 0rem 14rem;
  margin-bottom: 4rem;
  z-index: 100;
  top: 0;
  left: 0;
  overflow: auto;
 }

 .programs-container {
  position: relative;
 }

 .close-text {
  position: fixed;
  bottom: 2rem;
  left: 3rem;
  font-size: 0.9rem;
  color: rgb(187, 187, 187);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
 }

 .programs-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 200;
  background: rgba(0, 0, 0, 0.904);
 }

 .programs {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
 }
</style>
