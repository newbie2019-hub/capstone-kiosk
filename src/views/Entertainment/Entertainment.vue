<template>
 <div>
  <div class="grid-container">
   <div class="title">
    <h2 class="text-center ">ENTERTAINMENT</h2>
    <p class="text-subheading">Pinch and drag to scroll left or right</p>
   </div>
   <main class="grid-item main">
    <div class="items" ref="horizontalentertainment" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp" >
     <router-link to='/entertainment/draw' class="text-decoration-none text-white">
      <div id="introcard" class="item item-entertainment ecard">
        <div class="d-flex justify-content-end">
          <p class="mt-3 me-4 fw-light">01</p>
        </div>
        <img id="introcard" class="program-img" src="@/assets/images/draw.jpg" alt="">
        <div class="position-absolute bottom-0 mb-4 ms-4">
          <h6 class="text-uppercase">DRAW CANVAS</h6>
          <p class="fw-light text-wrap lh-0 mt-3">Draw something in the air with your hands.</p>
        </div>
      </div>
     </router-link>
    </div>
   </main>
  </div>
 </div>
</template>
<script>
 export default {
   methods: {
    onMouseDown(e) {
     this.isDown = true;
     this.startX = e.pageX - this.$refs.horizontalentertainment.offsetLeft;
     this.scrollLeft = this.$refs.horizontalentertainment.scrollLeft;
    },
    onMouseUp() {
     this.isDown = false;
    },
    onMouseMove(e) {
     if (!this.isDown) return;
     e.preventDefault();
     const x = e.pageX - this.$refs.horizontalentertainment.offsetLeft;
     const walk = (x - this.startX) * 1.2; //scroll-fast
     this.$refs.horizontalentertainment.scrollLeft = this.scrollLeft - walk;
    },
   },

 };
</script>
