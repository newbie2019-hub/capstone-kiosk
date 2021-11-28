<template>
 <div>
    <full-page ref="fullpageuniversity" :options="options">
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
   <return-gesture/>
 </div>
</template>
<script>
import { mapState } from 'vuex'
import DownArrow from '../../components/DownArrow.vue'
import ReturnGesture from '../../components/ReturnGesture.vue'

export default {
 components: {ReturnGesture, DownArrow},
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
  mounted() {DownArrow
    document.title = 'Touchless Information Kiosk - FAQs'
    
    document.addEventListener('scroll-up', () => {
      this.$refs.fullpageuniversity.api.moveSectionUp()
      console.clear()
    })

    document.addEventListener('scroll-down', () => {
      this.$refs.fullpageuniversity.api.moveSectionDown()
      console.clear()
    })
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
  computed: {
    ...mapState('info', ['faqs'])
  }
}
</script>
