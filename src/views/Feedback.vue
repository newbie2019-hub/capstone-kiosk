<template>
 <div>
  <div class="container">
   <div class="row justify-content-center">
    <div class="example-3d">
      <swiper ref="swiper" class="swiper" :options="swiperOption">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
   </div>
  </div>
 </div>
</template>
<script>
export default {
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
          depth: 100,
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

<style lang="css" scoped>
.example-3d {
  width: 100%;
  height: 400px;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  text-align: center;
  font-weight: bold;
  background-color: #2C8DFB;
  background-position: center;
  background-size: cover;
  color: white;
}

.swiper .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: white;
}

</style>