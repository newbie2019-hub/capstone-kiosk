<template>
 <div class="">
  <div class="post-selected" v-if="viewPost">
    <div class="close-section" @click.prevent="viewPost = false">
      <p>X</p>
    </div>
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="d-flex align-items-center">
          <img v-once src="@/assets/images/logo.png" alt="" height="70" width="70" class="rounded-pill" loading="lazy">
          <div class="d-flex flex-column ms-4 lh-0 mx-auto text-white" style="line-height: 1.2rem">
            <h5>Genreve Fernandez</h5>
            <h6>DIGITS, President</h6>
          </div>
          <div class="me-4">
            <p class="mb-4 text-white">September 23, 2021</p>
          </div>
        </div>
        <div class="text-white mt-5" v-html="selectedPost.postcontent.content"></div>
      </div>
    </div>
  </div>
  <div class="grid-container">
    <div class="title">
      <h2 class="text-center fw-light">DEPARTMENTS</h2>
      <p class="text-muted">Pinch and drag to scroll left or right</p>
    </div>
      <main class="grid-item main">
      <div class="items" ref="horizontalpost" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
        <div @click.prevent="setViewPost(post)" id="introcard" class="item item-post" v-for="(post, i) in posts" :key="i">
          <img src="@/assets/images/entertainment.jpg" class="card-img" alt="...">
          <div class="card-img-overlay text-wrap p-4">
            <h5 class="card-title">{{post.postcontent.title }}</h5>
            <p class="card-text fw-light mt-3 ql-align-justify">{{post.postcontent.post_excerpt}}</p>
          </div>
          <div class="added-by">
            <p>Added by: {{post.useraccount.userinfo.first_name}}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
  <!-- <div class="container">
    <h2 class="text-white mt-5 pt-5">POST SECTION</h2>
    <p class="text-muted">Pinch on a post to view more details</p>
    <hr class="mb-2 mt-2 bg-white zindex-999 w-65"/>
    <div class="row">
      <div class="col-8 overflow-y-scroll">
        <div @click.prevent="setViewPost(post)" class="card-announcement cursor-pointer text-white mt-2" v-for="(post, i) in posts" :key="i">
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-column lh-0" style="line-height: 1.2rem">
              <p>{{post.useraccount.userinfo.first_name}} {{post.useraccount.userinfo.last_name}}</p>
              <p>DIGITS, President</p>
            </div>
            <div class="me-4">
            <p class="mb-4">{{post.created_at}}</p>
            </div>
          </div>
          <div class="d-flex flex-column mt-3 pe-4">
            <p>{{post.postcontent.post_excerpt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div> -->
 </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
  data(){
    return {
      selectedPost: {
        postcontent: {
          content: ''
        }
      },
      viewPost: false,
    }
  },
  computed: {
  ...mapState('info', ['posts'])
  },
  mounted(){
    document.title = "Post Section - Touchless Information Kiosk"
  },
   methods: {
    currentNumber(i){
      return i + 1 < 10 ? `0${i + 1}` : i + 1
    },
    onMouseDown(e) {
      this.isDown = true
      this.startX = e.pageX - this.$refs.horizontalpost.offsetLeft;
      this.scrollLeft = this.$refs.horizontalpost.scrollLeft;
    },
    onMouseUp() {
      this.isDown = false
    },
    onMouseMove(e) {
      if(!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - this.$refs.horizontalpost.offsetLeft;
      const walk = (x - this.startX) * 1.1; //scroll-fast
      this.$refs.horizontalpost.scrollLeft = this.scrollLeft - walk;
    },
    setViewPost(data){
      this.selectedPost = data
      this.viewPost = true
    }
    
  },
}
</script>
<style>
.overflow-y-scroll {
  height: 100% !important;
  max-height: 65vh !important;
  overflow-y: auto!important;
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

.added-by {
  position: absolute;
  bottom: 1rem;
  text-transform: uppercase;
  color: rgb(223, 223, 223);
  font-weight: 400;
  left: 1rem 
}

.ql-align-justify {
  text-align: justify;
  text-justify: inter-word;
}

.close-section {
  position: fixed;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgb(31, 31, 31);
  box-shadow: 0px 0px 5px 2px white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
  cursor: pointer;
  animation: float 4s ease-in-out infinite;
}


@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-15px);
	}
	100% {
		transform: translatey(0px);
	}
}
</style>