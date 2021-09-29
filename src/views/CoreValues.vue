<template>
 <div>
 
  <div class="container">
   <div class="row justify-content-center">
      <swiper ref="swiper" class="swiper">
        <swiper-slide v-for="(core, i) in core_values" :key="i">
         <div class="corevalue">
          <h5 class="font-title">{{core.core_value}}</h5>
          <h5 class="font-description mt-2">{{core.description}}</h5>
         </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
   </div>
  </div>
 </div>
</template>
<script>
import {mapState} from 'vuex'
export default {

  mounted() {
    document.getElementsByClassName('scroll')[0].style.display = 'none'
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
 padding: 2rem 4.5rem;
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

