<template>
  <div>
    <div class="container-fluid" style="height: 100vh">
      <!-- <img id="selected" src="@/assets/images/university.jpg" height="10" alt=""> -->
      <canvas class="drawcanvas" ref="drawcanvas" id="drawcanvas" @mousedown="startPosition" @mouseup="finishedPosition" @mousemove="draw"></canvas>
      <div class="clear" @click.prevent="clearCanvas" >Clear</div>
      <div class="erase" @click.prevent="erase = !erase" >{{erase ? 'Draw' : 'Eraser'}}</div>
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
      erase: false,
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

      if(this.erase){
        this.ctx.globalCompositeOperation='destination-out';
      }
      else {
        this.ctx.globalCompositeOperation='source-over';
      }
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
      this.erase = false
      this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);
    }
  },

}
</script>
<style>
.erase {
  height: 150px;
  width: 180px;
  position: fixed;
  top: 35%;
  right: 10rem;
  box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.068);

  transform: translateY(-50%);
  margin-left: 2rem;
  color: white;
  display: flex;
  letter-spacing: 1px;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
}

.clear {
  height: 150px;
  width: 180px;
  position: fixed;
  box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.082);
  /* border: 1px solid #fff; */
  top: 65%;
  right: 10rem;
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