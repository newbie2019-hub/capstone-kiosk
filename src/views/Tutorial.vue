<template>
 <div>
  <div class="container mt-5">
   <div class="grid-container-home">
      <div class="title-home">
        <h2 class="text-center">WELCOME, USER!</h2>
        <p class="text-center text-subheading">Please read and follow the instructions carefully</p>
      </div>
       <main class="grid-item main mt-1">
        <div class="items" ref="horizontal" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
          <div class="item-tutorial">
           <div id="tutorialcard" class="item-tutorial-card">
            <div class="d-flex w-100">
              <p class="mt-4 ms-4 fw-light">• 01</p>
              <div class="d-flex w-100 justify-content-end">
               <p class="mt-4 me-4 fw-light">SHOW YOUR HANDS</p>
              </div>
            </div>
            <img src="@/assets/images/move.gif" class="" width="" alt="">
             <div class="position-absolute ms-4 mb-3 bottom-0 text-wrap lh-0 fw-light ">
               Show your hands to the camera. Please use slow hand movements as possible
             </div>
           </div>
          </div>
          <div ref="scrollgesture" class="item-tutorial">
           <div id="tutorialcard" class="item-tutorial-card">
            <div class="d-flex w-100">
              <p class="mt-4 ms-4 fw-light">• 02</p>
              <div class="d-flex w-100 justify-content-end">
               <p class="mt-4 me-4 fw-light">SCROLL GESTURE</p>
              </div>
            </div>
            <img src="@/assets/images/horizontal.gif" class="" width="" alt="">
             <div class="position-absolute ms-4 mb-3 bottom-0 text-wrap lh-0 fw-light ">
               To scroll, simply pinch your fingers and drag from left to right or vice-versa to scroll horizontally. 
             </div>
           </div>
          </div>
          <div class="item-tutorial">
           <div id="tutorialcard" class="item-tutorial-card">
            <div class="d-flex w-100">
              <p class="mt-4 ms-4 fw-light">• 03</p>
              <div class="d-flex w-100 justify-content-end">
               <p class="mt-4 me-4 fw-light">VERTICAL SCROLL</p>
              </div>
            </div>
            <img src="@/assets/images/vertical.gif" class="" width="" alt="">
             <div class="position-absolute ms-4 mb-3 pe-3 bottom-0 text-wrap lh-0 fw-light ">
              To scroll vertically, simply pinch your fingers and drag from top to bottom or vice-versa to scroll.
             </div>
           </div>
          </div>
          <div class="item-tutorial">
           <div id="tutorialcard" class="item-tutorial-card">
            <div class="d-flex w-100">
              <p class="mt-4 ms-4 fw-light">• 04</p>
              <div class="d-flex w-100 justify-content-end">
               <p class="mt-4 me-4 fw-light">RETURN GESTURE</p>
              </div>
            </div>
            <img src="@/assets/images/return.gif" class="" width="" alt="">
             <div class="position-absolute ms-4 mb-3 pe-3 bottom-0 text-wrap lh-0 fw-light ">
               To return, simply turn your hands to face your palm towards your face and wait for the countdown to reach zero
             </div>
           </div>
          </div>
          <div class="item-tutorial">
           <div id="tutorialcard" class="item-tutorial-card" @click="setTutorialState">
            <div class="d-flex w-100">
              <p class="mt-4 ms-4 fw-light">• 05</p>
              <div class="d-flex w-100 justify-content-end">
               <p class="mt-4 me-4 fw-light">CLICK GESTURE</p>
              </div>
            </div>
            <img src="@/assets/images/click.gif" class="" width="" alt="">
             <div :class="clickCount > 0 ? 'mb-4' : ''" class="position-absolute ms-4 mb-3 pe-3 bottom-0 text-wrap lh-0 fw-light ">
               {{clickCount == 0 ? 'To click an element, simply hover to an element and pinch and unpinch your fingers to click.' : clickCount >= 2 ? `Click this card ${3 - clickCount} more time to proceed to main menu` : `Click this card ${3 - clickCount} more times to proceed to main menu`}} 
             </div>
           </div>
          </div>
        </div>
      </main>
   </div>
  </div>
  <div class="tutorial-note">
   <p>Please use slow hand movements</p>
  </div>
 </div>
</template>
<script>
export default {
  data() {
    return {
      clickCount: 0,

    }
  },
  mounted(){
    document.addEventListener('hands-shown', (event) => {
      this.handsShown()
    })

  },
  methods: {
    handsShown(){
      this.$refs.horizontal.scrollLeft = this.$refs.scrollgesture.offsetLeft
    },
    setTutorialState(){
     if(this.clickCount >= 2){
      this.$store.commit('info/SET_TUTORIAL_STATE', false)
     }
     else {
      this.clickCount++
     }
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
      const walk = (x - this.startX) * 1.2; //scroll-fast
      this.$refs.horizontal.scrollLeft = this.scrollLeft - walk;
    },
  }
  
}
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
  font-size: .85rem;
}
</style>
