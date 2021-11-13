<template>
 <div>
   <div class="grid-container-home">
      <div class="title-home">
        <h2 class="">CORE VALUES</h2>
        <p class="">Pinch and drag to scroll left or right</p>
        <hr v-once class="mt-2 bg-white zindex-999"/>
      </div>
       <main class="grid-item main">
        <div class="items" ref="horizontal" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
          <div id="introcard" class="item-corevalues" v-for="(core, i) in core_values" :key="i">
            <div class="text-wrap">
              <blockquote>
                <h2 class="font-title">{{core.core_value}}</h2>
                <h5 class="font-description mt-4">{{core.description}}</h5>
              </blockquote>
            </div>
          </div>
        </div>
      </main>
   </div>
 </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  computed: {
   ...mapState('info', ['core_values'])
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
      const walk = (x - this.startX) * 1.3; //scroll-fast
      this.$refs.horizontal.scrollLeft = this.scrollLeft - walk;
    },
  }
  
}
</script>
<style >

.font-title{
 font-size: 2.5rem ;
}

.font-description {
 font-weight: 300 !important;
 font-size: 2.2rem !important;
}
</style>

