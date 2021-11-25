<template>
  <div>
    <div class="rate-success">
     <i class="fas fa-check feedback-emoji"></i>
     <h5 class="rate-feedback-text mt-3">Thank you for your feedback!</h5>
   </div>
    <div class="feedback" v-if="isFeedBack">
      <div class="feedback-input">
        <h2 class="text-uppercase">Enter your feedback</h2>
        <p class="mb-5 text-subheading">Please type your feedback with your keyboard</p>
        <input v-model="data.suggestion" type="text" required class="pt-3 feedback-control text-center">
        <p v-if="!hasError" class="mt-2 text-subheading">We currently dont have an on-screen keyboard</p>
        <p v-else class="mt-2 text-danger">Please fill in this field</p>
        <button class="btn btn-lg mt-5 btn-primary me-3" @click.prevent="isFeedBack = false">Cancel</button>
        <button class="btn btn-lg mt-5 btn-primary" @click.prevent="submitFeedback">Submit</button>
      </div>
    </div>
    <div class="grid-container">
      <div class="title">
        <h2 class="text-center fw-light">FEEDBACK</h2>
        <p class="text-muted">Pinch and drag to scroll left or right</p>
      </div>
       <main class="grid-item main">
        <div class="items" ref="horizontal" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
          <div id="introcard" class="item feedbackcard" v-for="(em, i) in emoji" :key="i">
            <div class="d-flex justify-content-end">
              <p class="mt-3 me-4 fw-light">{{currentNumber(i)}}</p>
            </div>
            <div class="feedback-container" @click.prevent="showFeedBack(em)">
              <i :class="em.class"></i>
            </div>
            <div class="introcard-description">
              <h6 class="mt-5 text-uppercase text-center">{{em.name}}</h6>
            </div>
          </div>
        </div>
      </main>
   </div>
   <return-gesture />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {gsap} from 'gsap';
import ReturnGesture from '../components/ReturnGesture.vue';
export default {
 components: {ReturnGesture},
  data() {
    return {
      isFeedBack: false,
      data: {
        suggestion: '',
        emoji: '',
      },
      hasError: false,
      emoji: [
        {
          name: 'Satisfied',
          class: 'far fa-thumbs-up feedback-emoji'
        },
        {
          name: 'Needs Improvement',
          class: 'far fa-thumbs-down feedback-emoji'
        },
        {
          name: 'Lovely',
          class: 'far fa-grin-hearts feedback-emoji'
        },
        {
          name: 'Surprised',
          class: 'far fa-surprise feedback-emoji'
        },
        {
          name: 'Awesome',
          class: 'fas fa-fire feedback-emoji'
        },
      ]
    }
  },
  mounted(){
    document.title = 'Feedback Section'
  },
   methods: {
    async submitFeedback(){
      if(this.data.suggestion.trim() == '') {
        this.hasError = true
      }
      else {
        this.hasError = false
      }
      if(!this.hasError){
        const {status} = await this.$store.dispatch('info/sendReview', this.data)
        if(status == 200) {
          this.data = {emoji: '', suggestion: ''}
          this.showSuccess()
        }
      }
    },
    showFeedBack(data){
      this.isFeedBack = true
      this.data.emoji = data.name
    },
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
      const walk = (x - this.startX) * 1.6; //scroll-fast
      this.$refs.horizontal.scrollLeft = this.scrollLeft - walk;
    },
    showSuccess(){
      gsap.from('.rate-success', 1.4, {
        display: 'flex',
      })
      gsap.from('.feedback-emoji', .45, {
        x: -20,
        opacity: 0,
      })
      gsap.from('.rate-feedback-text', .45, {
        x: -20,
        opacity: 0,
        delay: .45
      })
      this.isFeedBack = false
    },
    
  },
  computed: {
  ...mapState('info', ['departments'])
  }
}
</script>
<style >
.feedback-emoji {
  font-size: 8.5rem !important;
}
.feedback-container {
  display: flex;
  width: 100%;
  background: rgb(27, 122, 199);
  padding: 3rem 1rem 3rem 1rem!important;
  margin-top: .6rem;
  justify-content: center;
  align-items: center;
}

.feedback {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(17, 17, 17, 0.89);
  display: flex;
  justify-content: center;
  align-items: center;
}

.feedback-emoji {
  font-size: 8.5rem !important;
}

.feedback-input {
  text-align: center;
  color: #fff;
  position: relative;
  width: 100%;
  max-width: 800px;
}

.feedback-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.5;
  outline: none;
  color: #f7f7f7;
  border: 0 none !important;
  border-bottom: 2px solid #ced4da !important;
  background-color: rgba(255, 255, 255, 0);
  background-clip: padding-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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
</style>
