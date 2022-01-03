<template>
 <div>
  <div class="container vh-100">
   <!-- <div class="currentTime">
    <h4 class="text-white">{{ time }}</h4>
   </div> -->
   <div class="d-flex flex-column h-100 g-0 justify-content-center text-white">
    <div class="col-12">
     <h1 class="text-uppercase fw-bold text-center">Navigation Gestures</h1>
     <h5 class="fw-light text-center mb-4">We'll walk you through the navigation gestures for this system</h5>
    </div>
    <div class="grid-container-home">
     <main class="grid-item main mt-1">
      <div class="items" ref="horizontal" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
       <div class="item-tutorial">
        <div id="tutorialcard" class="position-absolute w-100 h-100">
         <div class="row w-100 h-100 justify-content-center align-items-center">
          <div class="col-4">
           <img src="@/assets/images/move-transparent.gif" class="" width="" alt="" />
           <h5 class="me-4 fw-light">• 01 - SHOW YOUR HANDS</h5>
          </div>
          <div class="col-5 text-wrap">
           <h3 class="fw-light">INSTRUCTION</h3>
           <br />
           <h4 class="fw-light">Show your hands to the camera and please make sure that your whole hand is visible.</h4>
           <br />
           <span class="fw-light text-subheading">Note: Please use slow hand movements as possible.</span>
          </div>
          <p class="text-center fw-light">1 - 5</p>
         </div>
        </div>
       </div>
       <div ref="scrollgesture" class="item-tutorial">
        <div id="tutorialcard" class="position-absolute w-100 h-100">
         <div class="row w-100 h-100 justify-content-center align-items-center">
          <div class="col-4">
           <img src="@/assets/images/horizontal-transparent.gif" class="" width="" alt="" />
           <h5 class="me-4 fw-light">• 02 - HORIZONTAL SCROLL</h5>
          </div>
          <div class="col-5 text-wrap">
           <h3 class="fw-light">INSTRUCTION</h3>
           <br />
           <h4 class="fw-light">
            To scroll horizontally, simply pinch your fingers and drag from left to right or vice-versa to scroll
            horizontally.
           </h4>
           <br />
           <span class="fw-light text-subheading">Scroll to the right to proceed</span>
          </div>
          <p class="text-center fw-light">2 - 5</p>
         </div>
        </div>
       </div>
       <div class="item-tutorial">
        <div id="tutorialcard" class="position-absolute w-100 h-100">
         <div class="row w-100 h-100 justify-content-center align-items-center">
          <div class="col-4">
           <img src="@/assets/images/vertical-transparent.gif" class="" width="" alt="" />
           <h5 class="me-4 fw-light">• 03 - VERTICAL SCROLL</h5>
          </div>
          <div class="col-5 text-wrap">
           <h3 class="fw-light">INSTRUCTION</h3>
           <br />
           <h4 class="fw-light">
            To scroll vertically, simply pinch your fingers and drag from top to bottom or vice-versa to scroll.
           </h4>
           <br />
           <span class="fw-light text-subheading">Note: This gesture will work if the scrollbar is visible.</span>
          </div>
          <p class="text-center fw-light">3 - 5</p>
         </div>
        </div>
       </div>
       <div class="item-tutorial">
        <div id="tutorialcard" class="position-absolute w-100 h-100">
         <div class="row w-100 h-100 justify-content-center align-items-center">
          <div class="col-4">
           <img src="@/assets/images/click-transparent.gif" class="" width="" alt="" />
           <h5 class="me-4 fw-light">• 04 - CLICK GESTURE</h5>
          </div>
          <div class="col-5 text-wrap">
           <h3 class="fw-light">INSTRUCTION</h3>
           <br />
           <h4 class="fw-light">
            To click, simply hover to an element and make a peace gesture and release after then
           </h4>
           <br />
          </div>
          <p class="text-center fw-light">4 - 5</p>
         </div>
        </div>
       </div>
       <div class="item-tutorial">
        <div id="tutorialcard" class="position-absolute w-100 h-100">
         <div class="row w-100 h-100 justify-content-center align-items-center">
          <div class="col-4">
           <img src="@/assets/images/return-transparent-tutorial.gif" class="" width="" alt="" />
           <h5 class="me-4 fw-light">• 05 - RETURN GESTURE</h5>
          </div>
          <div class="col-5 text-wrap">
           <h3 class="fw-light">INSTRUCTION</h3>
           <br />
           <h4 class="fw-light">
            To return to previous page, simply turn your hands to face your palm towards your face and wait for the
            countdown to reach zero
           </h4>
           <br />
          </div>
          <p class="text-center fw-light">5 - 5</p>
         </div>
        </div>
       </div>
      </div>
     </main>
    </div>
   </div>
   <div class="tutorial-note">
    <p ref="txttutorial">Please use slow hand movements</p>
   </div>
  </div>
 </div>
</template>
<script>
 export default {
  data() {
   return {
    clickCount: 0,
    currentTxt: 0,
    showHands: false,
   };
  },
  mounted() {
   this.showHands = false;
   document.addEventListener('hands-shown', (event) => {
    if (!this.showHands) {
     this.handsShown();
     this.showHands = true;
    }
   });
  },
  methods: {
   handsShown() {
    setTimeout(() => {
     this.$refs.horizontal.scrollLeft = this.$refs.scrollgesture.offsetLeft;
    }, 1200);
   },
   onMouseDown(e) {
    this.isDown = true;
    this.startX = e.pageX - this.$refs.horizontal.offsetLeft;
    this.scrollLeft = this.$refs.horizontal.scrollLeft;
   },
   onMouseUp() {
    this.isDown = false;
   },
   onMouseMove(e) {
    if (!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.$refs.horizontal.offsetLeft;
    const walk = (x - this.startX) * 1.6; //scroll-fast
    this.$refs.horizontal.scrollLeft = this.scrollLeft - walk;
   },
  },
 };
</script>
<style>
 .tutorial-note {
  position: absolute;
  bottom: 2rem;
  color: rgb(240, 240, 240);
  font-weight: 400;
  left: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
 }
</style>
