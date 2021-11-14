<template>
  <div>
    <div class="container-fluid" style="height: 100vh">
      <canvas class="drawcanvas" ref="drawcanvas" id="drawcanvas" @mousedown="startPosition" @mouseup="finishedPosition" @mousemove="draw"></canvas>
      <div class="clear" @click.prevent="clearCanvas" >Clear</div>
    </div>
    <return-gesture />
  </div>
</template>
<script>
import ReturnGesture from '../../components/ReturnGesture.vue'
export default {
 components: {ReturnGesture},
  data() {
    return {
      painting: false,
      ctx: '',
      color: 'white',
      lineWidth: 8,
      
    }
  },
  mounted() {
   const canvas = document.querySelector('#drawcanvas');
   canvas.setAttribute('width', window.innerWidth)
   canvas.setAttribute('height', window.innerHeight)
   const ctx_i = canvas.getContext('2d');

   ctx_i.width = window.innerWidth;
   ctx_i.height = window.innerHeight;
   this.ctx = ctx_i
  },
  methods: {
    startPosition(e){
      this.painting = true;
      this.draw(e)
    },
    draw(e){
      if(!this.painting) return
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.lineCap = 'round';
      this.ctx.strokeStyle = this.color;
      this.ctx.lineTo(e.clientX, e.clientY);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo(e.clientX, e.clientY);
    },
    finishedPosition(){
      this.painting = false;
      this.ctx.beginPath();
    },
    clearCanvas(){
      this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);
    }
  },

}
</script>
<style>
.clear {
  height: 120px;
  width: 120px;
  position: fixed;
  top: 50%;
  right: 6rem;
  transform: translateY(-50%);
  margin-left: 2rem;
  color: white;
  display: flex;
  letter-spacing: 1px;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  
}

.model-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  padding: 2rem 5rem;
  
}

.drawcanvas {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
}
</style>