<template>
 <div>
  <div class="container vh-100">
   <!-- <div class="currentTime">
    <h4 class="text-white">{{ time }}</h4>
   </div> -->
   <div class="d-flex flex-column h-100 g-0 justify-content-center text-white">
    <div class="col-12">
     <h1 class="text-uppercase fw-bold">Entertainment</h1>
     <h5 class="fw-light">Scroll to the left by pinch and drag to see more options</h5>
     <h5 class="fw-light mt-5 mb-3">Select an option to proceed.</h5>
    </div>
    <div class="grid-container">
     <main class="grid-item main">
      <div
       class="items"
       ref="horizontalentertainment"
       @mousedown="onMouseDown"
       @mousemove="onMouseMove"
       @mouseup="onMouseUp"
      >
       <router-link to="/entertainment/draw" class="text-decoration-none text-white">
        <div id="introcard" class="item item-post">
         <i class="fas fa-paint-brush card--icon"></i>
         <div class="d-flex justify-content-end">
          <p class="mt-3 me-4 fw-light">01</p>
         </div>
         <div class="card-content text-wrap text-uppercase">
           <h5>HANDS-FREE PAINTING</h5>
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
 import ReturnGesture from '../../components/ReturnGesture.vue';

 export default {
  components: { ReturnGesture },

  methods: {
   onMouseDown(e) {
    this.isDown = true;
    this.startX = e.pageX - this.$refs.horizontalentertainment.offsetLeft;
    this.scrollLeft = this.$refs.horizontalentertainment.scrollLeft;
   },
   onMouseUp() {
    this.isDown = false;
   },
   onMouseMove(e) {
    if (!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.$refs.horizontalentertainment.offsetLeft;
    const walk = (x - this.startX) * 1.4; //scroll-fast
    this.$refs.horizontalentertainment.scrollLeft = this.scrollLeft - walk;
   },
  },
 };
</script>
