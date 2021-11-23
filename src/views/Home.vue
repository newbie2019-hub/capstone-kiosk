<template>
 <div>
    <full-page ref="fullpage" :options="options">
      <div class="section">
        <div class="container-fluid pt-5 pe-5 ps-5 pb-5">
          <div v-once class="row gx-2 justify-content-center">
            <div class="col-md-6 col-lg-6">
              <router-link v-once to="/university" class="text-decoration-none">
                <div v-once class="card">
                  <img src="@/assets/images/university.jpg" alt="">
                  <div class="card-content">
                    <h5>University</h5>
                    <p>A leading university of education and diverse disciplines attuned to local and global development needs</p>
                  </div>
                  <div class="card-border card-border-university"></div>
                </div>
              </router-link>
            </div>
            <div class="col-md-6 col-lg-3">
              <router-link to="/feedback" class="text-decoration-none">
                <div class="card">
                  <div class="card-small">
                    <img v-once src="@/assets/images/feedback.jpg" alt="">
                    <div class="card-content">
                      <h5>Feedback</h5>
                      <p>To help us improve our system please leave a some review.</p>
                    </div>
                  </div>
                  <div v-once class="card-border card-border-feedback "></div>
                </div>
              </router-link>
            </div>
            <div v-once class="col-md-6 col-lg-3">
              <router-link v-once to="/programs" class="text-decoration-none">
                <div class="card">
                    <img src="@/assets/images/university-logo.png" alt="">
                    <div class="card-content">
                      <h5 v-once>COLLEGES</h5>
                      <p v-once>See what programs are offered by the university.</p>
                    </div>
                  <div class="card-border card-border-university "></div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="row gx-2 justify-content-center mt-2">
            <div class="col-md-6 col-lg-6">
              <router-link v-once to="/announcement" class="text-decoration-none">
                <div class="card">
                  <div class="card-small">
                    <img v-once src="@/assets/images/announcement.jpg" alt="">
                    <div class="card-content">
                      <h5>Announcement</h5>
                      <p>Stay updated with the University’s current events, announcements and news.</p>
                    </div>
                  </div>
                  <div v-once class="card-border card-border-announcement"></div>
                </div>
              </router-link>
            </div>
            <div v-once class="col-md-6 col-lg-3">
              <router-link v-once to="/entertainment" class="text-decoration-none">
                <div v-once class="card">
                  <div class="card-small">
                    <img v-once src="@/assets/images/entertainment.jpg" alt="">
                    <div v-once class="card-content">
                      <h5 v-once>Entertainment</h5>
                      <p v-once>Have some fun and learn other possibilities with touchless technology.</p>
                    </div>
                  </div>
                  <div v-once class="card-border card-border-entertainment"></div>
                </div>
              </router-link>
            </div>
            <div class="col-md-6 col-lg-3">
              <router-link to="/tutorial" class="text-decoration-none">
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
        <down-arrow/>
      </div>
      <div class="section">
        <div class="container-fluid h-100 p-5">
          <div class="row">
            <core-value/>
          </div>
        </div>
        <down-arrow/>
      </div>
      <div class="section">
        <div class="container-fluid h-100 p-5">
          <div class="row">
            <mission-vision/>
          </div>
        </div>
      </div>
    </full-page>
 </div>
</template>
<script>
import CoreValue from './CoreValues.vue'
import MissionVision from './Mission.vue'
import DownArrow from '../components/DownArrow.vue'
export default {
  name: 'Home',
  data() {
    return {
      options: {
        licenseKey: 'none',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#00000000', '#00000000', '#00000000'],
        recordHistory: false,
      },
    }
  },
  mounted() {
    document.title = 'Touchless Information Kiosk - Main Menu'
    document.addEventListener('scroll-up', () => {
      this.$refs.fullpage.api.moveSectionUp()
    })
    document.addEventListener('scroll-down', () => {
      this.$refs.fullpage.api.moveSectionDown()
    })
  },
  components: {CoreValue, MissionVision,  DownArrow},
}
</script>
