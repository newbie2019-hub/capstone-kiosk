<template>
 <div>
 
  <div class="container">
   <div class="row justify-content-center">
      <swiper class="swiper">
        <swiper-slide v-for="(core, i) in core_values" :key="i">
          <blockquote>
            <div class="corevalue">
              <h5 class="font-title">{{core.core_value}}</h5>
              <h5 class="font-description mt-4">{{core.description}}</h5>
            </div>
          </blockquote>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
   </div>
  </div>
 </div>
</template>
<script>
import {mapState} from 'vuex'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {

  mounted() {
    document.getElementsByClassName('scroll')[0].style.display = 'none'
  },
  components: {
      Swiper,
      SwiperSlide,
  },
  data() {
    return {
      
    }
  },
  computed: {
   ...mapState('info', ['core_values'])
  },
  methods: {

  }
  
}
</script>
<style >
.corevalue {
 color: white !important;
 padding: 2rem 9rem;
 text-align: center;
}

.corevalue .font-title{
 font-size: 2.5rem ;
}

.font-description {
 font-weight: 300 !important;
 font-size: 2.2rem !important;
}
</style>

