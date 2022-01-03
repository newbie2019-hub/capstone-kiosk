<template>
 <div>
  <div class="container vh-100">
   <!-- <div class="currentTime">
    <h4 class="text-white">{{ time }}</h4>
   </div> -->
   <div class="d-flex flex-column h-100 g-0 justify-content-center text-white" :class="isFAQSelected ? '' : 'hidden'">
    <div class="col-12">
     <h2 class="fw-bold text-uppercase">FAQ #{{index + 1}} Selected </h2>
     <h2 class="text-uppercase fw-bold mt-5">{{FAQs.question}}</h2>
     <h3 class="fw-light mt-4 mb-3">Answer: {{FAQs.answer}}</h3>
     <button v-on:click.prevent="isFAQSelected = false" class="btn btn-primary text-uppercase btn-lg mt-4">Return</button>
    </div>
   </div>

   <div class="d-flex flex-column h-100 g-0 justify-content-center text-white" :class="isFAQSelected ? 'hidden' : ''">
    <div class="col-12">
     <h1 class="text-uppercase fw-bold">FAQs</h1>
     <h5 class="fw-light">Pinch and drag to the left to see more FAQs</h5>
     <h5 class="fw-light mt-5 mb-3">Select a FAQ to view the details</h5>
    </div>
    <div class="grid-container">
     <main class="grid-item main">
      <div class="items" ref="horiscroll" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
       <div v-on:click.prevent="FAQs = faq; isFAQSelected = true; index = i" id="introcard" class="item item-post cardhover" v-for="(faq, i) in faqs" :key="i">
        <i class="fas fa-question-circle card--icon"></i>
        <div class="position-absolute end-0 top-0">
         <p class="mt-3 me-4 text-light fw-light">{{ i + 1 }}</p>
        </div>
        <div class="card-h100-content text-wrap text-uppercase">
         <h5>{{ faq.question }}</h5>
        </div>
       </div>
      </div>
     </main>
    </div>
   </div>
  </div>
  <return-gesture />
 </div>
</template>
<script>
import { mapState } from 'vuex';
import ReturnGesture from '../../components/ReturnGesture.vue'

export default {
  data(){
    return {
      isFAQSelected: false,
      FAQs: {
        question: '',
        answer: '',
      },
      index: '',
    }
  },
  components: {ReturnGesture},
  mounted() {
   document.title = 'Touchless Information Kiosk - FAQs';
  },
  computed: {
   ...mapState('info', ['faqs']),
  },
  methods: {
   onMouseDown(e) {
    this.isDown = true;
    this.startX = e.pageX - this.$refs.horiscroll.offsetLeft;
    this.scrollLeft = this.$refs.horiscroll.scrollLeft;
   },
   onMouseUp(e) {
    this.isDown = false;
   },
   onMouseMove(e) {
    if (!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.$refs.horiscroll.offsetLeft;
    const walk = (x - this.startX) * 1.6; //scroll-fast
    this.$refs.horiscroll.scrollLeft = this.scrollLeft - walk;
   },
  },
 };
</script>
