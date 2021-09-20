<template>
 <div>
  <div class="container">
   <div class="row justify-content-center">
    <div class="example-3d">
      <swiper ref="swiper" class="swiper" :options="swiperOption">
        <swiper-slide><i class="far fa-thumbs-up feedback-emoji"></i></swiper-slide>
        <swiper-slide><i class="far fa-thumbs-down feedback-emoji"></i></swiper-slide>
        <swiper-slide><i class="far fa-grin-hearts feedback-emoji"></i></swiper-slide>
        <swiper-slide><i class="far fa-surprise feedback-emoji"></i></swiper-slide>
        <swiper-slide><i class="fas fa-fire feedback-emoji"></i></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
   </div>
  </div>
 </div>
</template>
<script>
export default {
  mounted() {
    document.getElementsByClassName('scroll')[0].style.display = 'none'
  },
  data() {
    return {
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 40,
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
  methods: {
   next() {
     const swiper = document.querySelector('.swiper').swiper;
     swiper.slideNext();
   }
  }
  
}
</script>

<style lang="css">
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
  width: 400px;
  height: 400px;
  text-align: center;
  font-weight: bold;
  background-color: #2C8DFB;
  background-position: center;
  background-size: cover;
  color: white;
}

.swiper-pagination-bullet-active {
  background-color: white !important;
}

.swiper-pagination-bullet {
  background: #9b9b9b !important;
}

.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: -10% !important;
}

.feedback-emoji {
  font-size: 8.5rem !important;
}


</style>