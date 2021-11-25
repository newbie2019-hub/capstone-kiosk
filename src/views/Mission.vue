<template>
 <div>
     <div class="grid-container-home">
      <div class="title-home mt-5">
        <!-- <h2 class="">MISSION AND VISION</h2> -->
        <!-- <p class="text-center">Pinch and drag to scroll left or right</p> -->
        <!-- <hr v-once class="mt-2 bg-white zindex-999"/> -->
      </div>
       <main class="grid-item main">
        <div class="items" ref="horizontalmv" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
          <div id="introcard" class="item-corevalues">
            <div class="text-wrap">
              <blockquote>
                <h2 class="font-title text-uppercase">Mission</h2>
                <h2 class="mt-5">{{missionvision[0].lnu_mission}}</h2>
              </blockquote>
                <p class="text-white mt-4">1 - 2</p>
            </div>
          </div>
          <div id="introcard" class="item-corevalues">
            <div class="text-wrap">
              <blockquote>
                <h2 class="font-title text-uppercase">Vision</h2>
                <h2 class="mt-5">{{missionvision[0].lnu_vision}}</h2>
              </blockquote>
              <p class="text-white mt-4">2 - 2</p>
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
   computed: {
   ...mapState('info', ['missionvision'])
   },
  methods: {
     currentNumber(i){
      return i + 1 < 10 ? `0${i + 1}` : i + 1
    },
    onMouseDown(e) {
      this.isDown = true
      this.startX = e.pageX - this.$refs.horizontalmv.offsetLeft;
      this.scrollLeft = this.$refs.horizontalmv.scrollLeft;
    },
    onMouseUp() {
      this.isDown = false
    },
    onMouseMove(e) {
      if(!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - this.$refs.horizontalmv.offsetLeft;
      const walk = (x - this.startX) * 1.6; //scroll-fast
      this.$refs.horizontalmv.scrollLeft = this.scrollLeft - walk;
    },
  }
}
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