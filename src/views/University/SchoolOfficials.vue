<template>
  <div >
    <div class="grid-container">
      <div class="title">
        <h2 class="text-center ">SCHOOL OFFICIALS</h2>
        <p class="text-muted">Pinch and drag to scroll left or right</p>
      </div>
       <main class="grid-item main">
        <div class="items" ref="horizontal" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
          <div id="introcard" class="item" v-for="(official, i) in schoolofficials" :key="i">
            <div class="d-flex justify-content-end">
              <p class="mt-3 me-4">{{currentNumber(i)}}</p>
            </div>
            <div class="d-flex justify-content-center mt-4">
              <b-avatar v-if="official.image" size="130" :src="official.image ? official.image : ''" variant="primary"/>
              <b-avatar v-else variant="primary" size="130"/>   
            </div>
            <div class="introcard-description">
              <h6 class="text-uppercase text-center">{{official.title}} {{official.first_name}} {{official.last_name}}</h6>
              <h6 class="fw-light text-subheading text-center"><small>{{official.role}}</small></h6>
              <h6 class="fw-light text-subheading text-center"><small>{{official.email}}</small></h6>
            </div>
          </div>
        </div>
      </main>
   </div>
   <return-gesture/>
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
  ...mapState('info', ['schoolofficials'])
  }
}
</script>


