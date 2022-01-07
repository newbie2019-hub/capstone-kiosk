<template>
 <div>
  <div class="container vh-100">
    <!-- <div class="currentTime">
      <h4 class="text-white">{{time}}</h4>
    </div> -->
    <div class="d-flex flex-column h-100 g-0 justify-content-center text-white">
      <div class="col-12">
        <div class="row">
          <h1>Welcome</h1>
          <h5 class="fw-light">Please select an option to begin.</h5>
        </div>
      </div>
      <div class="col-12 mt-5">
        <div class="row gx-4">
          <div class="col-4">
            <router-link to="/menu" class="text-decoration-none text-white">
              <div class="card cursor-pointer">
                <i class="fas fa-home card--icon"></i>
                <div class="position-absolute end-0 top-0">
                  <p class="mt-3 me-4 text-light fw-light">01</p>
                </div>
                <div class="card-small">
                  <div class="card-content">
                    <h5>Main Menu</h5>
                    <!-- <p class="mt-2">Section for the latest announcements and other stuffs.</p> -->
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-4">
            <router-link to="/announcement" class="text-decoration-none text-white">
              <div class="card cursor-pointer">
                <i class="fas fa-bullhorn card--icon"></i>
                <div class="position-absolute end-0 top-0">
                  <p class="mt-3 me-4 text-light fw-light">02</p>
                </div>
                <div class="card-small">
                  <div class="card-content">
                    <h5 class="">Announcements</h5>
                    <!-- <p class="mt-2">Stay updated with the University’s current happenings.</p> -->
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-4">
            <router-link to="/tutorial" class="text-decoration-none text-white">
              <div class="card cursor-pointer">
                <i class="fas fa-hand-paper card--icon"></i>
                <div class="position-absolute end-0 top-0">
                  <p class="mt-3 me-4 text-light fw-light">03</p>
                </div>
                <div class="card-small">
                  <div class="card-content">
                    <h5 class="">Gesture Tutorial</h5>
                    <!-- <p class="mt-2">Learn how to navigate the system by using the hand gestures</p> -->
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <p class="mt-3 text-muted">This was made possible by <a href="https://google.github.io/mediapipe/solutions/hands" target="_" class="text-decoration-none">MediaPipe Hands Model</a></p>
        </div>
      </div>
    </div>
   <p class="official-lnu-text">LNU Official Website: <a class="text-decoration-none" href="https://lnu.edu.ph" target="_">Click Here</a></p>
  </div>
  <!-- <ClickGesture/> -->
 </div>
</template>
<script>
// import ClickGesture from '../components/ClickGesture.vue'
export default {
  name: 'Home',
  data() {
    return {
      time: '',
    }
  },
  mounted(){
  },
  methods: {

  }
}
</script>
<style>
.currentTime {
  position: absolute;
  top: 5rem;
  right: 9rem;
}
.official-lnu-text {
  position: absolute;
  bottom: 20px;
  left: 35px;
  letter-spacing: 1px;
  color: rgb(209, 209, 209);

}

</style>
