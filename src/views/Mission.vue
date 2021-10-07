<template>
 <div>
  <h3 class="text-center text-white mt-3">Mission and Vision</h3>
  <p class="text-center text-white">Close and Open your hands to navigate left or right</p>
  <div v-once class="text-white text-center font-hymn p-5 mb-5" >
      <swiper class="swiper">
        <swiper-slide>
          <blockquote>
            <div class="corevalue">
               <h5 class="font-description mt-4">{{missionvision[0].lnu_mission}}</h5>
            </div>
          </blockquote>
        </swiper-slide>
        <swiper-slide>
          <blockquote>
            <div class="corevalue">
               <h5 class="font-description mt-4">{{missionvision[0].lnu_mission}}</h5>
            </div>
          </blockquote>
        </swiper-slide>
      </swiper>
   </div>
 </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import {mapState} from 'vuex'
export default {
   computed: {
   ...mapState('info', ['missionvision'])
   },

   components: {
      Swiper,
      SwiperSlide,
   },
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