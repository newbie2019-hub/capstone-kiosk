<template>
 <div>
  <div class="container vh-100" @mouseup="onMouseUp">
   <!-- <div class="currentTime">
    <h4 class="text-white">{{ time }}</h4>
   </div> -->
   <div class="d-flex flex-column h-100 g-0 justify-content-center text-white">
    <div class="col-12">
     <h1 class="text-uppercase fw-bold">The University</h1>
     <h5 class="fw-light">Scroll to the left by pinch and drag to see more options</h5>
     <h5 class="fw-light mt-5 mb-3">Select an option to proceed.</h5>
    </div>
    <div class="grid-container">
     <main class="grid-item main">
      <div class="items" ref="horiscroll" @mousedown="onMouseDown" @mousemove="onMouseMove">
       <router-link to="/university/history" class="text-decoration-none">
        <div id="introcard" class="item item-post cardhover">
         <i class="fas fa-history card--icon"></i>
         <div class="card-content text-wrap text-uppercase">
          <h5>History</h5>
         </div>
        </div>
       </router-link>
       <router-link to="/university/departments" class="text-decoration-none">
        <div id="introcard" class="item item-post cardhover">
         <i class="fas fa-list-ol card--icon"></i>
         <div class="card-content text-wrap text-uppercase">
          <h5>Units</h5>
         </div>
        </div>
       </router-link>
       <router-link to="/university/organization" class="text-decoration-none">
        <div id="introcard" class="item item-post cardhover">
         <i class="fas fa-sitemap card--icon"></i>
         <div class="card-content text-wrap text-uppercase">
          <h5>Organizations</h5>
         </div>
        </div>
       </router-link>
       <router-link to="/programs" class="text-decoration-none">
        <div id="introcard" class="item item-post cardhover">
         <i class="fas fa-list-ul card--icon"></i>
         <div class="card-content text-wrap text-uppercase">
          <h5>Programs</h5>
         </div>
        </div>
       </router-link>
       <router-link to="/hymn" class="text-decoration-none">
        <div id="introcard" class="item item-post cardhover">
         <i class="fas fa-music card--icon"></i>
         <div class="card-content">
          <div class="text-wrap text-uppercase">
           <h5>Hymn</h5>
          </div>
         </div>
        </div>
       </router-link>
       <router-link to="/university/teldirectory" class="text-decoration-none">
        <div id="introcard" class="item item-post cardhover">
         <i class="fas fa-phone card--icon"></i>
         <div class="card-content">
          <div class="text-wrap text-uppercase">
           <h5>Tel Directory</h5>
          </div>
         </div>
        </div>
       </router-link>
       <router-link to="/university/mission-vision" class="text-decoration-none">
        <div id="introcard" class="item item-post cardhover">
         <i class="fas fa-bullseye card--icon"></i>
         <div class="card-content">
          <div class="text-wrap text-uppercase">
           <h5>Mission / Vision</h5>
          </div>
         </div>
        </div>
       </router-link>
       <router-link to="/university/corevalues" class="text-decoration-none">
        <div id="introcard" class="item item-post cardhover">
         <i class="fas fa-handshake card--icon"></i>
         <div class="card-content">
          <div class="text-wrap text-uppercase">
           <h5>Core Values</h5>
          </div>
         </div>
        </div>
       </router-link>
       <router-link to="/university/schoolofficials" class="text-decoration-none">
        <div id="introcard" class="item item-post cardhover">
         <i class="fas fa-users card--icon"></i>
         <div class="card-content">
          <div class="text-wrap text-uppercase">
           <h5>School Officials</h5>
          </div>
         </div>
        </div>
       </router-link>
       <router-link to="/university/qualitypolicy" class="text-decoration-none">
        <div id="introcard" class="item item-post cardhover">
         <i class="fas fa-check card--icon"></i>
         <div class="card-content">
          <div class="text-wrap text-uppercase">
           <h5>Quality Policy</h5>
          </div>
         </div>
        </div>
       </router-link>
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
 // import DownArrow from '../../components/DownArrow.vue'
 import ReturnGesture from '../../components/ReturnGesture.vue';

 export default {
  components: { ReturnGesture },
  data() {
   return {

   };
  },
  mounted() {
   document.title = 'Touchless Information Kiosk - FAQs';
   
  },
  methods: {
   onMouseDown(e) {
    this.isDown = true;
    this.startX = e.pageX - this.$refs.horiscroll.offsetLeft;
    this.scrollLeft = this.$refs.horiscroll.scrollLeft;
   },
   onMouseUp(e) {
    this.isDown = false;
   },
   onMouseMove(e) {
    if (!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.$refs.horiscroll.offsetLeft;
    const walk = (x - this.startX) * 1.6; //scroll-fast
    this.$refs.horiscroll.scrollLeft = this.scrollLeft - walk;
   },
  },
  computed: {
   ...mapState('info', ['faqs']),
  },
 };
</script>
