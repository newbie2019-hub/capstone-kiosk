<template>
 <div>
   <div class="container vh-100">
   <!-- <div class="currentTime">
        <h4 class="text-white">{{ time }}</h4>
      </div> -->
   <div class="d-flex flex-column h-100 g-0 justify-content-center text-white">
    <div class="col-12">
     <h1 class="text-uppercase fw-bold">TEL - DIRECTORY</h1>
     <h5 class="fw-light mt-2 mb-4">Scroll to the left by pinch and drag to see more options</h5>
     <!-- <h5 class="fw-light mt-5 mb-3">Select an option to view its contact number.</h5> -->
    </div>
    <div class="grid-container">
     <main class="grid-item main">
      <div class="items" ref="horizontal" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
       <div
        id="introcard"
        class="item item-post"
        v-for="(tel, i) in teldirectories"
        :key="i"
       >
        <div class="d-flex justify-content-end">
         <p class="mt-3 me-4 fw-light">{{ currentNumber(i) }}</p>
        </div>
        <i class="fas fa-phone card--icon"></i>
        <div class="card-h100-content text-wrap text-uppercase">
          <div class="d-flex flex-column">
            <h5>{{tel.name}}</h5>
            <h5 class="mt-3">{{tel.tel_num}}</h5>
          </div>
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
import {mapState} from 'vuex'
import ReturnGesture from '../../components/ReturnGesture.vue'
export default {
 components: {ReturnGesture},
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
 computed: {
  ...mapState('info', ['teldirectories'])
 }
}
</script>
<style lang="css">

.font-2x {
 font-size: 1.5rem;
}

.telephone {
  color: rgb(255, 255, 255);
  border-bottom: 1px solid rgba(87, 87, 87, 0.342) !important;
  cursor: pointer;
  padding: 1rem 1rem;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 1.3rem;
  transition: 0.5s;
  position: relative;
}

</style>