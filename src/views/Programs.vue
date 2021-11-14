<template>
  <div>
    <div class="programs-overlay" v-if="cardClicked">
      <div class="grid-container" v-if="cardClicked">
        <div class="title">
          <h2 class="text-center ">SELECT A CARD</h2>
          <p class="text-muted">Pinch on a card to view details</p>
          <a href="" @click.prevent="cardClicked = false" class="text-decoration-none text-info fw-bold mt-2">CLOSE</a>
        </div>
        <main class="grid-item main">
          <div class="items" ref="horizontalpopup" @mousedown="onMouseDownPopup" @mousemove="onMouseMovePopup" @mouseup="onMouseUpPopup">
            <div id="introcard" class="item-popup popupcard" @click="isProgram = true">
              <img id="introcard" class="program-img" src="@/assets/images/university.jpg" alt="">
              <div class="introcard-description">
                <h6 class="text-uppercase text-center mt-5">PROGRAMS</h6>
              </div>
            </div>
            <div id="introcard" class="item-popup popupcard" @click="isObjective = true">
              <img id="introcard" class="program-img" src="@/assets/images/objective.jpg" alt="">
              <div class="introcard-description">
                <h6 class="text-uppercase text-center mt-5">OBJECTIVES</h6>
              </div>
            </div>
            <div id="introcard" class="item-popup popupcard" @click="isProgram = false; isObjective = false; isGoal = true">
              <img id="introcard" class="program-img" src="@/assets/images/goals.jpg" alt="">
              <div class="introcard-description">
                <h6 class="text-uppercase text-center mt-5">GOALS</h6>
              </div>
            </div>
          </div>
        </main>
      </div>
      <p class="close-text">COLLEGES, PROGRAMS, OBJECTIVES</p>
    </div>

    <div class="programs-content" v-if="isProgram" @click="isProgram = false">
      <div class="programs">
        <h2 class="text-center text-white text-uppercase font-weight-400">Programs Offered</h2>
        <div class="mt-4">
          <h4 class="text-center text-white font-weight-400" v-for="course in selectedCollege.courses" :key="course.id">{{course.course_name}}</h4>
        </div>
      </div>
      <p class="close-text">Click anywhere to close</p>
    </div>

    <div class="programs-content" v-if="isObjective" @click="isObjective = false">
      <div class="programs">
        <h2 class="text-center text-white text-uppercase font-weight-400">OBJECTIVES</h2>
        <div class="mt-4">
          <h4 class="text-white text-center font-weight-400 mt-3" v-for="(objective, i) in selectedCollege.objectives" :key="i">{{objective.objective}}</h4>
        </div>
      </div>
      <p class="close-text">Click anywhere to close</p>
    </div>

    <div class="programs-content" v-if="isGoal" @click="isGoal = false">
      <div class="programs">
        <h2 class="text-center text-white text-uppercase font-weight-400">GOALS</h2>
        <div class="mt-4">
           <h4 class="text-center text-white font-weight-400" v-for="goal in selectedCollege.goals" :key="goal.id">{{goal.goal}}</h4>
        </div>
      </div>
      <p class="close-text">Click anywhere to close</p>
    </div>

    <div class="grid-container">
      <div class="title">
        <h2 class="text-center ">BASIC EDUCATION AND COLLEGES</h2>
        <p class="text-subheading">Pinch on a card to view more details</p>
      </div>
       <main class="grid-item main">
        <div class="items" ref="horizontal" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
          <div id="introcard" class="item itemcard" v-for="(college, i) in colleges" :key="i" v-on:click.prevent="selectedCollege = {...college}; cardClicked = true">
            <div class="d-flex justify-content-end">
              <p class="mt-3 me-4 fw-light">{{currentNumber(i)}}</p>
            </div>
            <img v-if="i == 0" id="introcard" class="program-img" src="@/assets/images/programs/0.jpg" alt="">
            <img v-if="i == 1" id="introcard" class="program-img" src="@/assets/images/programs/1.jpg" alt="">
            <img v-if="i == 2" id="introcard" class="program-img" src="@/assets/images/programs/2.jpg" alt="">
            <img v-if="i == 3" id="introcard" class="program-img" src="@/assets/images/programs/0.jpg" alt="">
            <div class="introcard-description">
              <h6 class="text-uppercase mt-4 text-center">{{college.name}}</h6>
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
import ReturnGesture from '../components/ReturnGesture.vue'
export default {
 components: {ReturnGesture},
  data() {
    return {
      selectedCollege: '',
      cardClicked: false,
      isProgram: false,
      isObjective: false,
      isGoal: false,
    }
  },
  mounted(){
    
  },
  watch: {
    cardClicked: function(){
      if(this.cardClicked){
        setTimeout(() => {
          this.$refs.horizontalpopup.scrollLeft = '180';
        }, 20);
      }
    }
  },
  methods: {
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
      const walk = (x - this.startX) * 1.2; //scroll-fast
      this.$refs.horizontal.scrollLeft = this.scrollLeft - walk;
    },
    onMouseDownPopup(e) {
      this.isDown = true
      this.startX = e.pageX - this.$refs.horizontalpopup.offsetLeft;
      this.scrollLeft = this.$refs.horizontalpopup.scrollLeft;
    },
    onMouseUpPopup() {
      this.isDown = false
    },
    onMouseMovePopup(e) {
      if(!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - this.$refs.horizontalpopup.offsetLeft;
      const walk = (x - this.startX) * 1.2; //scroll-fast
      this.$refs.horizontalpopup.scrollLeft = this.scrollLeft - walk;
    },
    
  },
  computed: {
  ...mapState('info', ['colleges'])
  }
}
</script>
<style>
.programs-overlay {
  background: rgba(0, 0, 0, 0.856);
  position: fixed;
  height: 100vh;
  width: 100%;
  padding: 0rem 14rem 0rem 14rem;
  margin-bottom: 4rem;
  z-index: 100;
  top: 0;
  left: 0;
  overflow: auto;
}

.programs-container {
  position: relative;
}

.close-text{
  position: fixed;
  bottom: 2rem;
  left: 3rem;
  font-size: .9rem;
  color: rgb(187, 187, 187);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
}

.programs-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 200;
  background: rgba(0, 0, 0, 0.904);
}

.programs {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>


