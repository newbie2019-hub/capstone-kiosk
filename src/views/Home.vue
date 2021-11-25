<template>
 <div>
  <div class="container vh-100">
    <div class="d-flex flex-column h-100 g-0 align-items-center justify-content-center text-white">
      <div class="col-12">
        <div class="row">
          <h1>Hello, User!</h1>
          <h5>Welcome, please select a card to start.</h5>
        </div>
      </div>
      <div class="col-12 mt-5 mb-5">
        <div class="row gx-4">
          <div class="col-4">
            <router-link to="/menu" class="text-decoration-none">
              <div class="card cursor-pointer">
                <div class="card-small">
                  <img v-once src="@/assets/images/university.jpg" alt="">
                  <div class="card-content">
                    <h5>Menu</h5>
                    <p>Section for the latest announcements and other stuffs.</p>
                  </div>
                </div>
                <div class="card-border card-border-feedback"></div>
              </div>
            </router-link>
          </div>
          <div class="col-4">
            <router-link to="/announcement" class="text-decoration-none">
              <div class="card cursor-pointer">
                <div class="card-small">
                  <img v-once src="@/assets/images/announcement.jpg" alt="">
                  <div class="card-content">
                    <h5>Announcement</h5>
                    <p>Stay updated with the University’s current happenings.</p>
                  </div>
                </div>
                <div class="card-border card-border-entertainment"></div>
              </div>
            </router-link>
          </div>
          <div class="col-4">
            <router-link to="/tutorial" class="text-decoration-none text-white">
              <div class="card cursor-pointer">
                <div class="card-small">
                  <img v-once src="@/assets/images/tutorial.jpg" alt="">
                  <div class="card-content">
                    <h5>Gesture Tutorial</h5>
                    <p>Learn how to navigate the system by using the hand gestures</p>
                  </div>
                </div>
                <div class="card-border card-border-feedback"></div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <click-gesture/>
 </div>
</template>
<script>
import ClickGesture from '../components/ClickGesture.vue'
export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {ClickGesture}
}
</script>
<style>
.feedback-container {
  display: flex;
  width: 100%;
  padding: 4rem 1rem 4rem 1rem!important;
  margin-top: .6rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.feedback-emoji {
  font-size: 8.5rem !important;
}
</style>
