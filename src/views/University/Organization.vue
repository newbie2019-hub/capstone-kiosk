<template>
  <div >
    <div class="grid-container">
      <div class="title">
        <h2 class="text-center ">ORGANIZATIONS</h2>
        <p class="text-subheading">Pinch and drag to scroll left or right</p>
      </div>
       <main class="grid-item main">
        <div class="items" ref="horizontal" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
          <div id="introcard" class="item itemcard" v-for="(org, i) in organizations" :key="i">
            <div class="d-flex justify-content-end">
              <p class="mt-3 me-4 fw-light">{{currentNumber(i)}}</p>
            </div>
            <img id="introcard" v-if="org.image" :src="org.image ? org.image : ''" alt="">
            <img id="introcard" v-else src="@/assets/images/logo.png" alt="">
            <div class="introcard-description">
              <h6 class="mt-2 text-uppercase text-center">{{org.name}}</h6>
            </div>
          </div>
        </div>
      </main>
   </div>
   <return-gesture />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ReturnGesture from '../../components/ReturnGesture.vue'
export default {
 components: {ReturnGesture},
  data() {
    return {
     
    }
  },
   methods: {
    currentNumber(i){
      return i + 1 < 10 ? `0${i + 1}` : i + 1
    },
    onMouseDown(e) {
      this.isDown = true
      this.startX = e.pageX - this.$refs.horizontal.offsetLeft;
      this.scrollLeft = this.$refs.horizontal.scrollLeft;
    },
    onMouseUp() {
      this.isDown = false
    },
    onMouseMove(e) {
      if(!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - this.$refs.horizontal.offsetLeft;
      const walk = (x - this.startX) * 1.1; //scroll-fast
      this.$refs.horizontal.scrollLeft = this.scrollLeft - walk;
    },
    
  },
  computed: {
  ...mapState('info', ['organizations'])
  }
}
</script>

