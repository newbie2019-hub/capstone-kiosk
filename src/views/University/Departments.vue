<template>
  <div>
    <div class="post-selected" v-if="viewPost" @click.prevent="viewPost = false">
      <div class="row justify-content-center">
        <div class="col-6">
          <div class="d-flex align-items-center">
            <img v-once src="@/assets/images/logo.png" alt="" height="70" width="70" class="rounded-pill" loading="lazy">
            <div class="d-flex flex-column ms-4 lh-0 mx-auto text-white" style="line-height: 1.2rem">
              <h5>{{selectedPost.useraccount.userinfo.first_name}} {{selectedPost.useraccount.userinfo.last_name}}</h5>
              <h6>{{selectedPost.useraccount.userinfo.department.abbreviation ? selectedPost.useraccount.userinfo.department.abbreviation : selectedPost.useraccount.userinfo.department.name}} 
              - {{selectedPost.useraccount.userinfo.role.role}}
              </h6>
            </div>
            <div class="me-4">
              <p class="mb-4 text-white">{{formatDate(selectedPost.created_at)}}</p>
            </div>
          </div>
          <div class="text-white mt-5 announcement-text" v-html="selectedPost.postcontent.content"></div>
        </div>
      </div>
      <p class="close-text">Click anywhere to close</p>
    </div>

    <div class="popup-announcement" v-if="viewAnnouncement" @click="detectClick">
      <div class="loading" v-if="isLoading">
        <div class="spinner-border text-light" style="width: 3rem; height: 3rem;" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div class="grid-container" v-else>
        <div class="title">
          <h2 class="text-center fw-light">ANNOUNCEMENTS</h2>
          <p class="text-subheading">Pinch and drag to scroll left or right</p>
        </div>
          <main class="grid-item main">
          <div class="items" ref="popuppost" @mousedown="onMouseDownAnnouncement" @mousemove="onMouseMoveAnnouncement" @mouseup="onMouseUpAnnouncement">
            <div @click.prevent="setViewPost(post)" id="introcard" class="item item-post" v-for="(post, i) in selectedDepPost" :key="i">
              <img v-if="post.postcontent.image" :src="`https://be.lnukiosk.live/uploads/${post.postcontent.image}`" class="card-img" alt="...">
              <img v-else :src="`https://be.lnukiosk.live/defaults/university-logo.png`" class="card-img" alt="...">
              <div class="card-img-overlay text-wrap p-4">
                <h5 class="card-title">{{post.postcontent.title }}</h5>
                <p class="card-text fw-light mt-3 ql-align-justify">{{post.postcontent.post_excerpt}}</p>
              </div>
              <div class="added-by">
                <p>{{post.useraccount.userinfo.first_name}} {{post.useraccount.userinfo.last_name}}</p>
                <p>{{post.useraccount.userinfo.role.role}}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <p class="close-text">Double click anywhere to close</p>
    </div>

    <!--- DEPARTMENT GRID ----->
    <div class="grid-container">
      <div class="title">
        <h2 class="text-center fw-light">UNIT</h2>
        <p class="text-subheading">Pinch and drag to scroll left or right</p>
      </div>
       <main class="grid-item main">
        <div class="items" ref="horizontal" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
          <div @click="requestDepPost(dep.name)" id="introcard" class="item depcard" v-for="(dep, i) in departments" :key="i">
            <div class="d-flex justify-content-end">
              <p class="mt-3 me-4 fw-light">{{currentNumber(i)}}</p>
            </div>
            <img id="introcard" v-if="dep.image" :src="`https://be.lnukiosk.live/uploads/${dep.image}`"  alt="">
            <img id="introcard" v-else src="@/assets/images/logo.png" alt="">
            <div class="introcard-description">
              <h6 class="mt-2 text-uppercase text-center">{{dep.name}}</h6>
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
import ReturnGesture from '../../components/ReturnGesture.vue'
export default {
 components: {ReturnGesture},
  data(){
    return {
      selectedPost: {
        postcontent: {
          content: ''
        },
        useraccount: {
          userinfo: {
            department: {
              abbreviation: '',
              name: '',
            }
          }
        }
      },
      viewAnnouncement: false,
      viewPost: false,
      numClicks: 0,
      isLoading: false
    }
  },
  methods: {
    detectClick: function() {
      this.numClicks++;
      if (this.numClicks === 1) {   
          var self = this;
          setTimeout(function() {
              switch(self.numClicks) {  
                    case 1:
                      break;
                    default:
                      self.viewAnnouncement = false
              }
              self.numClicks = 0;       
          }, 1450);                         
      } 
    },
    setViewPost(data){
      this.selectedPost = data
      this.viewPost = true
      this.numClicks = 0
    },
    async requestDepPost(data){
      this.isLoading = true
      this.viewAnnouncement = true
      const orgdata = {
        name: data
      }
      await this.$store.dispatch('info/getSelectedDepPost', orgdata)
      this.isLoading = false
    },
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
      const walk = (x - this.startX) * 1.6; //scroll-fast
      this.$refs.horizontal.scrollLeft = this.scrollLeft - walk;
    },
    onMouseDownAnnouncement(e) {
      this.isDown = true
      this.startX = e.pageX - this.$refs.popuppost.offsetLeft;
      this.scrollLeft = this.$refs.popuppost.scrollLeft;
    },
    onMouseUpAnnouncement() {
      this.isDown = false
    },
    onMouseMoveAnnouncement(e) {
      if(!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - this.$refs.popuppost.offsetLeft;
      const walk = (x - this.startX) * 1.4; //scroll-fast
      this.$refs.popuppost.scrollLeft = this.scrollLeft - walk;
    },
    
    
  },
  computed: {
  ...mapState('info', ['departments', 'selectedDepPost'])
  }
}
</script>
<style>
.announcement-text {
  font-size: 1.5rem;
}

.post-selected {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 200;
  background: rgba(0, 0, 0, 0.836);
  padding-top: 7rem;
  overflow: auto;
  padding-bottom: 6rem;
}

.popup-announcement {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.863);
}

.added-by {
  position: absolute;
  bottom: 1rem;
  color: rgb(223, 223, 223);
  font-weight: 400;
  left: 1.5rem;
  font-size: .9rem;
}
</style>

