<template>
 <div class="">
   <!-- <div class="img-selected" v-show="hasImgSelected" @click.prevent="hasImgSelected = false">
     <img :src="`http://127.0.0.1:8000/uploads/${imgSelected.image}`" alt="">
     <p class="close-text">Click anywhere to close</p>
   </div> -->
  <div class="vh-100">
   <div class="h-100">
      <agile :swipeDistance="300" :autoplaySpeed="12000" :autoplay="true" v-if="imgposts.length > 0">
        <img class="slide cursor-pointer" v-for="(img, i) in imgposts" :key="i" :src="`http://127.0.0.1:8000/uploads/${img.image}`" />
        <template slot="prevButton"><i class="fas fa-chevron-left prevButton--icon"></i></template>
        <template slot="nextButton"><i class="fas fa-chevron-right nextButton--icon"></i></template>
      </agile>  
   </div>
  </div>
  <return-gesture />
 </div>
</template>
<script>
import { VueAgile } from 'vue-agile'
import { mapState } from 'vuex';
import ReturnGesture from '../../components/ReturnGesture.vue';

export default {
  components: { ReturnGesture, agile: VueAgile },
  data() {
   return {
    slide: 0,
    hasImgSelected: false,
    imgSelected: {
      image: '164171778557.jpg',
    },
    sliding: null,
    selectedPost: {
     postcontent: {
      content: '',
     },
     useraccount: {
      userinfo: {
       first_name: '',
       last_name: '',
       organization: {
        abbreviation: '',
        name: '',
       },
       department: {
        abbreviation: '',
        name: '',
       },
       role: {
         role: ''
       }
      },
     },
    },
    viewPost: false,
   };
  },
  computed: {
   ...mapState('info', ['imgposts']),
  },
  mounted() {
   document.title = 'Post Section - Touchless Information Kiosk';
  },
  methods: {
    onSlideStart(slide) {
        this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
   formatDate(date) {
    //  return date
    const d = new Date(date);
    return (
     ('0' + d.getDate()).slice(-2) +
     '-' +
     ('0' + (d.getMonth() + 1)).slice(-2) +
     '-' +
     d.getFullYear() +
     ' ' +
     ('0' + d.getHours()).slice(-2) +
     ':' +
     ('0' + d.getMinutes()).slice(-2)
    );
   },
   currentNumber(i) {
    return i + 1 < 10 ? `0${i + 1}` : i + 1;
   },
   onMouseDown(e) {
    this.isDown = true;
    this.startX = e.pageX - this.$refs.horizontalpost.offsetLeft;
    this.scrollLeft = this.$refs.horizontalpost.scrollLeft;
   },
   onMouseUp() {
    this.isDown = false;
   },
   onMouseMove(e) {
    if (!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.$refs.horizontalpost.offsetLeft;
    const walk = (x - this.startX) * 1.6; //scroll-fast
    this.$refs.horizontalpost.scrollLeft = this.scrollLeft - walk;
   },
   setViewPost(data) {
    this.selectedPost = data;
    this.viewPost = true;
   },
  },
 };
 </script>

<style>
 .announcement-text {
  font-size: 1.5rem;
 }

 .close-text {
  position: fixed;
  bottom: 2rem;
  left: 3rem;
  font-size: 0.9rem;
  color: rgb(190, 190, 190);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
 }

 .post-selected {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 200;
  background: rgba(0, 0, 0, 0.836);
  padding-top: 7rem;
  overflow: auto;
  padding-bottom: 6rem;
 }

 .added-by {
  position: absolute;
  bottom: 1rem;
  color: rgb(223, 223, 223);
  font-weight: 400;
  left: 1.5rem;
  font-size: 0.9rem;
 }

 .ql-align-justify {
  text-align: justify;
  text-justify: inter-word;
 }

 .img-container {
   max-height: 600px;
   max-width: 100%;
 }

 .img-selected {
   position: fixed;
   background: rgba(0, 0, 0, 0.753);
   inset: 0;
   z-index: 150;
 }

 .img-selected img{
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   height: 100vh;
   width: 100%;
   object-fit: contain;
 }

 .letter-spacing-1 {
  letter-spacing: 1px;
 }
</style>
