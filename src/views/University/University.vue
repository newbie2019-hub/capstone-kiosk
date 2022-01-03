<template>
 <div>
   <div class="container vh-100" @mouseup="onMouseUp">
   <!-- <div class="currentTime">
    <h4 class="text-white">{{ time }}</h4>
   </div> -->
   <div class="d-flex flex-column h-100 g-0 justify-content-center text-white">
    <div class="col-12">
      <h1 class="text-uppercase fw-bold">The University</h1>
      <h5 class="fw-light">Scroll to the left by pinch and drag to see more options</h5>
      <h5 class="fw-light mt-5 mb-3">Select an option to proceed.</h5>
    </div>
    <div class="grid-container">
      <main class="grid-item main">
        <div class="items" ref="horiscroll" @mousedown="onMouseDown" @mousemove="onMouseMove">
          <router-link to="/university/departments" class="text-decoration-none">
            <div id="introcard" class="item item-post cardhover">
              <i class="fas fa-history card--icon"></i>
              <div class="card-content text-wrap text-uppercase">
                <h5>History</h5>
              </div>   
            </div>
          </router-link>
          <router-link to="/university/departments" class="text-decoration-none">
            <div id="introcard" class="item item-post cardhover">
              <i class="fas fa-list-ol card--icon"></i>
              <div class="card-content text-wrap text-uppercase">
                <h5>Units</h5>
              </div>   
            </div>
          </router-link>
          <router-link to="/university/organization" class="text-decoration-none">
            <div id="introcard" class="item item-post cardhover">
              <i class="fas fa-sitemap card--icon"></i>
              <div class="card-content text-wrap text-uppercase">
                <h5>Organizations</h5>
              </div>   
            </div>
          </router-link>
          <router-link to="/programs" class="text-decoration-none">
            <div id="introcard" class="item item-post cardhover">
              <i class="fas fa-list-ul card--icon"></i>
              <div class="card-content text-wrap text-uppercase">
                  <h5>Programs</h5>
              </div>   
            </div>
          </router-link>
          <router-link to="/hymn" class="text-decoration-none">
            <div id="introcard" class="item item-post cardhover">
              <i class="fas fa-music card--icon"></i>
              <div class="card-content">
                <div class="text-wrap text-uppercase">
                  <h5>Hymn</h5>
                </div>
              </div>   
            </div>
          </router-link>
          <router-link to="/university/teldirectory" class="text-decoration-none">
            <div id="introcard" class="item item-post cardhover">
              <i class="fas fa-phone card--icon"></i>
              <div class="card-content">
                <div class="text-wrap text-uppercase">
                  <h5>Tel Directory</h5>
                </div>
              </div>   
            </div>
          </router-link>
          <router-link to="/university/mission-vision" class="text-decoration-none">
            <div id="introcard" class="item item-post cardhover">
              <i class="fas fa-bullseye card--icon"></i>
              <div class="card-content">
                <div class="text-wrap text-uppercase">
                  <h5>Mission / Vision</h5>
                </div>
              </div>   
            </div>
          </router-link>
          <router-link to="/university/schoolofficials" class="text-decoration-none">
            <div id="introcard" class="item item-post cardhover">
              <i class="fas fa-users card--icon"></i>
              <div class="card-content">
                <div class="text-wrap text-uppercase">
                  <h5>School Officials</h5>
                </div>
              </div>   
            </div>
          </router-link>
          <router-link to="/university/qualitypolicy" class="text-decoration-none">
            <div id="introcard" class="item item-post cardhover">
              <i class="fas fa-check card--icon"></i>
              <div class="card-content">
                <div class="text-wrap text-uppercase">
                  <h5>Quality Policy</h5>
                </div>
              </div>   
            </div>
          </router-link>
        </div>
      </main>
    </div>
   </div>
  </div>
  <return-gesture/>
    <!-- <full-page ref="fullpageuniversity" :options="options">
      <div class="section">
        <div class="container-fluid p-5">
          <div class="row gx-2 justify-content-center">
            <div class="col-md-6 col-lg-6">
              <router-link to="/university/departments" class="text-decoration-none">
                <div v-once class="card">
                  <img v-once src="@/assets/images/departments.jpg" alt="" loading=lazy>
                  <div class="card-content">
                    <h5>UNITS</h5>
                    <p>Stay updated with the latest events on the units of the university.</p>
                  </div>
                  <div class="card-border card-border-department"></div>
                </div>
              </router-link>
            </div>
            <div class="col-md-6 col-lg-3">
              <router-link to="/university/organization" class="text-decoration-none">
                <div v-once class="card">
                  <div class="card-small">
                    <img v-once src="@/assets/images/university-logo.png" alt="" loading=lazy>
                    <div class="card-content">
                      <h5>ORGANIZATIONS</h5>
                      <p>Stay updated with the latest events on the organizations.</p>
                    </div>
                  </div>
                  <div class="card-border card-border-feedback "></div>
                </div>
              </router-link>
            </div>
            <div class="col-md-6 col-lg-3">
              <router-link to="/programs" class="text-decoration-none">
                <div v-once class="card">
                    <img v-once src="@/assets/images/university-logo.png" alt="" loading=lazy>
                    <div class="card-content">
                      <h5>COLLEGES</h5>
                      <p>See what programs are offered by the university.</p>
                    </div>
                  <div class="card-border card-border-university "></div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="row gx-2 justify-content-center mt-2">
            <div class="col-md-6 col-lg-3">
              <router-link to="/hymn" class="text-decoration-none">
                <div v-once class="card">
                  <div class="card-small">
                    <img v-once src="@/assets/images/university-logo.png" alt="" loading=lazy>
                    <div class="card-content">
                      <h5>LNU HYMN</h5>
                      <p>Learn the lyrics of the unvirsity hymn.</p>
                    </div>
                  </div>
                  <div class="card-border card-border-feedback "></div>
                </div>
              </router-link>
            </div>
            <div class="col-md-6 col-lg-3">
              <router-link to="/university/teldirectory" class="text-decoration-none">
                <div v-once class="card">
                  <div class="card-small">
                    <img v-once src="@/assets/images/telephone.jpg" alt="" loading=lazy>
                    <div class="card-content">
                    <h5>TELEPHONE DIRECTORY</h5>
                      <p>List of telephone numbers on the university.</p>
                    </div>
                  </div>
                  <div class="card-border card-border-telephone "></div>
                </div>
              </router-link>
            </div>
            <div class="col-md-6 col-lg-6">
              <router-link to="/university/schoolofficials" class="text-decoration-none">
              <div v-once class="card">
                <div class="card-small">
                  <img v-once src="@/assets/images/university.jpg" alt="" loading=lazy>
                  <div class="card-content">
                    <h5>SCHOOL OFFICIALS</h5>
                    <p>Learn more about the school officials of the university.</p>
                  </div>
                </div>
                <div class="card-border card-border-entertainment"></div>
              </div>
              </router-link>
            </div>
          </div>
        </div>
        <down-arrow/>
      </div>
      <div class="section">
        <div class="container-fluid p-5">
          <h2 class="text-white mt-5">FAQS</h2>
          <p class="text-muted">Pinch on any of the question to expand</p>
          <hr v-once class="mb-5 mt-2 bg-white zindex-999"/>
          <div class="row pb-4">
            <div class="col-lg-12 mb-5">
              <div v-for="(faq, i) in faqs" :key="i">
                <button class="accordion">{{faq.question}}</button>
                <div class="panel">
                  <p>{{faq.answer}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </full-page>
   <return-gesture/> -->
 </div>
</template>
<script>
import { mapState } from 'vuex'
// import DownArrow from '../../components/DownArrow.vue'
import ReturnGesture from '../../components/ReturnGesture.vue'

export default {
 components: {ReturnGesture},
  data() {
    return {
      options: {
        licenseKey: '',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#00000000', '#00000000', '#00000000'],
        recordHistory: false,
      },
    }
  },
  mounted() {
    document.title = 'Touchless Information Kiosk - FAQs'
    // document.addEventListener('scroll-up', () => {
    //   this.$refs.fullpageuniversity.api.moveSectionUp()
    //   console.clear()
    // })

    // document.addEventListener('scroll-down', () => {
    //   this.$refs.fullpageuniversity.api.moveSectionDown()
    //   console.clear()
    // })
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  },
  methods: {
    onMouseDown(e) {
      this.isDown = true
      this.startX = e.pageX - this.$refs.horiscroll.offsetLeft;
      this.scrollLeft = this.$refs.horiscroll.scrollLeft;
    },
    onMouseUp(e) {
      this.isDown = false
    },
    onMouseMove(e) {
      if(!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - this.$refs.horiscroll.offsetLeft;
      const walk = (x - this.startX) * 1.6; //scroll-fast
      this.$refs.horiscroll.scrollLeft = this.scrollLeft - walk;
    },
  },
  computed: {
    ...mapState('info', ['faqs'])
  }
}
</script>
