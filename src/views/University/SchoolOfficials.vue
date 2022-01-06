<template>
 <div>
  <div class="backdrop" :class="cardClicked ? '': 'hidden'" @click.prevent="cardClicked = false">
    <div class="item-schoolofficial">
      <h5 class="text-uppercase">University Official</h5>
      <b-avatar class="mt-3 mb-3" v-if="selectedOfficial.image" size="150" :src="'https://be.lnukiosk.live/uploads/' + selectedOfficial.image"/>
      <b-avatar v-else src="@/assets/images/logo.png" size="170" />
      <h5 class="text-center">
        {{ selectedOfficial.title }} {{ selectedOfficial.first_name }} {{ selectedOfficial.last_name }}
      </h5>
      <h6 class="fw-light text-center">Role: {{ selectedOfficial.role }}</h6>
      <h6 class="fw-light mt-3">Email: {{ selectedOfficial.email ? selectedOfficial.email : 'N/A'}}</h6>
      <h6 class="fw-light mt-1">Tel: {{ selectedOfficial.telephone ? selectedOfficial.telephone : 'N/A' }}</h6>
      <h5 class="text-center">
      </h5>
    </div>
   <p class="official-close-text">Click anywhere to close</p>
  </div>
  <div class="container vh-100">
   <!-- <div class="currentTime">
        <h4 class="text-white">{{ time }}</h4>
      </div> -->
   <div class="d-flex flex-column h-100 g-0 justify-content-center text-white">
    <div class="col-12">
     <h1 class="text-uppercase fw-bold">UNIVERSITY OFFICIALS</h1>
     <h5 class="fw-light mt-2 mb-4">Scroll to the left by pinch and drag to see more content</h5>
     <!-- <h5 class="fw-light mt-5 mb-3">Select an option to view its contact number.</h5> -->
    </div>
    <div class="grid-container">
     <main class="grid-item main">
      <div class="items" ref="horizontal" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
       <div @click.prevent="cardClicked = true; selectedOfficial = official" id="introcard" class="item item-post cardhover" v-for="(official, i) in schoolofficials" :key="i">
        <div class="d-flex justify-content-end">
         <p class="mt-3 me-4 fw-light">{{ currentNumber(i) }}</p>
        </div>
        <div class="d-flex justify-content-center mt-1">
         <b-avatar v-if="official.image" size="137"  :src="'https://be.lnukiosk.live/uploads/' + official.image"  />
         <b-avatar v-else variant="secondary" size="170" />
        </div>
        <div class="card-content">
         <h6 class="text-uppercase text-center">
          {{ official.title }} {{ official.first_name }} {{ official.last_name }}
         </h6>
         <h6 class="fw-light text-subheading text-center text-ellipse">
          <small>{{ official.role }}</small>
         </h6>
         <h6 class="fw-light text-subheading text-center">
          <small>{{ official.email ? official.email : 'Email is not available' }}</small>
         </h6>
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
 import ReturnGesture from '../../components/ReturnGesture.vue';

 export default {
  components: { ReturnGesture },
  data() {
   return {
     cardClicked: false,
     selectedOfficial: {
       image: null,
       first_name: 'Yvan',
       last_name: 'Sabay',
       gender: 'Male',
       title: 'Dr',
       email: 'sampleemail@gmail.com',
       telephone: '',
       role: 'University President',
     }
   };
  },
  methods: {
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
    const walk = (x - this.startX) * 1.6; //scroll-fast
    this.$refs.horizontal.scrollLeft = this.scrollLeft - walk;
   },
  },
  computed: {
   ...mapState('info', ['schoolofficials']),
  },
 };
</script>
<style>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.61);
}

.item-schoolofficial {
  position: relative;
  width: auto;
  height: auto;
  background: #3f6cc0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2.5rem 3.5rem;
  color: white;
  max-width: 360px;
  box-shadow: 0px 0px 2px 2px #f5f5f5 !important;
  border-radius: 8px;
}

.official-close-text {
  position: absolute;
  bottom: 60px;
  left: 50%;
  text-transform: uppercase;
  letter-spacing: 1px;
  transform: translateX(-50%);
  color: rgb(209, 209, 209);

}
</style>
