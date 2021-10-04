<template>
  <section class="container" >
   <div class="row h-100">
      <h3 class="text-center text-white mt-3">ORGANIZATION</h3>
      <p class="text-center mb-5 text-white">To view other organization slide either left or right</p>
      <div class="example-3d">
      <swiper ref="swiper" class="swiper" :options="swiperOption">
        <swiper-slide v-for="(org, i) in organizations" :key="i">
         <div class="d-flex flex-column justify-content-center align-items-center h-100 w-100">
          <img src="@/assets/images/logo.png" width="150" height="150" alt="">
          <h5 class="mt-4 pe-4 ps-4">{{org.organization}}</h5>
         </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
   </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { mapState } from 'vuex';
export default {
  components: {
      Swiper,
      SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows : true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
   computed: {
   ...mapState('info', ['organizations'])
   }
}
</script>


<style lang="css" scoped>
.example-3d {
  width: 100%;
  height: 400px;
  padding-top: 30px;
  padding-bottom: 30px;
}

.swiper-container {
  overflow: visible !important;
}

.swiper {
  /* height: 100%; */
  width: 100%;
  overflow: hidden;
}

.swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 350px;
  text-align: center;
  font-weight: bold;
  border-radius: 10px;
  background-color: rgb(56, 146, 231);
  background-position: center;
  background-size: cover;
  color: white;
}

.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: -10% !important;
}

</style>