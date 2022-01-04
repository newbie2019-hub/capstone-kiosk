<template>
 <div>
  <div class="container vh-100" @mouseup="onMouseUp">
   <!-- <div class="currentTime">
    <h4 class="text-white">{{ time }}</h4>
   </div> -->
   <div class="d-flex flex-column h-100 g-0 justify-content-center text-white">
    <div class="col-12">
     <h1 class="text-uppercase fw-bold">CORE VALUES</h1>
     <h5 class="fw-light">Scroll to the left by pinch and drag to see more content</h5>
    </div>
    <div class="grid-container">
     <main class="grid-item main">
      <div class="items" ref="horizontal" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
       <div id="introcard" class="item-corevalues" v-for="(core, i) in core_values" :key="i">
        <div class="text-wrap">
          <h1 class="font-title mt-5 fw-bold">{{ core.core_value }}</h1>
          <h5 class="font-description mt-4">{{ core.description }}</h5>
          <p class="text-white mt-4">{{ i + 1 }} - {{ core_values.length }}</p>
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
 import ReturnGesture from '../components/ReturnGesture.vue';
 import { mapState } from 'vuex';
 export default {
  components: {
    ReturnGesture
  },
  data() {
   return {};
  },
  computed: {
   ...mapState('info', ['core_values']),
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
    const walk = (x - this.startX) * 1.4; //scroll-fast
    this.$refs.horizontal.scrollLeft = this.scrollLeft - walk;
   },
  },
 };
</script>
<style>
 .font-title {
  font-size: 2.5rem;
 }

 .font-description {
  font-weight: 300 !important;
  font-size: 2.2rem !important;
 }
</style>
