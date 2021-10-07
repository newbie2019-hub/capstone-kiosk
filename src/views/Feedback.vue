<template>
 <div>
   <div class="rate-success">
     <i class="fas fa-check feedback-emoji emoji-check"></i>
     <h5 class="rate-feedback-text">Thank you for your feedback!</h5>
   </div>
   <div class="input-suggestion" v-if="isCardClicked"> 
     <h3 class="text-white">Input Your Suggestions</h3>
     <h5 class="text-white font-weight-400">Click submit once done</h5>
     <textarea placeholder="Enter your suggestion" class="form-suggestion mb-3 mt-5" type="text" @click="inputVisible = true" :value="input" @input="onInputChange" rows="5"></textarea>
     <SimpleKeyboard v-if="inputVisible" @onChange="onChange" @onKeyPress="onKeyPress" :input="input"/>
   </div>
  <div class="container">
   <div class="row justify-content-center">
     <h3 class="text-center text-white mt-3">FEEDBACK</h3>
     <p class="text-center mb-5 text-white">Pinch your finger on any of the cards</p>
    <div class="example-3d">
      <swiper ref="swiper" class="swiper" :options="swiperOption">
        <swiper-slide ><i class="far fa-thumbs-up feedback-emoji"></i></swiper-slide>
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
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import SimpleKeyboard from "../components/Virtual-Keyboard.vue";

export default {
  mounted() {
    document.title = "Touchless Information Kiosk - Feedback"
    this.clicked()
  },
  components: {
      Swiper,
      SwiperSlide,
      SimpleKeyboard
  },
  data() {
    return {
      isCardClicked: false,
      inputVisible: false,
      input: '',
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
  methods: {
    clicked(){
      let swiper_cards = document.getElementsByClassName('swiper-slide')
      swiper_cards.forEach((card, i) => {
        card.addEventListener('click', () => {    
          // gsap.from('.rate-success', 1.4, {
          //   display: 'flex',
          // })
          // gsap.from('.emoji-check', .45, {
          //   x: -20,
          //   opacity: 0,
          // })
          // gsap.from('.rate-feedback-text', .45, {
          //   x: -20,
          //   opacity: 0,
          //   delay: .45
          // })
          this.isCardClicked = true
          
        })
      });
    },
    onChange(input) {
      if(input === "▼" || input === 'Cancel') return
      this.input = input;
    },
    onKeyPress(button) {
      if(button === "▼"){
        this.inputVisible = false
      }
      if(button === "Cancel"){
        this.inputVisible = false
        this.isCardClicked = false
      }
    },
    onInputChange(input) {
      this.input = input.target.value;
    }
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
  width: 100%;
  overflow: hidden;
}

.swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  text-align: center;
  font-weight: bold;
  background-color: #2C8DFB;
  background-position: center;
  background-size: cover;
  color: white;
}

.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: -10% !important;
}

.feedback-emoji {
  font-size: 8.5rem !important;
}

.rate-success {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  z-index: 999;
  color: white;
  will-change: transform;
}

.rate-success i {
  font-size: 2rem !important;
}

.simple-keyboard {
  max-width: 940px;
}

.simple-keyboard.dark-mode-theme {
  background-color: rgba(66, 66, 66, 0.8);
  border-radius: 5px;
  
}
</style>